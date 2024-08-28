import { useNavigate } from "react-router-dom";
import { BudgetButtonContainer } from "./styles";

interface BudgetButtonProps {
  isHigher?: boolean;
}

export function BudgetButton(props: BudgetButtonProps)  {
  const navigate = useNavigate();

  return (
    <BudgetButtonContainer 
      onClick={() => navigate('/contact-form')}
      id={props.isHigher === true ? "budget-btn-higher" : ""}
    >
      Solicitar orçamento
    </BudgetButtonContainer>
  )
}