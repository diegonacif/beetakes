import { useState } from "react";

import { NavbarSec } from "../../components/NavbarSec";

import { InstagramEmbed } from "./components/InstagramEmbed";
import { PortfolioModal } from "./components/PortfolioModal";
import { YoutubeEmbed } from "./components/YoutubeEmbed";

import capaAlphavilleAndre from "../../assets/portfolio/capa_alphaville_andre.png";
import capaJardinsRegacini from "../../assets/portfolio/capa_jardins_regacini.png";
import capaKosterRegacini from "../../assets/portfolio/capa_koster_regacini.png";
import capaSportsAlessandra from "../../assets/portfolio/capa_sportsgarden_alessandra.png";
import capaUhane from "../../assets/portfolio/capa_uhane.png";
import capaHorizontes from "../../assets/portfolio/capa_horizontes_alessandra.png";
import capaConcceto from "../../assets/portfolio/capa_tirolconcceto.png";
import capaMontecarlo from "../../assets/portfolio/capa_montecarlo_daniel.png";
import capaAltaVista from "../../assets/portfolio/capa_altavista_alessandra.png";
import capaJardinsGustavo from "../../assets/portfolio/capa_jardins_gustavo.png";
import capaInfinity from "../../assets/portfolio/capa_infinity.png";
import capaLesAmis from "../../assets/portfolio/capa_lesamis.png";
import capaRealty from "../../assets/portfolio/capa_realty.png";
import capaPortoBrasil from "../../assets/portfolio/capa_portobrasil_alessandra.png";




import * as S from "./styles";

type VideoType = "youtube" |"instagram";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description?: string;
  type: VideoType;
  videoId: string;
  thumbnail: string;
  instagramType?: "p" | "reel";
  orientation?: "landscape" | "portrait";
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Apartamento de alto padrão - Koster Duplex",
    category: "Audiovisual imobiliário",
    description: "Vídeo acelerado produzido para a Regacini, nesse imóvel no delta do Tirol, em Natal-RN.",
    type: "youtube",
    videoId: "h8_DyPWQ2ug",
    thumbnail: capaKosterRegacini,
    orientation: "landscape",
  },

  {
    id: 2,
    title: "Casa no Alphaville Natal",
    category: "Reels Imobiliário",
    description: "Produção para o corretor André Xavier, feita sob medida pra essa casa com cara de casa.",
    type: "instagram",
    videoId: "Da3AxFAu3pM",
    thumbnail: capaAlphavilleAndre,
    instagramType: "reel",
  },

  {
    id: 3,
    title: "Apartamento no Sports Garden - Natal",
    category: "Reels Imobiliário",
    description: "Produção para as corretoras Alessandra Lisboa e Luciana Lisboa, nesse condomínio clube de alto padrão no bairro de Lagoa Nova.",
    type: "instagram",
    videoId: "DTysQpkD7R4",
    thumbnail: capaSportsAlessandra,
    instagramType: "reel",
  },
  
  {
    id: 4,
    title: "Jardins do Potengi - Lançamento imobiliário",
    category: "Reels Imobiliário",
    description: "Vídeo produzido para o corretor Denes Regacini, nesse mega lançamento imobiliário no bairro de Petrópolis em Natal-RN.",
    type: "instagram",
    videoId: "DNYObpmOdpz",
    orientation: "portrait",
    thumbnail: capaJardinsRegacini,
  },

  {
    id: 5,
    title: "Uhane Luxury Villas - São Miguel do Gostoso-RN",
    category: "Shorts Imobiliário",
    description: "Material produzido para o corretor Gustavo Pires, nesse condomínio de alto padrão à beira mar.",
    type: "youtube",
    videoId: "XHhpBJGEcp4",
    orientation: "portrait",
    thumbnail: capaUhane,
  },

  {
    id: 6,
    title: "Casa no Condomínio Horizontes Macaíba",
    category: "Reels Imobiliário",
    description: "Material produzido para o corretora Alessandra Lisboa, em uma bela casa de condomínio fechado, em Macaíba-RN.",
    type: "instagram",
    videoId: "DZfjNYCR_5I",
    orientation: "portrait",
    thumbnail: capaHorizontes,
  },

  {
    id: 7,
    title: "Apartamento no Residencial Tirol Concceto",
    category: "Reels Imobiliário",
    description: "Material produzido para o corretor Gustavo Pires, nesse apartamento super exclusivo no delta do Tirol, em Natal-RN.",
    type: "instagram",
    videoId: "DV6fpfnkRvY",
    orientation: "portrait",
    thumbnail: capaConcceto,
  },

  {
    id: 8,
    title: "Lote no Condomínio Monte Carlo",
    category: "Reels Imobiliário",
    description: "Entrega feita para o corretor Daniel Tiengo, para a venda de um lote no Condomínio Monte Carlo, em Parnamirim-RN.",
    type: "instagram",
    videoId: "DZz8wWqxF3U",
    orientation: "portrait",
    thumbnail: capaMontecarlo,
  },

  {
    id: 9,
    title: "Condomínio Alta Vista - Lançamento imobiliário",
    category: "Reels Imobiliário",
    description: "Produção para a corretora Alessandra Lisboa, em um condomínio aconchegante no alto da Serra de Santana, em Lagoa Nova-RN.",
    type: "instagram",
    videoId: "DWHkVujj3kG",
    orientation: "portrait",
    thumbnail: capaAltaVista,
  },

  {
    id: 10,
    title: "Jardins do Potengi - Lançamento imobiliário",
    category: "Reels Imobiliário",
    description: "Material produzido para o lançamento de altíssimo padrão Jardins do Potengi, em Petrópolis, Natal-RN. Solicitação feita pelo corretor Gustavo Pires.",
    type: "instagram",
    videoId: "DWb2nUyERr4",
    orientation: "portrait",
    thumbnail: capaJardinsGustavo,
  },

  {
    id: 11,
    title: "Apartamento no Condomínio Porto Brasil",
    category: "Reels Imobiliário",
    description: "Produção para a corretora Alessandra Lisboa, divulgando um apartamento no Vila Colonial.",
    type: "instagram",
    videoId: "DQ84rJRkaef",
    orientation: "portrait",
    thumbnail: capaPortoBrasil,
  },

  {
    id: 12,
    title: "Cobertura Duplex no Infinity Areia Preta",
    category: "Reels Imobiliário",
    description: "Entrega desse conteúdo relaxante para o corretor Gustavo Pires, desse duplex exclusivo com vista pra Areia Preta.",
    type: "instagram",
    videoId: "Dbxw7oqR33G",
    orientation: "portrait",
    thumbnail: capaInfinity,
  },

  {
    id: 13,
    title: "Apartamento no Residencial Les Amis",
    category: "Reels Imobiliário",
    description: "Produção para o corretor Daniel Tiengo, em um apartamento bem localizado no bairro de Lagoa Nova.",
    type: "instagram",
    videoId: "DYBBTxQpjhh",
    orientation: "portrait",
    thumbnail: capaLesAmis,
  },

  {
    id: 14,
    title: "Casa em Nova Esperança - Parnamirim",
    category: "Reels Imobiliário",
    description: "Uma das muitas produções realizadas para a Realty Imobiliária, em Parnamirim-RN, dessa vez divulgando uma casa aconchegante no bairro de Nova Esperança.",
    type: "instagram",
    videoId: "DayDJ6hxWsJ",
    orientation: "portrait",
    thumbnail: capaRealty,
  },
];

