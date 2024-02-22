import { servicesData } from "../../constants/servicesData";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Service } from "./components/Service";
import { ServicesContainer } from "./styles";

export function Services() {
  const breakpoint = useBreakpoint();

  return (
    <ServicesContainer data-breakpoint={breakpoint} id="section-services">
      <h2 className="services-title">Serviços</h2>
      {
        servicesData.map((service, index) => (
          <Service key={index} data={service} />
        ))
      }
    </ServicesContainer>
  )
}