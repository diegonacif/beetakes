import { useEffect, useState } from "react";

interface ICidades {
  nome: string;
  codigo_ibge: string;
}

interface IUseCidades {
  uf: string;
}

export const useCidades = ({ uf }: IUseCidades) => {
  const [cidades, setCidades] = useState<ICidades[]>([]);

  useEffect(() => {
    fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`)
    .then((response) => response.json())
    .then((data) => setCidades(data));
  }, [uf])

  return {
    cidades
  };
};
