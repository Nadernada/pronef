'use client'

import Header from '@/components/Header'
import NftCard from '@/components/NftCard'
import useNftStore from '@/hooks/useNftStore'
import React from 'react'

const page = () => {

  const nfts = useNftStore(state => state.nfts)

  return (
    <div className="flex flex-col gap-y-6">
    <Header />
    
    <div className="flex flex-col gap-y-3">
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {
          nfts.map((nft) => (
            <NftCard
              key={nft.id}
              data={nft}
            />
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default page