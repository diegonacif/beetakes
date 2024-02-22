import { Pack } from "./components/Pack";
import { PacksContainer } from "./styles";
import { packsData } from "../../constants/packsData";

export function Packs() {
  console.log(packsData);

  return (
    <PacksContainer>
      {
        packsData.map((pack, index) => (
          <Pack key={index} data={pack} />
        ))
      }
    </PacksContainer>
  )
}