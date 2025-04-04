import { Envelope, FacebookLogo, TiktokLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";
import { FooterSocials, LTBody, LTButton, LTButtonsWrapper, LTFooterBar, LTHeader, LTSubtitle, LinkTreeContainer } from "./styles";
import { useWindowSize } from "usehooks-ts";
import { TipoEvento, incrementarEventoDiario } from "../../hooks/useEventIncrement";

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
    incrementarEventoDiario(TipoEvento.CLIQUE_LINKTREE_ORCAMENTO);
    window.location.href = formAddress;
  }

  function handleClickSite() {
    incrementarEventoDiario(TipoEvento.CLIQUE_LINKTREE_SITE);
    window.location.href = websiteAddress;
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
              incrementarEventoDiario(TipoEvento.CLIQUE_LINKTREE_WHATSAPP);
              window.location.href = whatsappAddress;
            }}
            id="whatsapp-logo"
          />
          <YoutubeLogo 
            size={32} 
            weight="regular" 
            onClick={() => {
              incrementarEventoDiario(TipoEvento.CLIQUE_LINKTREE_YOUTUBE);
              window.location.href = youtubeAddress;
            }}
            id="instagram-logo"
          />
          <FacebookLogo 
            size={32} 
            weight="regular" 
            onClick={() => {
              incrementarEventoDiario(TipoEvento.CLIQUE_LINKTREE_FACEBOOK);
              window.location.href = facebookAddress;
            }}
            id="facebook-logo"
          />
          <TiktokLogo 
            size={32} 
            weight="regular" 
            onClick={() => {
              incrementarEventoDiario(TipoEvento.CLIQUE_LINKTREE_TIKTOK);
              window.location.href = tiktokAddress;
            }}
            id="tiktok-logo"
          />
          <Envelope 
            size={32} 
            weight="regular" 
            onClick={() => {
              incrementarEventoDiario(TipoEvento.CLIQUE_LINKTREE_MAIL);
              window.location.href = mailAddress;
            }}
            id="mail-logo"
          />
      </FooterSocials>

      <LTFooterBar />
    </LTBody>
    </LinkTreeContainer>
  )
}