import styled from "styled-components";
// import bgImg from "../../assets/IMG_5531_1080_blur-min.jpg";
import customCursor from "../../assets/cursor/Normal-Select-y.png";
import heroDesktop from "../../assets/BGs/hero-imobiliario-desktop.webp";
import heroMobile from "../../assets/BGs/hero-imobiliario-mobile.webp";

export const HomeContainer = styled.main`
  --navbar-height: 3.5rem;

  position: relative;

  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  overflow-x: hidden;

  cursor: url(${customCursor}), auto;
`;

export const IntroBanner = styled.section`
  --safe-bottom: max(
    env(safe-area-inset-bottom, 0px),
    env(safe-area-max-inset-bottom, 0px)
  );

  position: relative;
  isolation: isolate;

  width: 100%;

  /*
   * 100lvh cobre a maior área do viewport.
   * A safe area mantém o fundo atrás da interface inferior do Safari.
   */
  min-height: 100lvh;
  min-height: calc(100lvh + var(--navbar-height));

  overflow: hidden;

  background-color: ${(props) => props.theme["gray-900"]};

  .bg {
    position: absolute;
    inset: 0;

    background-image: url(${heroMobile});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    filter: none;
    transform: none;
  }

  /*
   * Reforça o contraste sem descaracterizar a fotografia.
   */
  &::after {
    content: "";

    position: absolute;
    inset: 0;
    z-index: 0;

    background: linear-gradient(
      180deg,
      rgba(12, 12, 12, 0.04) 15%,
      rgba(12, 12, 12, 0.14) 48%,
      rgba(12, 12, 12, 0.68) 100%
    );

    pointer-events: none;
  }

  .intro-content {
    position: relative;
    z-index: 1;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: min(100%, 80rem);

    /*
     * O conteúdo utiliza o viewport seguro e permanece estável
     * quando as barras do Safari aparecem ou desaparecem.
     */
    min-height: 100vh;
    min-height: 100svh;

    margin-inline: auto;

    padding-top: calc(
      var(--navbar-height) + clamp(1rem, 2.5svh, 2rem)
    );

    padding-right: clamp(1rem, 4vw, 3rem);

    padding-bottom: calc(
      clamp(1.5rem, 3.5svh, 2.75rem) + var(--safe-bottom)
    );

    padding-left: clamp(1rem, 4vw, 3rem);

    gap: clamp(2.5rem, 4.5svh, 3.5rem);
  }

  .intro-logo {
    flex: none;

    width: clamp(8.5rem, 38vw, 11rem);
    height: auto;

    opacity: 1;

    filter: drop-shadow(
      0 0.75rem 1.5rem rgba(0, 0, 0, 0.26)
    );
  }

  /*
   * Texto e botão passam a formar um único bloco visual.
   */
  .intro-main {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    gap: clamp(1.75rem, 3.5svh, 2.75rem);
  }

  .intro-copy {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    text-align: center;
  }

  .intro-overtext {
    margin: 0;
    padding: 0;

    font-family: "Kdam Thmor Pro", sans-serif;
    font-size: clamp(1rem, 3.1vw, 1.8rem);
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0.015em;

    color: ${(props) => props.theme["gray-100"]};

    text-shadow: 1px 1px 2px
      ${(props) => props.theme["gray-600"]};
  }

  .intro-text {
    margin: 0.25rem 0 0;
    padding: 0;

    font-family: "Kdam Thmor Pro", sans-serif;
    font-size: clamp(1.75rem, 6.5vw, 4.75rem);
    font-weight: 400;
    line-height: 1.08;
    letter-spacing: -0.015em;
    text-align: center;

    color: ${(props) => props.theme["yellow-500"]};

    text-shadow: 1px 1px 2px
      ${(props) => props.theme["gray-600"]};
  }

  .intro-subtext {
    width: 100%;
    max-width: 44rem;

    margin: clamp(1rem, 2.3svh, 1.6rem) 0 0;
    padding: 0;

    font-size: clamp(0.95rem, 2.2vw, 1.25rem);
    font-weight: 400;
    line-height: 1.5;
    text-align: center;

    color: ${(props) => props.theme["gray-100"]};

    text-shadow: 1px 1px 2px
      ${(props) => props.theme["gray-600"]};
  }

  .intro-action {
    display: flex;
    justify-content: center;

    width: 100%;
  }

  /*
   * Em telas realmente baixas reduzimos a densidade do conjunto,
   * sem definir posições diferentes para cada elemento.
   */
  @media (max-height: 700px) {
    .bg {
      background-image: url(${heroDesktop});
    }
    .intro-content {
      gap: clamp(1.25rem, 3svh, 2rem);

      padding-top: calc(var(--navbar-height) + 0.75rem);
      padding-bottom: calc(0.75rem + var(--safe-bottom));
    }

    .intro-logo {
      width: clamp(6.5rem, 22svh, 8rem);
    }

    .intro-main {
      gap: clamp(1.25rem, 3svh, 1.75rem);
    }

    .intro-subtext {
      margin-top: 0.75rem;
    }
  }
`;