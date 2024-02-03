import { timeElapsed } from "@/actions/convertDate"
import useLoadImage from "@/hooks/useLoadImage"
import { Nft } from "@/type"
import Image from "next/image"

interface BoxProps {
  imgUrl: Nft
  title: string
  subtitle: string
  time: string
}

const Box: React.FC<BoxProps> = ({
  imgUrl,
  title,
  subtitle,
  time
}) => {

  const imgPath = useLoadImage(imgUrl)

  return (
    <div className="flex flex-row justify-start items-center gap-x-3">
      <div className="h-[50px] w-[50px] rounded-full overflow-hidden ">
        <Image
          src={imgPath || '/assets/images/nft01.png'}
          alt="avatar"
          width={100}
          height={100}
          className="min-w-[50px] min-h-[50px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="text-xs font-semibold">{title}</p>
        <p className="text-[9px] font-normal text-neutral-500">{subtitle}</p>
      </div>
      <p className="text-xs font-semibold ml-auto">{ timeElapsed(time) }</p>
    </div>
  )
}

export default Box