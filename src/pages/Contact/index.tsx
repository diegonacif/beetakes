import { NavbarSec } from "../../components/NavbarSec";
import { ContactForm } from "./components/ContactForm";
import { ContactContainer } from "./styles";

export function Contact() {
  return (
    <ContactContainer>
      <NavbarSec />
      <ContactForm />
    </ContactContainer>
  )
}