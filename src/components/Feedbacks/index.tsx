import { Feedback } from "./components/Feedback";
import { FeedbacksContainer } from "./styles";
import { feedbacksData } from "../../constants/feedbacksData";
import { useContext } from "react";
import { RefsContext } from "../../contexts/RefsProvider";



export function Feedbacks() {
  const { feedbacksRef } = useContext(RefsContext);

  return (
    <FeedbacksContainer id="section-feedbacks" ref={feedbacksRef}>
      {
        feedbacksData.map((feedback, index) => (
          <Feedback key={index} data={feedback} />
        ))
      }
    </FeedbacksContainer>
  )
}