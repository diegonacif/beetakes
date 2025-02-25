import { HomeContainer, IntroBanner } from "./styles";
// import { useWindowSize } from 'usehooks-ts'
import { Navbar } from "../../components/Navbar";
import { HowItWorks } from "../../components/HowItWorks";
import { Particulars } from "../../components/Particulars";
import { Services } from "../../components/Services";
// import { Packs } from "../../components/Packs";
import { Feedbacks } from "../../components/Feedbacks";
import { WhyUs } from "../../components/WhyUs";
import { Certified } from "../../components/Certified";
import { Beeflix } from "../../components/Beeflix";
import { RefsContext } from "../../contexts/RefsProvider";
import { useContext } from "react";
import { Footer } from "../../components/Footer";
// import { WhatsappButton } from "../../components/WhatsappButton";
import beeLogo from "../../assets/bee-logo-3_comp.webp";
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
      {/* <IntroBanner ref={homeRef} id="section-home">
        <div className="bg" />
        <img className="intro-logo" src={beeLogo} alt="bee takes logo" />
        <h1 className="intro-overtext">SEU PARCEIRO IDEAL EM</h1>
        <h1 className="intro-text">SERVIÇOS DE DRONE.</h1>
        <h2 className="intro-subtext">Especialistas em imagens aéreas e produções cinematográficas para empresas.<br />Aumente suas vendas com vídeos de alta qualidade.</h2>
        <BudgetButton isHigher={true} />
      </IntroBanner> */}
      <IntroBanner ref={homeRef} id="section-home">
        <div className="bg" />
        <img 
          className="intro-logo" 
          src={beeLogo} 
          alt="Logotipo da Bee Takes: Drone e Serviços Audiovisuais" 
        />
        <span className="intro-overtext">SEU PARCEIRO IDEAL EM</span>
        <h1 className="intro-text">SERVIÇOS DE DRONE.</h1>
        <h2 className="intro-subtext">Especialistas em imagens aéreas e produções cinematográficas para empresas.<br />Aumente suas vendas com vídeos de alta qualidade.</h2>
        <BudgetButton isHigher={true} aria-label="Solicitar orçamento" />
      </IntroBanner>
      <Particulars />
      <Services />
      <HowItWorks />
      {/* <Packs /> */}
      <Feedbacks />
      <Beeflix />
      <WhyUs />
      <Certified />
      <Footer />

      {/* <WhatsappButton /> */}
    </HomeContainer>
  )
}