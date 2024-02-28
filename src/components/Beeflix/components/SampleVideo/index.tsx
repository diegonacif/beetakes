import { SampleVideoContainer } from "./styles";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface SampleVideoDataProps {
  id: string;
}

interface SampleVideoProps {
  data: SampleVideoDataProps;
}

export function SampleVideo({ data }: SampleVideoProps) {
  return (
    <SampleVideoContainer>
      <LiteYouTubeEmbed 
        id={data.id}
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
      />
    </SampleVideoContainer>
  )
}