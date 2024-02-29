import { ParticularContainer } from "./styles";

interface ParticularDataProps {
  img: string;
  title: string;
  text: string;
}

interface ParticularProps {
  data: ParticularDataProps
}

export function Particular({ data }: ParticularProps) {
  return (
    <ParticularContainer>
      <img src={data.img} alt="ícone de imagens aéreas" />
      <h3>{data.title}</h3>
      <span>{data.text}</span>
    </ParticularContainer>
  )
}