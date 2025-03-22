import { Envelope, FacebookLogo, TiktokLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";
import { FooterSocials, LTBody, LTButton, LTButtonsWrapper, LTFooterBar, LTHeader, LTSubtitle, LinkTreeContainer } from "./styles";
import { useWindowSize } from "usehooks-ts";

export function LinkTree() {
  const { width } = useWindowSize()

  const websiteAddress = "http://www.beetakes.com.br";
  const formAddress = "http://www.beetakes.com.br/contact-form";

  const youtubeAddress = "https://www.youtube.com/@BeeTakes";
  const facebookAddress = "https://www.facebook.com/profile.php?id=61553302315879&mibextid=ZbWKwL";
  const tiktokAddress = "https://www.tiktok.com/@bee.takes?_t=8kHAB64HwpB&_r=1";
  const mailAddress = "mailto:beetakes.drones@gmail.com";

  const whatsappNumber = "5584981033283"
  // const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."
  const whatsappAddress = width >= 1024 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <LinkTreeContainer>
    <LTHeader>
      <div id="imgWrapper" />
    </LTHeader>
    <LTBody>
      <h1>Bee Takes</h1>
      <h2>Imagens Aéreas | Produção de Vídeos</h2>

      <LTButtonsWrapper>
        <LTButton 
          onClick={() => window.open(formAddress)}
        >
          Solicite um orçamento
        </LTButton>
        <LTButton 
          onClick={() => window.open(websiteAddress)}
          color="yellow"
        >
          Nosso Site
        </LTButton>
      </LTButtonsWrapper>

      <LTSubtitle>
        <span>
          Especialistas em imagens aéreas e produções de vídeo para empresas.
        </span>
      </LTSubtitle>

      <FooterSocials>
          <WhatsappLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(whatsappAddress)}
            id="whatsapp-logo"
          />
          <YoutubeLogo 
            size={32} 
            weight="regular" 
            onClick={() => window.open(youtubeAddress)}
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

      <LTFooterBar />
    </LTBody>
    </LinkTreeContainer>
  )
}