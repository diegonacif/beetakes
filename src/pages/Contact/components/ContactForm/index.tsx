import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ContactFormCheckboxContainer, ContactFormContainer, ContactFormInput, ContactFormInputWrapper, ContactFormLabel } from "./styles";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { PatternFormat } from "react-number-format";
import { Selector } from "../Selector";
import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

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

const serviceCategoryList = ['Imobiliário', 'Evento', 'Institucional', 'Fotografia Aérea', 'Outro'];
const budgetList = ['Menos de R$ 1.000', 'R$ 1.000 - R$ 5.000', 'R$ 5.000 - R$ 10.000', 'Acima de R$ 10.000'];

const schema = yup.object().shape({
  name: yup.string().required('Nome precisa ser preenchido'),
  enterprise: yup.string(),
  email: yup.string().matches(emailRegex, "Formato inválido de email").required("Insira seu email"),
  phone: yup.string().required("Insira seu telefone"),
  serviceCategory: yup.string().required("Uma opção precisa ser selecionada"),
  description: yup.string().required("Nos conte algo sobre o projeto"),
  budget: yup.string().required("Uma opção precisa ser selecionada"),
  location: yup.string().required("Nos diga a localização do serviço"),
});

export function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    setValue, 
    watch, 
    clearErrors, 
    control 
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const [selectedServiceCategory, setSelectedServiceCategory] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [isTermsCheckbox, setIsTermsCheckbox] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    console.log(data);
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

  // console.log(isTermsCheckbox);

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
                className={errors.phone && 'with-error'}
                placeholder='84 9 9999-9999'
                onValueChange={(values) => onChange(values.value)}
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
          <ContactFormInput 
            placeholder="nos conte sobre seu projeto" 
            {...register('description')}
          />
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
          />
        </ContactFormInputWrapper>

        {/* TERMOS */}
        <ContactFormInputWrapper>
          {/* <ContactFormLabel>Aceitação dos termos</ContactFormLabel> */}
          {/* <ContactFormInput placeholder="Entendo que os serviços de drone são especializados e exigem investimento adequado." /> */}
          <ContactFormCheckboxContainer checked={isTermsCheckbox} onCheckedChange={() => setIsTermsCheckbox(prevState => !prevState)}>
            <Checkbox.Indicator className="checkbox-indicator">
              <CheckIcon />
            </Checkbox.Indicator>
          </ContactFormCheckboxContainer>
          <span id="terms-text">Entendo que os serviços de drone são especializados e exigem investimento adequado.</span>
        </ContactFormInputWrapper>

        <button type="submit" disabled={false}>Enviar</button>
      </form>
    </ContactFormContainer>
  )
}