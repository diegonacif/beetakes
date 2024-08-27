import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ContactFormCharacterCounter, ContactFormCheckboxContainer, ContactFormContainer, ContactFormInput, ContactFormInputWrapper, ContactFormLabel, ContactFormTextArea } from "./styles";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { PatternFormat } from "react-number-format";
import { Selector } from "../Selector";
import { useCallback, useContext, useEffect, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { db } from "../../../../services/firebase.config";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import { ToastifyContext } from "../../../../contexts/ToastifyProvider";

interface IFormInput {
  name: string;
  enterprise?: string;
  email: string;
  phone: string;
  serviceCategory: string;
  description: string;
  budget: string;
  location: string;
}

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const serviceCategoryList = ['Imobiliário', 'Obras', 'Eventos', 'Turismo', 'Ensaios', 'Video Marketing', 'Outros'];
const budgetList = ['Menos de R$ 800', 'R$ 800 - R$ 2.000', 'R$ 2.000 - R$ 5.000', 'Acima de R$ 5.000'];

const schema = yup.object().shape({
  name: yup.string().required('Nome precisa ser preenchido'),
  enterprise: yup.string(),
  email: yup.string().matches(emailRegex, "Formato inválido de email").required("Insira seu email"),
  phone: yup.string().required("Insira seu telefone").min(10),
  serviceCategory: yup.string().required("Uma opção precisa ser selecionada"),
  description: yup.string().required("Nos conte algo sobre o projeto"),
  budget: yup.string().required("Uma opção precisa ser selecionada"),
  location: yup.string().required("Nos diga a localização do serviço"),
});

export function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isValid, touchedFields }, 
    setValue, 
    watch, 
    clearErrors, 
    trigger,
    control 
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const { notifySuccess, notifyError } = useContext(ToastifyContext);

  const [selectedServiceCategory, setSelectedServiceCategory] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [isTermsCheckbox, setIsTermsCheckbox] = useState(false);
  const [isSendButtonActive, setIsSendButtonActive] = useState(false);
  const navigate = useNavigate();

  const descriptionCounter = watch('description') ? watch('description').length : 0;

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    const requestId = uuid();

    const requestData = {
      name: data.name,
      enterprise: data.enterprise,
      email: data.email,
      phone: data.phone,
      serviceCategory: data.serviceCategory,
      description: data.description,
      budget: data.budget,
      location: data.location,
      createdAt: Timestamp.now(),
      status: 'novo'
    }

    try {
      await setDoc(doc(db, 'budget-requests', requestId), requestData);

      setValue('name', '');
      setValue('enterprise', '');
      setValue('email', '');
      setValue('phone', '');
      setSelectedServiceCategory('');
      setValue('description', '');
      setSelectedBudget('');
      setValue('location', '');
      setIsTermsCheckbox(false);

      navigate("/");
      notifySuccess("Solicitação enviada com sucesso!");
    } catch (error) {
      console.error('Error creating request: ', error);
      notifyError("Erro ao enviar solicitação!");
    }
  }

  function handleServiceCategoryChange(selectedOption: string) {
    setSelectedServiceCategory(selectedOption);
    setValue('serviceCategory', selectedOption ? selectedOption : '');
    selectedOption.length !== 0 && clearErrors('serviceCategory')
  }

  function handleBudgetChange(selectedOption: string) {
    setSelectedBudget(selectedOption);
    setValue('budget', selectedOption ? selectedOption : '');
    selectedOption.length !== 0 && clearErrors('budget')
  }

  const handleSendButton = useCallback(() => {
    if (!isValid || !isTermsCheckbox) {
      setIsSendButtonActive(false);
    } else {
      setIsSendButtonActive(true);
    }
  }, [isValid, isTermsCheckbox]);

  useEffect(() => {
    handleSendButton();
  }, [isValid, handleSendButton])

  useEffect(() => {
    function triggerErrors() {
      if(touchedFields.location === true || isTermsCheckbox === true) {
        trigger();
      }
    }

    triggerErrors();
  }, [touchedFields.location, trigger, isTermsCheckbox, isValid])

  return (
    <ContactFormContainer>
      <h2>Solicitar orçamento</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* NOME */}
        <ContactFormInputWrapper>
          <ContactFormLabel>Nome Completo</ContactFormLabel>
          <ContactFormInput 
            placeholder="digite seu nome" 
            maxLength={40}
            {...register('name')}
            id={
              errors.name && watch('name') === "" ?
              "error" : ""
            }
          />
        </ContactFormInputWrapper>

        {/* NOME DA EMPRESA */}
        <ContactFormInputWrapper>
          <ContactFormLabel>Nome da Empresa</ContactFormLabel>
          <ContactFormInput 
            placeholder="(opcional)" 
            maxLength={40}
            {...register('enterprise')}
          />
        </ContactFormInputWrapper>

        {/* EMAIL */}
        <ContactFormInputWrapper>
          <ContactFormLabel>E-mail</ContactFormLabel>
          <ContactFormInput 
            placeholder="seu_email@gmail.com" 
            {...register('email')}
            maxLength={40}
            id={
              errors.email && watch('email') === "" ?
              "error" : ""
            }
          />
        </ContactFormInputWrapper>

        {/* TELEFONE */}
        <ContactFormInputWrapper>
          <ContactFormLabel>Telefone</ContactFormLabel>
          <Controller 
            control={control}
            name='phone'
            render={({ field: { onChange }}) => (
              <PatternFormat
                value={watch('phone')}
                valueIsNumericString={true}
                customInput={ContactFormInput}
                format="## # ####-####"
                placeholder='84 9 9999-9999'
                onValueChange={(values) => onChange(values.value)}
                id={
                  errors.phone && watch('phone') === undefined ?
                  "error" :
                  errors.phone && watch('phone') === "" ?
                  "error" :
                  errors.phone && watch('phone').length < 10 ?
                  "error" : ""
                }
              />
            )}
          />  
        </ContactFormInputWrapper>

        {/* TIPO DE SERVIÇO */}
        <ContactFormInputWrapper>
          <Selector 
            error={!!errors.serviceCategory}
            handleChanger={handleServiceCategoryChange}
            label="Tipo de Serviço"
            selected={selectedServiceCategory}
            dataList={serviceCategoryList}
          />
        </ContactFormInputWrapper>

        {/* DESCRIÇÃO */}
        <ContactFormInputWrapper>
          <ContactFormLabel>Descrição breve do projeto</ContactFormLabel>
          <ContactFormTextArea 
            placeholder="nos conte sobre seu projeto" 
            {...register('description')}
            maxLength={250}
            id={
              errors.description && watch('description') === "" ?
              "error" : ""
            }
          />
          <ContactFormCharacterCounter>({descriptionCounter} / 250)</ContactFormCharacterCounter>
        </ContactFormInputWrapper>

        {/* ORÇAMENTO */}
        <ContactFormInputWrapper>
          <Selector 
            error={!!errors.budget}
            handleChanger={handleBudgetChange}
            label="Faixa de Orçamento Disponível"
            selected={selectedBudget}
            dataList={budgetList}
          />
        </ContactFormInputWrapper>

        {/* LOCAL DO SERVIÇO */}
        <ContactFormInputWrapper>
          <ContactFormLabel>Local do Serviço</ContactFormLabel>
          <ContactFormInput 
            placeholder="cidade / estado" 
            {...register('location')}
            id={
              errors.location && watch('location') === "" ?
              "error" : ""
            }
          />
        </ContactFormInputWrapper>

        {/* TERMOS */}
        <ContactFormInputWrapper>
          <ContactFormCheckboxContainer checked={isTermsCheckbox} onCheckedChange={() => setIsTermsCheckbox(prevState => !prevState)}>
            <Checkbox.Indicator className="checkbox-indicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </ContactFormCheckboxContainer>
          <span id="terms-text">Entendo que os serviços de drone são especializados e exigem investimento adequado.</span>
        </ContactFormInputWrapper>

        <button type="submit" disabled={!isSendButtonActive}>Enviar</button>
      </form>
    </ContactFormContainer>
  )
}