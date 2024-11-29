import { ServicesBeeflixContainer, ServicesBeeflixGrid } from "./styles";
import { SampleVideo } from "../../../../components/Beeflix/components/SampleVideo";
import { BudgetButton } from "../../../../components/BudgetButton";
import { servicesFolioData } from "../../../../constants/serviceFolioData";
import { useNavigate, useParams } from "react-router-dom";
import { useBreakpoint } from "../../../../hooks/useBreakpoint";
import { DynamicText } from "../../../../components/DynamicText";

export function ServicesBeeflix() {
  const breakpoint = useBreakpoint();
  const { service } = useParams();
  const navigate = useNavigate();
  const currentService = servicesFolioData.find((item) => item.id === service);
  const currentText = currentService ? currentService.text : '';

  return (
    <ServicesBeeflixContainer id="section-beeflix">
      <h1 id="services-beeflix-title">{currentService?.title}</h1>
      <section id="flex-columns">
        <div 
          id={
            ["notebook", "desktop", "widescreen"].includes(breakpoint) ?
            "single-column-widescreen" :
            "single-column"
          }
        >
          {/* <ServiceText>{currentService?.text}</ServiceText> */}
          <DynamicText text={currentText} />
          { ["notebook", "desktop", "widescreen"].includes(breakpoint) && (
            <button 
              id="internal-budget-button"
              onClick={() => navigate('/contact-form')}
            >
              Solicitar orçamento
            </button>
          )}
        </div>

        <ServicesBeeflixGrid>
          {currentService ? (
            currentService.videos.map((video, index) => (
              <SampleVideo data={video} key={index} />
            ))
          ) : (
            <p>Serviço não encontrado!</p>
          )}
        </ServicesBeeflixGrid>
      </section>
      { (breakpoint === "mobile" || breakpoint === "tablet") && (
        <BudgetButton />
      )}
    </ServicesBeeflixContainer>
  )}