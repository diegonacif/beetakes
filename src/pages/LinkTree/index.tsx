import { Envelope, FacebookLogo, TiktokLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";
import { FooterSocials, LTBody, LTButton, LTButtonsWrapper, LTFooterBar, LTHeader, LTSubtitle, LinkTreeContainer } from "./styles";
import { useWindowSize } from "usehooks-ts";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../services/firebase.config";

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

  function handleClickForm() {
    logEvent(analytics, 'link_clicado', {
      link_id: 'linktree_orcamento',
    });
    window.location.href = formAddress
  }

  function handleClickSite() {
    logEvent(analytics, 'link_clicado', {
      link_id: 'linktree_site',
    });
    window.location.href = websiteAddress
  }

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
          onClick={() => handleClickForm()}
        >
          Solicite um orçamento
        </LTButton>
        <LTButton 
          onClick={() => handleClickSite()}
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
            onClick={() => {
              logEvent(analytics, 'link_clicado', {
                link_id: 'linktree_whatsapp',
              });
              window.location.href = whatsappAddress;
            }}
            id="whatsapp-logo"
          />
          <YoutubeLogo 
            size={32} 
            weight="regular" 
            onClick={() => {
              logEvent(analytics, 'link_clicado', {
                link_id: 'linktree_youtube',
              });
              window.location.href = youtubeAddress
            }}
            id="instagram-logo"
          />
          <FacebookLogo 
            size={32} 
            weight="regular" 
            onClick={() => {
              logEvent(analytics, 'link_clicado', {
                link_id: 'linktree_facebook',
              });
              window.location.href = facebookAddress
            }}
            id="facebook-logo"
          />
          <TiktokLogo 
            size={32} 
            weight="regular" 
            onClick={() => {
              logEvent(analytics, 'link_clicado', {
                link_id: 'linktree_tiktok',
              });
              window.location.href = tiktokAddress
            }}
            id="tiktok-logo"
          />
          <Envelope 
            size={32} 
            weight="regular" 
            onClick={() => {
              logEvent(analytics, 'link_clicado', {
                link_id: 'linktree_mail',
              });
              window.location.href = mailAddress
            }}
            id="mail-logo"
          />
      </FooterSocials>

      <LTFooterBar />
    </LTBody>
    </LinkTreeContainer>
  )
}