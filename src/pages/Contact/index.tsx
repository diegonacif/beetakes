import { NavbarSec } from "../../components/NavbarSec";
// import { ContactForm } from "./components/ContactForm";
import { ContactFormLesser } from "./components/ContactFormLesser";
import { ContactContainer } from "./styles";

export function Contact() {
  return (
    <ContactContainer>
      <NavbarSec />
      <ContactFormLesser />
    </ContactContainer>
  )
}