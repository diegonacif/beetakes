import { WhatsappLogo } from "@phosphor-icons/react";
import { WhatsappButtonContainer } from "./styles";
import { useWindowSize } from "usehooks-ts";

export function WhatsappButton() {
  const { width } = useWindowSize()

  const whatsappNumber = "5584981033283"
  const whatsappAddress = width >= 1024 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <WhatsappButtonContainer onClick={() => window.open(whatsappAddress)}>
      <WhatsappLogo weight="light" size={48} />
      <span id="speak-with-us">Fale Conosco</span>
    </WhatsappButtonContainer>
  )
}