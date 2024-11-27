import { useContext } from "react";
import { servicesData } from "../../constants/servicesData";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Service } from "./components/Service";
import { ServicesContainer } from "./styles";
import { RefsContext } from "../../contexts/RefsProvider";
import { BudgetButton } from "../BudgetButton";
import { useNavigate } from "react-router-dom";

export function Services() {
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  const { servicesRef } = useContext(RefsContext);

  return (
    <ServicesContainer data-breakpoint={breakpoint} id="section-services" ref={servicesRef}>
      <h2 className="services-title">Serviços</h2>
      {
        servicesData.map((service, index) => (
          <div
            onClick={() => navigate(`services/${service.id}`)}
            id="service-wrapper"
          >
            <Service 
              key={index} 
              data={service} 
            />
          </div>
        ))
      }
      <BudgetButton />
    </ServicesContainer>
  )
}