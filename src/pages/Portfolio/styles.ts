import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  background: #0c0c0c;
  color: #f5f5f5;
  padding: 5rem 6vw 80px;
`;

export const Header = styled.header`
  max-width: 1400px;
  margin: 0 auto 60px;
`;

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: 12px;

  color: #d4af37;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(2.5rem, 6vw, 4rem);
  line-height: 0.95;
  font-weight: 500;
  letter-spacing: -0.04em;
`;

export const Description = styled.p`
  max-width: 620px;
  margin-top: 24px;

  color: rgba(245, 245, 245, 0.65);
  font-size: 1rem;
  line-height: 1.7;
`;

export const Grid = styled.section`
  max-width: 1400px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

export const Card = styled.button`
  position: relative;

  display: block;
  width: 100%;
  padding: 0;

  border: 0;
  outline: none;

  background: #222120;
  color: #f5f5f5;

  font: inherit;
  text-align: left;
  text-decoration: none;

  cursor: pointer;

  overflow: hidden;

  -webkit-appearance: none;
  appearance: none;

  &:hover img {
    transform: scale(1.04);
  }

  &:hover .play {
    transform: translate(-50%, -50%) scale(1.08);
    background: #d4af37;
    color: #0c0c0c;
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;

  display: block;
  object-fit: cover;

  transition: transform 500ms ease;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to top,
    rgba(12, 12, 12, 0.75),
    rgba(12, 12, 12, 0.05) 60%
  );
`;

export const PlayButton = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);

  border: 1px solid rgba(245, 245, 245, 0.7);
  border-radius: 50%;

  background: rgba(12, 12, 12, 0.45);
  color: #f5f5f5;

  backdrop-filter: blur(8px);

  transition:
    transform 300ms ease,
    background 300ms ease,
    color 300ms ease;

  svg {
    width: 20px;
    margin-left: 3px;
  }
`;

export const CardInfo = styled.div`
  padding: 20px 22px 22px;

  color: #f5f5f5;
`;

export const Category = styled.span`
  display: block;
  margin-bottom: 7px;

  color: #d4af37;

  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const CardTitle = styled.h2`
  margin: 0;

  color: #f5f5f5;

  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;

  text-decoration: none;

  -webkit-text-fill-color: #f5f5f5;
`;

export const CardDescription = styled.p`
  margin: 8px 0 0;

  color: rgba(245, 245, 245, 0.5);
  -webkit-text-fill-color: rgba(245, 245, 245, 0.5);

  font-size: 0.85rem;
  line-height: 1.5;
`;