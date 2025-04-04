import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ContactFormCharacterCounter, ContactFormCheckboxContainer, ContactFormContainer, ContactFormInput, ContactFormInputWrapper, ContactFormLabel, ContactFormTextArea, LoadingLayer } from "./styles";
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
import { ToastifyContext } from "../../../../contexts/ToastifyProvider";
import axios from "axios";
import { ThreeCircles } from 'react-loader-spinner'
import { SuccessSubmission } from "../SuccessSubmission";
import { pixelFormView } from "../../../../utils/facebookEvents";
import { useEstados } from "../../../../hooks/useEstados";
import { useCidades } from "../../../../hooks/useCidades";

interface IFormInput {
  name: string;
  // enterprise?: string;
  // email: string;
  phone: string;
  serviceCategory: string;
  description: string;
  budget: string;
  // location: string;
  estado: string;
  cidade: string;
}

interface IRegiao {
  id: number;
  sigla: string;
  nome: string;
}

interface IEstado {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegiao;
}

// const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const serviceCategoryList = ['Imobiliário', 'Obras', 'Eventos', 'Turismo', 'Ensaios', 'Video Marketing', 'Outros'];
const budgetList = ['Menos de R$ 800', 'R$ 800 - R$ 2.000', 'R$ 2.000 - R$ 5.000', 'Acima de R$ 5.000'];

const schema = yup.object().shape({
  name: yup.string().required('Nome precisa ser preenchido'),
  // enterprise: yup.string(),
  // email: yup.string().matches(emailRegex, "Formato inválido de email").required("Insira seu email"),
  phone: yup.string().required("Insira seu telefone").min(10),
  serviceCategory: yup.string().required("Uma opção precisa ser selecionada"),
  description: yup.string().required("Nos conte algo sobre o projeto"),
  budget: yup.string().required("Uma opção precisa ser selecionada"),
  // location: yup.string().required("Nos diga a localização do serviço"),
  estado: yup.string().required("Selecione o estado onde o serviço será realizado"),
  cidade: yup.string().required("Selecione a cidade onde o serviço será realizado")
});

export function ContactFormLesser() {
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

  const { notifyError } = useContext(ToastifyContext);

  const [selectedServiceCategory, setSelectedServiceCategory] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedEstado, setSelectedEstado] = useState('');
  const [selectedUF, setSelectedUF] = useState('');
  const [selectedCidade, setSelectedCidade] = useState('');
  const [isTermsCheckbox, setIsTermsCheckbox] = useState(false);
  const [isSendButtonActive, setIsSendButtonActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmited, setIsSubmitted] = useState(false);
  const {estados} = useEstados();
  const {cidades} = useCidades({uf: selectedUF});

  const descriptionCounter = watch('description') ? watch('description').length : 0;

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    const requestId = uuid();

    const requestData = {
      name: data.name,
      // enterprise: data.enterprise,
      // email: data.email,
      phone: data.phone,
      serviceCategory: data.serviceCategory,
      description: data.description,
      budget: data.budget,
      // location: data.location,
      createdAt: Timestamp.now(),
      status: 'novo'
    }

    try {
      setIsSubmitting(true);
      await setDoc(doc(db, 'budget-requests', requestId), requestData);

      // await axios.post('http://localhost:3001/send-email', requestData); // para back local
      const response = await axios.post(
        'https://beetakes-email-backend.vercel.app/api/send-email', 
        {
          "name": `${requestData.name}`,
          // "email": `${requestData.email}`,
          "phone": `${requestData.phone}`,
          "serviceCategory": `${requestData.serviceCategory}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      ); // para back na vercel
      console.log('resposta do backend', response);

      setValue('name', '');
      // setValue('enterprise', '');
      // setValue('email', '');
      setValue('phone', '');
      setSelectedServiceCategory('');
      setValue('description', '');
      setSelectedBudget('');
      // setValue('location', '');
      setIsTermsCheckbox(false);


      setIsSubmitting(false);
      setIsSubmitted(true);
      // navigate("/");
      // notifySuccess("Solicitação enviada com sucesso!");
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

  function handleEstadoChange(selectedOption: string) {
    setSelectedEstado(selectedOption);
    // getSiglaByNome(estados, selectedEstado)
    setValue('estado', selectedOption ? selectedOption : '');
    selectedOption.length !== 0 && clearErrors('estado')
  }

  useEffect(() => {
    getSiglaByNome(estados, selectedEstado)
  }, [selectedEstado, estados])

  function getSiglaByNome(estados: IEstado[], nomeEstado: string) {
    const nomeLower = nomeEstado.toLowerCase();

    for (const estado of estados) {
      if (estado.nome.toLowerCase() === nomeLower) {
        return setSelectedUF(estado.sigla)
      }
    }
  }

  function handleCidadeChange(selectedOption: string) {
    setSelectedCidade(selectedOption);
    setValue('cidade', selectedOption ? selectedOption : '');
    selectedOption.length !== 0 && clearErrors('cidade')
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
      if(touchedFields.estado === true || isTermsCheckbox === true) {
        trigger();
      }
    }

    triggerErrors();
  }, [touchedFields.estado, trigger, isTermsCheckbox, isValid])

  useEffect(() => {
    pixelFormView();
  }, [])

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

        {/* Estados */}
        <ContactFormInputWrapper>
          <Selector 
            error={!!errors.estado}
            handleChanger={handleEstadoChange}
            label="Estado"
            selected={selectedEstado}
            dataList={estados.map((estado) => estado.nome)}
          />
        </ContactFormInputWrapper>

        {/* Cidades */}
        <ContactFormInputWrapper>
          <Selector 
            error={!!errors.cidade}
            handleChanger={handleCidadeChange}
            label="Cidade"
            selected={selectedCidade}
            dataList={cidades.map((cidade) => cidade.nome)}
          />
        </ContactFormInputWrapper>

        {/* LOCAL DO SERVIÇO */}
        {/* <ContactFormInputWrapper>
          <ContactFormLabel>Local do Serviço</ContactFormLabel>
          <ContactFormInput 
            placeholder="cidade / estado" 
            {...register('location')}
            id={
              errors.location && watch('location') === "" ?
              "error" : ""
            }
          />
        </ContactFormInputWrapper> */}

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
      {
        isSubmitting && (
          <LoadingLayer>
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#f9ce38"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </LoadingLayer>
        )
      }
      {
        isSubmited && (
          <SuccessSubmission />
        )
      }
    </ContactFormContainer>
  )
}