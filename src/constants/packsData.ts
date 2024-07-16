import img from "../assets/residencial.png";
import photosImg from "../assets/paz-aerial.jpg";
import obrasImg from "../assets/obras.jpg";
import marketingImg from "../assets/redessociais01.png";
import marketing2Img from "../assets/redessociais.png";
import geoImg from "../assets/geo01.png";

export const packsData = [
  // variantType: 'Único' ==> pra o caso não haver variantes
  {
    variants: [
      {
        variantType: 'Único',
        title: 'Fotos Aéreas',
        img: photosImg,
        type: 'f',
        list: [
          'Fotos aéreas com resolução em 4K',
          'Formatos JPEG e DNG',
        ],
      }
    ]
  },
  {
    variants: [
      {
        variantType: 'Básico',
        title: 'Redes Sociais Básico',
        img: marketingImg,
        type: 'fv',
        list: [
          'Propriedade residencial/comercial',
          'Até 10 Fotos aéreas em 4K',
          '1 vídeo pré-editados de 2:00 a 3:00 minutos',
          '1 vídeo editados de 1:00 a 1:30 minutos',
          'Narração profissional'
        ],
      },
      {
        variantType: 'Avançado',
        title: 'Redes Sociais Avançado',
        img: marketing2Img,
        type: 'fv',
        list: [
          'Propriedade residencial/comercial',
          'Até 10 Fotos aéreas em 4K',
          '2 vídeos pré-editados de 2:00 a 3:00 minutos',
          '2 vídeos editados de 1:00 a 1:30 minutos',
          'Narração profissional',
          '1 Foto aérea 360°',
        ],
      }
    ]
  },
  {
    variants: [
      {
        variantType: 'Único',
        title: 'Video Marketing Imobiliário',
        img: img,
        type: 'fv',
        list: [
          'Propriedade residencial/comercial',
          'Até 15 Fotos aéreas em 4K',
          '1 vídeo pré-editados de 2:00 a 3:00 minutos',
          '1 vídeo editados de 1:00 a 1:30 minutos',
          'Vídeos aéreos e/ou terrestres',
          'Narração profissional ou do seu corretor',
          '1 Foto aérea 360°',
        ],
      }
    ]
  },
  {
    variants: [
      {
        variantType: 'Aéreo',
        title: 'Geolocalização Aérea',
        img: geoImg,
        type: 'fv',
        list: [
          '1 vídeo aéreo exibindo o trajeto de um ponto de referência, até a localização do ponto de interesse',
          'Animações orientando o percurso correto',
          'Duração de 45 segundos a 1:30 minutos',
          'Trajeto de até 1,5km',
        ],
      }
    ]
  },
  {
    variants: [
      {
        variantType: 'Único',
        title: 'Acompanhamento de Obras',
        img: obrasImg,
        type: 'fv',
        list: [
          'Entregas periódicas de vídeos e fotos, podendo optar por intervalos de 7, 15 ou 30 dias.',
          'Quantidade de fotos e duração estimada dos vídeos, a combinar',
        ],
      }
    ]
  },
]