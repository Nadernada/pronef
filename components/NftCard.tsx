'use client'

import Image from "next/image"
import Button from "./Button"
import useLoadImage from "@/hooks/useLoadImage"
import { Nft } from "@/type"

const People = () => {

  const person = [
    '/assets/images/person01.png',
    '/assets/images/person02.png',
    '/assets/images/person03.png',
  ]

  return (
    <div className="flex flex-row items-center justify-center">
      {person.map((item, i) => (
        <Image
          key={item}
          src={item}
          alt="people"
          width={35}
          height={35}
          className={i !== 0 ? '-ml-3' : ''}
        />
      ))}
    </div>
  )
}

interface NFTCardProps {
  data: Nft
}

const NftCard: React.FC<NFTCardProps> = ({
  data

}) => {

  const imgPath = useLoadImage(data)
  

  return (
    <div className="rounded-lg bg-white flex flex-col shadow-lg shadow-neutral-200/50">
    <div className="relative h-[150px] w-full">
      <Image
        src={imgPath || '/assets/images/nft01.png'}
        alt="bg"
        fill
        className=" object-cover rounded-t-lg"
      />
    </div>
    <div className=" flex flex-row justify-between items-center p-4 -mt-8 z-10">
      <People />
      <div className="bg-white rounded-lg flex flex-col justify-center items-center p-2 shadow-md">
        <p className="text-xs text-neutral-400 font-normal">Ending in</p>
        <p className="text-md font-bold">10h 20m</p>
      </div>
    </div>
    <div className="flex flex-col justify-center items-start px-3 pb-3">
      <p className="font-bold text-md mt-2 leading-tight">{data.title}</p>
      <p className="font-normal text-xs text-neutral-400">by {data.creator}</p>
      <div className="w-full flex flex-row items-center mt-2">
        <Image
          src='/assets/icons/eth.png'
          alt="eth"
          width={20}
          height={20}
        />
        <p className="text-sm font-medium">{data.price}</p>
        <Button
          label="Place a bid"
          fill
          className=" text-sm ml-auto px-6 py-1"
        />
      </div>
    </div>
  </div>
  )
}

export default NftCard