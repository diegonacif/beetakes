import { beeflixData } from "../../constants/beeflixData";
import { SampleVideo } from "./components/SampleVideo";
import { BeeflixContainer, BeeflixGrid } from "./styles";

export function Beeflix() {
  return (
    <BeeflixContainer>
      <h1 id="beeflix-title">Beeflix</h1>
      <BeeflixGrid>
        {
          beeflixData.map((beeflixData, index) => (
            <SampleVideo data={beeflixData} key={index} />
          ))
        }
      </BeeflixGrid>
    </BeeflixContainer>
  )
}