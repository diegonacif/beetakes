// import { Star } from "@phosphor-icons/react";
import { FeedBackContainer, FeedBackInfo, FeedBackPhoto, FeedBackStars, FeedBackText } from "./styles";
import userIcon from "../../../../assets/abstract-user-flat-1.svg";
import starImg from "../../../../assets/star.svg";

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
            <img src={starImg} key={index} id="star-img" />
            // <Star key={index} size={28} color="#ffd900" weight="fill" />
            ))}
        </FeedBackStars>
      </div>

      <div className="lower-section">
        <FeedBackText>{data.text}</FeedBackText>
        <div className="lower-section-inner">
          <FeedBackPhoto src={data.img === '' ? userIcon : data.img} />
          <FeedBackInfo>
            <span id="customer-name">{data.name}</span>
            <span>{data.role}</span>
            <span>{data.company}</span>
            <span>{data.location}</span>
          </FeedBackInfo>
        </div>
      </div>

      
      {/* <div className="lower-section">
        <div className="lower-right-section">
        </div>
      </div> */}
    </FeedBackContainer>
  )
}
