import { ReactNode } from "react";
import * as S from "./styles";

interface PortfolioModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function PortfolioModal({
  children,
  onClose,
}: PortfolioModalProps) {
  return (
    <S.Backdrop onClick={onClose}>
      <S.Modal onClick={(event) => event.stopPropagation()}>
        <S.CloseButton
          onClick={onClose}
          aria-label="Fechar vídeo"
        >
          ×
        </S.CloseButton>

        <S.Content>
          {children}
        </S.Content>
      </S.Modal>
    </S.Backdrop>
  );
}