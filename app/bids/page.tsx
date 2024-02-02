'use client'

import Header from '@/components/Header'
import NftCard from '@/components/NftCard'
import useNftStore from '@/hooks/useNftStore'
import { useUser } from '@/hooks/useUser'
import React from 'react'

const Favorite = () => {

  const bids = useNftStore(state => state.bids)
  const user = useUser()

  console.log(bids);
  
  

  return (
    <div className='flex flex-col gap-y-6'>
      <Header />

      <div className="flex flex-col gap-y-6">
        {
          bids?.map((bid) => {
            if(bid?.bidder === user?.id) {
              return <NftCard key={bid?.id} data={bid?.nft} />
            }
          })
        }
      </div>
    </div>
  )
}

export default Favorite