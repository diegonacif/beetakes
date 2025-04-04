import { Feedback } from "./components/Feedback";
import { FeedbacksContainer } from "./styles";
import { feedbacksData } from "../../constants/feedbacksData";
import { useContext } from "react";
import { RefsContext } from "../../contexts/RefsProvider";
import { BudgetButton } from "../BudgetButton";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export function Feedbacks() {
  const { feedbacksRef } = useContext(RefsContext);
  const responsive = {
    0: { 
      items: 1,
      itemsFit: 'contain',
    },
    1024: {
        items: 2, 
    },
    1600: {
        items: 3, 
    },
  }

  return (
    <FeedbacksContainer id="section-feedbacks" ref={feedbacksRef}>
      <h2 id="feedbacks-title">Veja o que nossos clientes estão dizendo</h2>
      {/* {
        feedbacksData.map((feedback, index) => (
          <Feedback key={index} data={feedback} />
        ))
      } */}
      <AliceCarousel
        responsive={responsive}
        mouseTracking
        animationType="fadeout" 
        animationDuration={800}
        disableButtonsControls={true}
        items={
          feedbacksData.map((feedback, index) => (
            <Feedback key={index} data={feedback} />
          ))
        }
      />
      <BudgetButton />
    </FeedbacksContainer>
  )
}