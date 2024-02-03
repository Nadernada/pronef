'use client'

import Header from '@/components/Header'
import NftCard from '@/components/NftCard'
import useNftStore from '@/hooks/useNftStore'
import { useUser } from '@/hooks/useUser'
import React from 'react'

const Portfolio = () => {

  const nfts = useNftStore(state => state.nfts)
  const user = useUser()
  
  

  return (
    <div className='flex flex-col gap-y-6'>
      <Header />

      <div className="flex flex-col gap-y-6">
        {
          nfts?.map((nft) => {
            if(nft.user_id === user?.id) {
              return <NftCard key={nft?.id} data={nft} />
            }
          })
        }
      </div>
    </div>
  )
}

export default Portfolio