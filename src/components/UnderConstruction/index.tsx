import { UnderConstructionContainer } from "./styles";
import beeLogo from '../../assets/bee-logo-2.png'
import { Link } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";
import backSign from '../../assets/greater-than-sign.svg';
import whatsappIcon from '../../assets/whatsapp-icon-yellow.png';

export function UnderConstruction() {
  const { width } = useWindowSize()

  const whatsappNumber = "5584981033283"
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."
  const whatsappAddress = width >= 620 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <UnderConstructionContainer>
      <main className="main">
        <Link to={'..'} id="back-btn">
          <img src={backSign} alt="" />
          <span>Voltar</span>
        </Link>
        <section>
          <img src={beeLogo} alt="bee takes logo" />
          <h2>Nosso portfólio estará no ar em breve.</h2>
          <div 
            className="contact-us-wrapper"
            onClick={() => window.open(whatsappAddress + encodeURI(whatsappMessage))}
          >
            <span>Tire suas dúvidas conosco.</span>
            <img src={whatsappIcon} alt="" />
          </div>

          <footer>
            <span onClick={() => window.open('https://www.linkedin.com/in/diegonacif-dev/')}>Desenvolvido por Diego Nacif</span>
          </footer>
        </section>
      </main>

      <div className="bg" />
      <div className="bg overlay" />
      
    </UnderConstructionContainer>
  )
}
