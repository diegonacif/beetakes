import { HomeContainer, IntroBanner } from "./styles";
// import { useWindowSize } from 'usehooks-ts'
import { Navbar } from "../../components/Navbar";
import { HowItWorks } from "../../components/HowItWorks";

export function Home() {
  // const { width } = useWindowSize()

  // const whatsappNumber = "5584981033283"
  // const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."
  // const whatsappAddress = width >= 620 ?
  // `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  // `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <HomeContainer>
      <IntroBanner>
        <Navbar />
        <div className="bg" />
      </IntroBanner>
      <HowItWorks />
      <footer>
        <span onClick={() => window.open('https://www.linkedin.com/in/diegonacif-dev/')}>Desenvolvido por Diego Nacif</span>
      </footer>
    </HomeContainer>
  )
}