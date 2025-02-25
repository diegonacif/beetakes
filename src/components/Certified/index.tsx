import { CertifiedContainer, CertifiedInfo, CertifiedLogos, CertifiedRows } from "./styles";
import anac from "../../assets/logos/anac_01.png";
import anatel from "../../assets/logos/anatel_01.png";
import decea from "../../assets/logos/decea_01.png";
import mapfre from "../../assets/logos/mapfre-seguros_01.png";
import { BudgetButton } from "../BudgetButton";

export function Certified() {
  return (
    <CertifiedContainer>
      <CertifiedInfo>
        <h3 id="certified-title">Empresa Certificada</h3>
        <div className="certified-info-rows">
          <CertifiedRows>Equipamentos&nbsp;<strong>Homologados</strong></CertifiedRows>
          <CertifiedRows>Piloto com registro&nbsp;<strong>DECEA</strong></CertifiedRows>
          <CertifiedRows><strong>Seguro aeronáutico</strong>&nbsp;- RETA</CertifiedRows>
          <CertifiedRows>Registro&nbsp;<strong>ANAC</strong></CertifiedRows>
          <CertifiedRows>Homologação&nbsp;<strong>ANATEL</strong></CertifiedRows>
        </div>
      </CertifiedInfo>
      <CertifiedLogos>
        <img src={anac} alt="anac logo" id="anac-logo" />
        <img src={decea} alt="decea logo" id="decea-logo" />
        <img src={anatel} alt="anatel logo" id="anatel-logo" />
        <img src={mapfre} alt="mapfre seguros logo" id="mapfre-logo" />
      </CertifiedLogos>
      <BudgetButton />
    </CertifiedContainer>
  )
}