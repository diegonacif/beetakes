import { ServiceContainer } from "./styles";

interface ServicesDataProps {
  img: string;
  title: string;
  text: string;
}

interface ServicesProps {
  data: ServicesDataProps
}

export function Service({ data }: ServicesProps) {
  return (
    <ServiceContainer>
      <div className="service-image-wrapper">
        <img src={data.img} alt="" />
      </div>
      <h3>{data.title}</h3>
      <span>{data.text}</span>
    </ServiceContainer>
  )
}