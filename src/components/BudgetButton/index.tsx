import { useNavigate } from "react-router-dom";
import { BudgetButtonContainer } from "./styles";

export function BudgetButton() {
  const navigate = useNavigate();

  return (
    <BudgetButtonContainer onClick={() => navigate('/contact-form')}>Solicitar orçamento</BudgetButtonContainer>
  )
}