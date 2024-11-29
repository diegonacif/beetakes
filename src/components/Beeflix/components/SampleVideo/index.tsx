import { SampleVideoContainer } from "./styles";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { useWindowSize } from "usehooks-ts";
import { useBreakpoint } from "../../../../hooks/useBreakpoint";

interface SampleVideoDataProps {
  id: string;
}

interface SampleVideoProps {
  data: SampleVideoDataProps;
}


export function SampleVideo({ data }: SampleVideoProps) {
  const size = useWindowSize();
  const breakpoint = useBreakpoint();

  console.log(size.width, breakpoint);

  return (
    <SampleVideoContainer windowWidth={size.width}>
      <LiteYouTubeEmbed 
        id={data.id}
        params="vq=hd2160&controls=0&rel=0"
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
      />
    </SampleVideoContainer>
  )
}