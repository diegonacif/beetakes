import img from "../assets/residencial.png";
import photosImg from "../assets/paz-aerial.jpg";
import obrasImg from "../assets/obras.jpg";
import marketingImg from "../assets/redessociais01.png";
import marketing2Img from "../assets/redessociais.png";

export const packsData = [
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
          '10 Fotos aéreas em 4K',
          '2 vídeos pré-editados de 2:00 a 3:00 minutos',
          '2 vídeos editados de 1:00 a 1:30 minutos',
        ],
      },
      {
        variantType: 'Avançado',
        title: 'Redes Sociais Avançado',
        img: marketing2Img,
        type: 'fv',
        list: [
          'Propriedade residencial/comercial',
          '25 Fotos aéreas em 4K',
          '2 vídeos pré-editados de 2:00 a 3:00 minutos',
          '2 vídeos editados de 1:00 a 1:30 minutos',
          '1 Foto aérea 360°',
        ],
      }
    ]
  },
  {
    variants: [
      {
        variantType: 'Único',
        title: 'Marketing Redes Sociais',
        img: img,
        type: 'fv',
        list: [
          'Produção e edição de conteúdo visual.',
          'Serviço de Social Media',
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
          'Entregas periódicas de vídeos e fotos.',
        ],
      }
    ]
  },
]