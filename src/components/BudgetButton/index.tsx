import type { ButtonHTMLAttributes } from "react";
// import { useNavigate } from "react-router-dom";
import { BudgetButtonContainer } from "./styles";

type BudgetButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

const whatsappNumber = "5584981033283"

export function BudgetButton(props: BudgetButtonProps) {
  // const navigate = useNavigate();

  return (
    <BudgetButtonContainer
      type="button"
      {...props}
      onClick={() => open(`https://wa.me/${whatsappNumber}`)}
    >
      Falar sobre um imóvel
    </BudgetButtonContainer>
  );
}