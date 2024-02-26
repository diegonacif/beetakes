import { Star } from "@phosphor-icons/react";
import { FeedBackContainer, FeedBackInfo, FeedBackPhoto, FeedBackStars, FeedBackText } from "./styles";
import userIcon from "../../../../assets/abstract-user-flat-1.svg";

interface FeedbackDataProps {
  text: string;
  img: string;
  stars: number;
  name: string;
  role: string;
  company: string;
  location: string;
}

interface FeedbackProps {
  data: FeedbackDataProps;
}

export function Feedback({ data }: FeedbackProps) {
  const stars = Array(data.stars).fill(null); // quantidade de estrelas

  return (
    <FeedBackContainer>
      <div className="upper-section">
        <FeedBackStars>
          {stars.map((_, index) => (
            <Star key={index} size={28} color="#ffd900" weight="fill" />
            ))}
        </FeedBackStars>
        <FeedBackText>{data.text}</FeedBackText>
      </div>

      <div className="lower-section">
              <FeedBackPhoto src={data.img === '' ? userIcon : data.img} />
          <FeedBackInfo>
            <span><strong>{data.name}</strong></span>
            <span>{data.role}</span>
            <span>{data.company}</span>
            <span>{data.location}</span>
          </FeedBackInfo>
      </div>

      
      {/* <div className="lower-section">
        <div className="lower-right-section">
        </div>
      </div> */}
    </FeedBackContainer>
  )
}
