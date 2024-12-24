import ReactPixel from 'react-facebook-pixel';

// Evento de Solicitação de orçamento 
export const pixelBudgetRequest = () => {
  ReactPixel.track('Lead', {
    category: 'BudgetRequest',
    label: 'Solicitação de orçamento',
  })
}

export const pixelFormView = () => {
  ReactPixel.track('ViewContent', {
    category: 'BudgetRequest',
    label: 'Formulário de Orçamento',
  })
}