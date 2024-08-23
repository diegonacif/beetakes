import { ChatCenteredText } from "@phosphor-icons/react";
import { WhatsappButtonContainer } from "./styles";
import { useNavigate } from "react-router-dom";
// import { useWindowSize } from "usehooks-ts";

export function WhatsappButton() {
  // const { width } = useWindowSize()

  // const whatsappNumber = "5584981033283"
  // const whatsappAddress = width >= 1024 ?
  // `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  // `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  const navigate = useNavigate();

  return (
    <WhatsappButtonContainer onClick={() => navigate("/contact-form")}>
      {/* <WhatsappLogo weight="light" size={48} /> */}
      <ChatCenteredText size={44} weight="duotone" />
      <span id="speak-with-us">Solicitar Orçamento</span>
    </WhatsappButtonContainer>
  )
}