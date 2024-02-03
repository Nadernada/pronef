'use client'

import { convertDate, timeElapsed } from "@/actions/convertDate"
import useLoadImage from "@/hooks/useLoadImage"
import useNftStore from "@/hooks/useNftStore"
import { useUser } from "@/hooks/useUser"
import { Bid, Nft } from "@/type"
import Image from "next/image"

const History = () => {

  const nftStore = useNftStore()
  const user = useUser()
  const nfts = nftStore?.nfts?.filter(nft => nft.user_id === user?.id)
  const bids = nftStore.bids
  const data: (Nft | Bid)[] = [nfts, bids].flat()
  const dataSorted = data.sort((a, b) => Number(convertDate(a.created_at)) - Number(convertDate(b.created_at)))

  const imgPath = (arg: Nft) => useLoadImage(arg)

  return (
    <div className='flex flex-col gap-y-6 pt-6'>
      <h2 className='font-semibold text-lg'>Your History</h2>

      <div className="*:rounded-xl flex flex-col gap-y-2">
        {
          (nfts || bids) ?
            dataSorted.map((nftOrBid) => {

              return (
                    <div key={nftOrBid.id} className="odd:bg-neutral-200 even:bg-white p-4 align-left flex flex-row justify-between items-center">
                      <div className="flex flex-row gap-x-2 items-center">
                        <div className="h-[50px] w-[50px] rounded-full overflow-hidden ">
                          <Image
                          // @ts-ignore
                            src={imgPath(nftOrBid?.nft) || imgPath(nftOrBid) || '/assets/images/nft01.png'}
                            alt="avatar"
                            width={100}
                            height={100}
                            className="min-w-[50px] min-h-[50px] object-cover"
                            />
                        </div>
                        {/* @ts-ignore */}
                        <p>
                          {
                            //@ts-ignore
                          nftOrBid.bidder ? `You bid on ${nftOrBid?.nft.creator}'s NFT for ${nftOrBid?.price}ETH.`
                          //@ts-ignore
                          : `You published an NFT "${nftOrBid.title}".`
                          }
                        </p>
                      </div>
                      <p className='text-xs font-semibold text-neutral-800'>{ timeElapsed(nftOrBid?.created_at) }</p>
                    </div>
              )
            })
          :  (<p>No History found! try publishing your first NFT.</p>)
          }
      </div>
    </div>
  )
}

export default History