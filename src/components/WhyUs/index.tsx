import { CheckCircle } from "@phosphor-icons/react";
import { whyUsData } from "../../constants/whyUsData";
import { CheckboxCircle, WhyUsContainer, WhyUsRow, WhyUsTextWrapper } from "./styles";

export function WhyUs() {
  return (
    <WhyUsContainer>
      <h3 id="whyus-title">{whyUsData.length} motivos para escolher a Bee Takes.</h3>
      <WhyUsTextWrapper>
        {
          whyUsData.map((whyUsData, index) => (
            <WhyUsRow key={index}>
              <CheckboxCircle>
                <CheckCircle size={32} weight="fill" />
              </CheckboxCircle>
              <span>{whyUsData.text}</span>
            </WhyUsRow>
          ))
        }
      </WhyUsTextWrapper>
    </WhyUsContainer>
  )
}