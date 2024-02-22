import { HomeContainer, IntroBanner } from "./styles";
// import { useWindowSize } from 'usehooks-ts'
import { Navbar } from "../../components/Navbar";
import { HowItWorks } from "../../components/HowItWorks";
import { Particulars } from "../../components/Particulars";
import { Services } from "../../components/Services";
import { Packs } from "../../components/Packs";

export function Home() {
  // const { width } = useWindowSize()

  // const whatsappNumber = "5584981033283"
  // const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."
  // const whatsappAddress = width >= 620 ?
  // `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  // `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <HomeContainer>
      <Navbar />
      <IntroBanner id="section-home">
        <div className="bg" />
        <h1 className="intro-text">Seu parceiro ideal em serviços de drone.</h1>
        <h2 className="intro-text">Somos uma empresa especializada, que oferece soluções inovadoras e personalizadas para diversos segmentos.</h2>
      </IntroBanner>
      <Particulars />
      <Services />
      <HowItWorks />
      <Packs />
      <footer>
        <span onClick={() => window.open('https://www.linkedin.com/in/diegonacif-dev/')}>Desenvolvido por Diego Nacif</span>
      </footer>
    </HomeContainer>
  )
}