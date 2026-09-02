import * as S from "./styles";

interface InstagramEmbedProps {
  postId: string;
  type?: "p" | "reel";
}

export function InstagramEmbed({
  postId,
  type = "reel",
}: InstagramEmbedProps) {
  return (
    <S.Container>
      <iframe
        src={`https://www.instagram.com/${type}/${postId}/embed`}
        title="Instagram video"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </S.Container>
  );
}
