import { BudgetsList } from "./components/BudgetsList";
import { BudgetsPanelContainer } from "./styles";

export function BudgetsPanel() {
  return (
    <BudgetsPanelContainer>
      <BudgetsList />
    </BudgetsPanelContainer>
  )
}