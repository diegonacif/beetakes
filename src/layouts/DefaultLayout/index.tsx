import { Outlet } from "react-router-dom";
import { LayoutContainer, LayoutContent } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <LayoutContent>
        <Outlet /> 
      </LayoutContent>
    </LayoutContainer>
  )
}