'use client'

import Image from "next/image"
import Button from "./Button"
import useLoadImage from "@/hooks/useLoadImage"
import { Nft } from "@/type"
import useBidModal from "@/hooks/useBidModal"
import useNftStore from "@/hooks/useNftStore"
import { useUser } from "@/hooks/useUser"

const People = () => {

  const person = [
    '/assets/images/person01.png',
    '/assets/images/person02.png',
    '/assets/images/person03.png',
  ]

  const nftStore = useNftStore()

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
  const ending_at = data.bet_ends_in * 1000 * 60 * 60 + (Date.parse(data?.created_at.toString()))
  const countdown = Date.now() - ending_at 
  const ended = countdown > 0

  const bidModal = useBidModal()
  const nftStore = useNftStore()
  const user = useUser()
  const bidded = nftStore.bids.filter(bid => bid.nft.id == data.id && bid.bidder == user?.id)
  console.log(bidded);
  

  const handleClick = () => {
    bidModal.set_nft_id(data?.id)
    bidModal.onOpen()    
    
  }
  

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
      <div className="rounded-lg flex flex-col justify-center items-center p-2 shadow-md bg-white">
        {
          ended ? (
            <p className="text-md font-bold text-red-700">Ended</p>
          ) : (
            <>
              <p className="text-xs text-neutral-400 font-normal">Ending in</p>
              <p className="text-md font-bold">{-(countdown / 1000 /60 /60).toFixed()}h</p>
            </>
          )
        }
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
        {
          !ended &&
          (bidded.length === 0) &&
          (data.user_id !== user?.id) && 
            <Button
              label="Place a bid"
              fill
              className=" text-sm ml-auto px-6 py-1"
              onClick={handleClick}
            />
        }
        
      </div>
    </div>
  </div>
  )
}

export default NftCard