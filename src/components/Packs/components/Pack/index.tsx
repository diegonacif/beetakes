import { ImageWrapper, ItemsRow, OrderButton, PackCard, PackContainer, PackIcons, PackList } from "./styles";
import { Camera, Check, ShoppingCart, VideoCamera } from "@phosphor-icons/react";

interface PackDataProps {
  title: string;
  img: string;
  type: string;
  list: string[];
}

interface PackProps {
  data: PackDataProps
}

export function Pack({ data }: PackProps) {
  return (
    <PackContainer>
      <div className="pack-title">
        <span>{data.title}</span>
      </div>
      <PackCard>
        <ImageWrapper>
          <img src={data.img} alt="" />
        </ImageWrapper>
        <PackIcons>
          {
            data.type === "f" ? (
              <Camera size={28} color="#241f31" weight="fill" />
            ) : data.type === "fv" ? (
              <>
                <Camera size={28} color="#241f31" weight="fill" />
                <VideoCamera size={28} color="#241f31" weight="fill" />
              </>
            ) : <span>data error</span>
          }
        </PackIcons>

        <PackList>
          {
            data.list.map((listRow, index) => (
              <ItemsRow key={index}>
                <Check size={18} color="#241f31" weight="bold" />
                <span>{listRow}</span>
              </ItemsRow>
            ))
          }
        </PackList>

        {/* <PackPrice>
          <h1>{data.price}</h1>
          <span>por pedido</span>
        </PackPrice> */}
        <OrderButton>
          <ShoppingCart size={26} color="#241f31" weight="duotone" />
          <span>SAIBA MAIS</span>
        </OrderButton>
      </PackCard>
    </PackContainer>
  )
}