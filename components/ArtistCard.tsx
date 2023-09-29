import Image from "next/image"
import Button from "./Button"

interface ArtistCardProps {
  name: string
  bid: string
  imgUrl: string | undefined
  index: number
}

const ArtistCard: React.FC<ArtistCardProps> = ({
  imgUrl,
  name,
  bid,
  index
}) => {
  return (
    <div className={`rounded-lg bg-white flex flex-col shadow-lg shadow-neutral-200/50 ${index === 3 ? 'hidden lg:flex' : ''}`}>
      <div className="relative md:h-[100px] w-full">
        <Image
          src='/assets/images/nft01.png'
          alt="bg"
          fill
          className=" object-cover rounded-t-lg"
        />
      </div>
      <div className=" flex flex-col justify-center items-center py-4 md:px-4 md:-mt-[70px] z-10">
        <Image
          src={imgUrl || '/assets/images/person01.png'}
          alt="avatar"
          width={50}
          height={50}
          className="sm:w-[90px] sm:h-[90px] rounded-full border-[1px] border-white"
        />
        <p className="font-bold text-sm md:text-md mt-2 leading-tight">{name}</p>
        <p className="font-normal text-xs text-neutral-400">{bid}</p>
        <Button
          fill
          label="Follow +"
        />
      </div>
    </div>
  )
}

export default ArtistCard