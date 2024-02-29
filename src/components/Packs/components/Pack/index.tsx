import { useEffect, useMemo, useState } from "react";
import { ImageWrapper, ItemsRow, OrderButton, PackCard, PackContainer, PackIcons, PackList, PackSelect } from "./styles";
import { Camera, Check, ShoppingCart, VideoCamera } from "@phosphor-icons/react";
import { useWindowSize } from "usehooks-ts";

interface VariantProps {
  variantType: string;
  title: string;
  img: string;
  type: string;
  list: string[];
}

interface PackDataProps {
  variants: VariantProps[];
}

interface PackProps {
  data: PackDataProps
}

export function Pack({ data }: PackProps) {

  const initialPackData = useMemo(() => ({
      variantType: '',
      title: '',
      img: '',
      type: '',
      list: [''],
  }), [])


  const [variantData, setVariantData] = useState(initialPackData);
  const [variantOptions, setVariantOptions] = useState(['']);
  const [currentVariant, setCurrentVariant] = useState(data.variants[0].variantType)

  useEffect(() => {
    const variant = data.variants.find((variant) => variant.variantType === currentVariant)
    const options = data.variants.map((variant) => variant.variantType)
    setVariantData(variant ?? initialPackData)
    setVariantOptions(options)
  }, [data.variants, currentVariant, initialPackData])

  const { width } = useWindowSize()

  const whatsappNumber = "5584981033283"
  const whatsappMessage = `Olá! Gostaria de saber mais sobre o pacote ${variantData.title}!`
  const whatsappAddress = width >= 620 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`; // Para uso geral

  return (
    <PackContainer>
      <div className="pack-title">
        <span>{variantData.title}</span>
      </div>
      <PackCard>
        <ImageWrapper>
          <img src={variantData.img} alt="" />
        </ImageWrapper>
        <PackIcons>
          {
            variantData.type === "f" ? (
              <Camera size={28} color="#241f31" weight="fill" />
            ) : variantData.type === "fv" ? (
              <>
                <Camera size={28} color="#241f31" weight="fill" />
                <VideoCamera size={28} color="#241f31" weight="fill" />
              </>
            ) : <span>data error</span>
          }
        </PackIcons>

        <PackList>
          {
            variantData.list.map((listRow, index) => (
              <ItemsRow key={index}>
                <Check size={18} color="#241f31" weight="bold" />
                <span>{listRow}</span>
              </ItemsRow>
            ))
          }
        </PackList>

        {
          variantOptions.length > 1 && (
            <PackSelect onChange={(e) => setCurrentVariant(e.target.value)}>
              {
                variantOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))
              }
            </PackSelect>
          )
        }

        <OrderButton onClick={() => window.open(whatsappAddress)}>
          <ShoppingCart size={26} color="#241f31" weight="duotone" />
          <span>SAIBA MAIS</span>
        </OrderButton>
      </PackCard>
    </PackContainer>
  )
}