'use client'

import { convertDate, timeElapsed } from "@/actions/convertDate"
import useLoadImage from "@/hooks/useLoadImage"
import useNftStore from "@/hooks/useNftStore"
import { useUser } from "@/hooks/useUser"
import { Bid, Nft } from "@/type"
import Image from "next/image"

//@ts-ignore
const Notif = ({data}: Nft | Bid) => {

  const imgPath = useLoadImage(data.nft ? data.nft : data)


  return (
    <div key={data.id} className="odd:bg-neutral-200 even:bg-white p-4 align-left flex flex-row justify-between items-center">
    <div className="flex flex-row gap-x-2 items-center">
      <div className="h-[50px] w-[50px] rounded-full overflow-hidden ">
        <Image
          src={imgPath || '/assets/images/nft01.png'}
          alt="avatar"
          width={100}
          height={100}
          className="min-w-[50px] min-h-[50px] object-cover"
          />
      </div>
      <p>
        {
        data.bidder ? `You bid on ${data?.nft.creator}'s NFT for ${data?.price}ETH.`
        : `You published an NFT "${data.title}".`
        }
      </p>
    </div>
    <p className='text-xs font-semibold text-neutral-800'>{ timeElapsed(data?.created_at) }</p>
  </div>
  )
}


const History = () => {

  const nftStore = useNftStore()
  const user = useUser()
  const nfts = nftStore?.nfts?.filter(nft => nft.user_id === user?.id)
  const bids = nftStore.bids
  const data: (Nft | Bid)[] = [nfts, bids].flat()
  const dataSorted = data.sort((a, b) => Number(convertDate(a.created_at)) - Number(convertDate(b.created_at)))


  return (
    <div className='flex flex-col gap-y-6 pt-6'>
      <h2 className='font-semibold text-lg'>Your History</h2>

      <div className="*:rounded-xl flex flex-col gap-y-2">
        {
          (data) ?
            //@ts-ignore
            dataSorted.map((nftOrBid) => <Notif key={nftOrBid.id} data={nftOrBid} /> )
          :  (<p>No History found! try publishing your first NFT.</p>)
          }
      </div>
    </div>
  )
}

export default History