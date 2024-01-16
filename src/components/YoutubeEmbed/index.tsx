import { YoutubeEmbedContainer } from "./styles";

export function YoutubeEmbed({ embedId }: { embedId: string }) {
  return (
    <YoutubeEmbedContainer>
      <iframe
        width="3840"
        height="2160"
        src={`https://www.youtube.com/embed/${embedId}?version=3&vq=hd2160&autoplay=1&loop=1&mute=1&controls=0&disablekb=1&fs=0&modestbranding=1&showinfo=0&playlist=${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        title="Embedded youtube"
      />
      <div className="iframe-cover" />
    </YoutubeEmbedContainer>
  )
}
