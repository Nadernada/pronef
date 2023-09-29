import Box from "./Box"
import { NFTData } from "@/constants/dummy"
import Profile from "./Profile"
import { useSessionContext } from "@supabase/auth-helpers-react"
import Button from "./Button"
import useAuthModal from "@/hooks/useAuthModal"
import Skeleton from "@mui/material/Skeleton"

const RightBar = () => {

  const { session } = useSessionContext()
  const authModal = useAuthModal()

  const handleLogin = () => {
    authModal.onOpen()
  }


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
        {NFTData.map((nft, i) => {
          if(i < 3) {
            return (
              <Box
                key={nft.id}
                title={nft.name}
                subtitle={`Sold at ${nft.price} ETH`}
                imgUrl={nft.image}
                time="Just Now"
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
        {NFTData.map((nft, i) => {
          if(i < 5) {
            return (
              <Box
              key={nft.id}
              title={nft.creator}
              subtitle={`Sold at ${nft.price} ETH`}
              imgUrl={nft.image}
              time="2h ago"
              />
            )
          }
        })}
      </div>
      
    </div>
  )
}

export default RightBar