import type { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { BudgetButtonContainer } from "./styles";

type BudgetButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

export function BudgetButton(props: BudgetButtonProps) {
  const navigate = useNavigate();

  return (
    <BudgetButtonContainer
      type="button"
      {...props}
      onClick={() => navigate("/contact-form")}
    >
      Falar sobre um imóvel
    </BudgetButtonContainer>
  );
}