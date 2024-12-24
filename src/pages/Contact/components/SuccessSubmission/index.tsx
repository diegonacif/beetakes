import { SuccessSubmissionContainer } from "./styled";
import abelhaDoida from "../../../../assets/1f41d.gif";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pixelBudgetRequest } from "../../../../utils/facebookEvents";

export function SuccessSubmission() {
  const navigate = useNavigate();

  useEffect(() => {
    pixelBudgetRequest();
  }, [])

  return (
    <SuccessSubmissionContainer>
      <div id="message">
        <img 
          src={abelhaDoida} 
          alt="abelha doidinha" 
          id="crazyBee"
        />
        <span><strong>Recebemos sua solicitação! ✅</strong></span>
        <span>Nossa equipe irá retornar o contato em até 24 horas. 🕗</span>
        <span>Estamos ansiosos para entender suas necessidades e ajudar a alcançar os resultados que você busca com nossos serviços. 🐝💛</span>
        <span>Agradecemos o seu contato!</span>
        <button id="ok" onClick={() => navigate("/")}>Ok</button>
      </div>
      <div className="bg" />
    </SuccessSubmissionContainer>
  )
}