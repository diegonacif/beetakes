import img from "../assets/residencial.png";

export const packsData = [
  {
    variants: [
      {
        variantType: 'Único',
        title: 'Pacote Comercial de Foto',
        img: img,
        type: 'f',
        list: [
          '20 Fotos de CRE Exterior',
        ],
      }
    ]
  },
  {
    variants: [
      {
        variantType: 'Básico',
        title: 'Pacote Redes Sociais Básico',
        img: img,
        type: 'fv',
        list: [
          'Propriedade residencial/comercial',
          '10 Fotos Aéreas Hi-Res',
          '1x 2:00-3:00 minutos de video pré-editado',
          '1x 1:00-1:30 minutos de video editado',
        ],
      },
      {
        variantType: 'Avançado',
        title: 'Pacote Redes Sociais Avançado',
        img: img,
        type: 'fv',
        list: [
          'Propriedade residencial/comercial',
          '25 Fotos Aéreas Hi-Res',
          '2x 2:00-3:00 minutos de video pré-editado',
          '2x 1:00-1:30 minutos de video editado',
          '1 foto 360°',
        ],
      }
    ]
  },
]