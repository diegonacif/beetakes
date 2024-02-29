import { FooterContainer, FooterFoot, FooterInner, FooterSocials } from "./styles";
import beeLogo from "../../assets/bee-logo-3.png";
import { Envelope, FacebookLogo, InstagramLogo, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react";
import { useWindowSize } from "usehooks-ts";

export function Footer() {
  const { width } = useWindowSize()

  const currentyear = new Date().getFullYear();

  const instagramAddress = "http://www.instagram.com/bee.takes";
  const facebookAddress = "https://www.facebook.com/profile.php?id=61553302315879&mibextid=ZbWKwL";
  const tiktokAddress = "https://www.tiktok.com/@bee.takes?_t=8kHAB64HwpB&_r=1";
  const mailAddress = "mailto:beetakes.drones@gmail.com";

  const whatsappNumber = "5584981033283"
  // const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."
  const whatsappAddress = width >= 1024 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral
  return (
    <FooterContainer>
      <FooterInner>
        <img src={beeLogo} alt="Bee Takes logo" id="beelogo-footer" />
        <FooterSocials>
          <WhatsappLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(whatsappAddress)}
            id="whatsapp-logo"
          />
          <InstagramLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(instagramAddress)}
            id="instagram-logo"
          />
          <FacebookLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(facebookAddress)}
            id="facebook-logo"
          />
          <TiktokLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(tiktokAddress)}
            id="tiktok-logo"
          />
          <Envelope 
            size={32} 
            weight="regular" 
            onClick={() => window.open(mailAddress)}
            id="mail-logo"
          />
        </FooterSocials>
      </FooterInner>
      {/* <div>©2024 - Todos os direitos reservados</div> */}
      <FooterFoot>
        <span id="rights-reserved">© {currentyear} Bee Takes -  Todos os direitos reservados</span>
        <span id="developed-by" onClick={() => window.open('https://www.linkedin.com/in/diegonacif-dev/')}>Desenvolvido por Diego Nacif</span>
      </FooterFoot>
    </FooterContainer>
  )
}