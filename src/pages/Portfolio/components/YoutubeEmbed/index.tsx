import * as S from "./styles";

interface YoutubeEmbedProps {
  videoId: string;
  orientation?: "landscape" | "portrait";
}

export function YoutubeEmbed({
  videoId,
  orientation = "landscape",
}: YoutubeEmbedProps) {
  return (
    <S.Container $orientation={orientation}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </S.Container>
  );
}