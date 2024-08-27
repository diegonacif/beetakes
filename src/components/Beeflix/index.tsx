import { useContext } from "react";
import { beeflixData } from "../../constants/beeflixData";
import { SampleVideo } from "./components/SampleVideo";
import { BeeflixContainer, BeeflixGrid } from "./styles";
import { RefsContext } from "../../contexts/RefsProvider";
import { BudgetButton } from "../BudgetButton";

export function Beeflix() {
  const { beeflixRef } = useContext(RefsContext);
  return (
    <BeeflixContainer id="section-beeflix" ref={beeflixRef}>
      <h1 id="beeflix-title">Beeflix</h1>
      <BeeflixGrid>
        {
          beeflixData.map((beeflixData, index) => (
            <SampleVideo data={beeflixData} key={index} />
          ))
        }
      </BeeflixGrid>
      <BudgetButton />
    </BeeflixContainer>
  )
}