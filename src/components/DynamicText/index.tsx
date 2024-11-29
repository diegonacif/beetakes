import React from 'react';
import { StyledParagraph } from './styles';

interface DynamicTextProps {
  text: string;
}

export const DynamicText: React.FC<DynamicTextProps> = ({ text }) => {
  // Divida o texto por quebras de linha e insira negritos usando regex
  const formattedText = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line.includes('<strong>')
        ? parseStrongText(line) // Função que processa <strong> tags
        : line}
      <br />
    </React.Fragment>
  ));

  return <StyledParagraph>{formattedText}</StyledParagraph>;
};

// Função auxiliar para processar negritos
const parseStrongText = (line: string) => {
  const parts = line.split(/(<strong>.*?<\/strong>)/g);
  return parts.map((part, index) =>
    part.startsWith('<strong>') && part.endsWith('</strong>')
      ? <strong key={index}>{part.replace(/<\/?strong>/g, '')}</strong>
      : part
  );
};
