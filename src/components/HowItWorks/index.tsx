import { HowItWorksContainer, ProtocolStep, ProtocolStepCircle } from "./styles";
import nextArrows from "../../assets/next-arrows.png";

export function HowItWorks() {
  return (
    <HowItWorksContainer>
      <h1>Como funciona?</h1>
      <div className="step-wrapper">
        <ProtocolStep>
          <ProtocolStepCircle step={"firstContact"}>
            <div id="step-number">1</div>
          </ProtocolStepCircle>
          <p>Primeiro contato para entendermos suas necessidades.</p>
        </ProtocolStep>

        <img src={nextArrows} alt="next step arrow" className="next-arrow" />

        <ProtocolStep>
          <ProtocolStepCircle step={"contract"}>
            <div id="step-number">2</div>
          </ProtocolStepCircle>
          <p>Apresentaremos a proposta comercial.</p>
        </ProtocolStep>
        
        <img src={nextArrows} alt="next step arrow" className="next-arrow" />
        
        <ProtocolStep>
          <ProtocolStepCircle step={"execution"}>
            <div id="step-number">3</div>
          </ProtocolStepCircle>
          <p>Agendamento e execução da captação de imagens.</p>
        </ProtocolStep>
        
        <img src={nextArrows} alt="next step arrow" className="next-arrow" />

        <ProtocolStep>
          <ProtocolStepCircle step={"deliver"}>
            <div id="step-number">4</div>
          </ProtocolStepCircle>
          <p>Edição e entrega do material.</p>
        </ProtocolStep>
      </div>
    </HowItWorksContainer>
  )
}