export function Portfolio() {
  const [selectedVideo, setSelectedVideo] =
    useState<PortfolioItem | null>(null);

  return (
    <>
      <NavbarSec />

      <S.Container>
        <S.Header>
          {/* <S.Eyebrow>Bee Takes</S.Eyebrow> */}

          <S.Title>
            Portfólio
          </S.Title>

          {/* <S.Description>
            Uma seleção de trabalhos produzidos pela Bee Takes.
            Imagens, histórias e experiências pensadas para valorizar
            cada projeto.
          </S.Description> */}
        </S.Header>

        <S.Grid>
          {portfolioItems.map((item) => (
            <S.Card
              key={item.id}
              onClick={() => setSelectedVideo(item)}
            >
              <S.ThumbnailWrapper>
                <S.Thumbnail
                  src={item.thumbnail}
                  alt={item.title}
                />

                {/* <S.Overlay /> */}

                <S.PlayButton className="play">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </S.PlayButton>
              </S.ThumbnailWrapper>

              <S.CardInfo>
                <S.Category>
                  {item.category}
                </S.Category>

                <S.CardTitle>
                  {item.title}
                </S.CardTitle>

                {item.description && (
                  <S.CardDescription>
                    {item.description}
                  </S.CardDescription>
                )}
              </S.CardInfo>
            </S.Card>
          ))}
        </S.Grid>
      </S.Container>

      {selectedVideo && (
        <PortfolioModal
          onClose={() => setSelectedVideo(null)}
        >
          {selectedVideo.type === "youtube" ? (
            <YoutubeEmbed
              videoId={selectedVideo.videoId}
            />
          ) : (
            <InstagramEmbed
              postId={selectedVideo.videoId}
              type={selectedVideo.instagramType}
            />
          )}
        </PortfolioModal>
      )}
    </>
  );
}