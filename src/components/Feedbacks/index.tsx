import { Feedback } from "./components/Feedback";
import { FeedbacksContainer } from "./styles";
import { feedbacksData } from "../../constants/feedbacksData";



export function Feedbacks() {
  return (
    <FeedbacksContainer>
      {
        feedbacksData.map((feedback, index) => (
          <Feedback key={index} data={feedback} />
        ))
      }
    </FeedbacksContainer>
  )
}