'use client'

import Box from "./Box"
import { NFTData } from "@/constants/dummy"
import Profile from "./Profile"
import { useSessionContext } from "@supabase/auth-helpers-react"
import Button from "./Button"
import useAuthModal from "@/hooks/useAuthModal"
import getNFTs from "@/actions/getNFTs"
import { useEffect, useState } from "react"
import { Nft } from "@/type"
import useLoadImage from "@/hooks/useLoadImage"
import { useUser } from "@/hooks/useUser"
import useNftStore from "@/hooks/useNftStore"

const RightBar = () => {

  const { session } = useSessionContext()
  const user = useUser()
  const authModal = useAuthModal()
  // const [nfts, setNfts] = useState<Nft[]>([])
  const nfts = useNftStore(state => state.nfts)

  const handleLogin = () => {
    authModal.onOpen()
  }

  const setNfts = useNftStore(state => state.allNfts)
  useEffect(() => {
    (async() => {
      const data = await getNFTs()
      if(data) {
       setNfts(data)
      }      
      
    })()
  }, [nfts])
  

    return (
    <div className="flex flex-col justify-start gap-y-6">
      <div className="flex flex-row justify-between items-center">
        {session ? <Profile /> : <Button label="Login" fill onClick={handleLogin} />}
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between items-center">
          <p className="font-bold text-lg ">Top Drops</p>
          <p className="font-normal text-xs text-neutral-400">See all</p>
        </div>
        {nfts.map((nft, i) => {
          if(i < 3) {

            return (
              <Box
                key={nft.id}
                title={nft.title}
                subtitle={`Sold at ${nft.price} ETH`}
                imgUrl={nft}
                time={nft.created_at}
              />
            )
          }
        })}

      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between items-center">
          <p className="font-bold text-lg ">History</p>
          <p className="font-normal text-xs text-neutral-400">See all</p>
        </div>
        {nfts.map((nft, i) => {
          if(nft.creator == user?.name && i < 5) {
            return (
              <Box
              key={nft.id}
              title={nft.title}
              subtitle={`Sold at ${nft.price} ETH`}
              imgUrl={nft}
              time={nft.created_at}
              />
            )
          }
        })}
      </div>
      
    </div>
  )
}

export default RightBar