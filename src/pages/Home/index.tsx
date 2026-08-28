import { HomeContainer, IntroBanner } from "./styles";
// import { useWindowSize } from 'usehooks-ts'
import { Navbar } from "../../components/Navbar";
import { HowItWorks } from "../../components/HowItWorks";
import { Particulars } from "../../components/Particulars";
import { Services } from "../../components/Services";
// import { Packs } from "../../components/Packs";
import { Feedbacks } from "../../components/Feedbacks";
import { WhyUs } from "../../components/WhyUs";
// import { Certified } from "../../components/Certified";
// import { Beeflix } from "../../components/Beeflix";
import { RefsContext } from "../../contexts/RefsProvider";
import { useContext } from "react";
import { Footer } from "../../components/Footer";
// import { WhatsappButton } from "../../components/WhatsappButton";
import beeLogo from "../../assets/Bee-Takes-Rebranding-Logo-Colorida.webp";
import { BudgetButton } from "../../components/BudgetButton";

export function Home() {
  // const { width } = useWindowSize()

  // const whatsappNumber = "5584981033283"
  // const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."
  // const whatsappAddress = width >= 620 ?
  // `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  // `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  const { homeRef } = useContext(RefsContext);

  return (
    <HomeContainer>
      <Navbar />
      
      <IntroBanner ref={homeRef} id="section-home">
        <div className="bg" aria-hidden="true" />


        {/* <div className="bg" /> */}
        <div className="intro-content">
          <img 
            className="intro-logo" 
            src={beeLogo} 
            alt="Logotipo da Bee Takes: Drone e Serviços Audiovisuais" 
          />

          <div className="intro-main">
            <div className="intro-copy">
              <span className="intro-overtext">
                PRODUTORA ESPECIALIZADA EM
              </span>

              <h1 className="intro-text">
                AUDIOVISUAL IMOBILIÁRIO
              </h1>
              
              <p className="intro-subtext">
                Planejamos como cada imóvel deve ser apresentado e produzimos materiais audiovisuais para comunicar seus diferenciais com clareza e intenção.
              </p>
            </div>
          </div>

          <div className="intro-action">
            <BudgetButton aria-label="Falar sobre um imóvel" />
          </div>
        </div>

      </IntroBanner>

      <Particulars />
      <Services />
      <HowItWorks />
      {/* <Packs /> */}
      <Feedbacks />
      {/* <Beeflix /> */}
      <WhyUs />
      {/* <Certified /> */}
      <Footer />

      {/* <WhatsappButton /> */}
    </HomeContainer>
  )
}