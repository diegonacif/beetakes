import { useEffect, useState } from "react";

interface IRegiao {
  id: number;
  sigla: string;
  nome: string;
}

interface IEstado {
  id: number;
  sigla: string;
  nome: string;
  regiao: IRegiao;
}

export const useEstados = () => {
  const [estados, setEstados] = useState<IEstado[]>([]);

  useEffect(() => {
    fetch('https://brasilapi.com.br/api/ibge/uf/v1')
    .then((response) => response.json())
    .then((data) => setEstados(data));
  }, [])

  return {
    estados
  };
};
