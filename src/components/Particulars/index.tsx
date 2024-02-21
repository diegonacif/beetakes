import { particularData } from "../../constants/particularsData";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Particular } from "./components/Particular";
import { ParticularsContainer } from "./styles";

export function Particulars() {
  const breakpoint = useBreakpoint();

  return (
    <ParticularsContainer data-breakpoint={breakpoint}>
      <Particular data={particularData[0]} />
      <Particular data={particularData[1]} />
      <Particular data={particularData[2]} />
      <Particular data={particularData[3]} />
    </ParticularsContainer>
  )
}