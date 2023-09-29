import NftCard from "./NftCard"
import getNFTs from "@/actions/getNFTs"


const Feed = async() => {

  const nfts = await getNFTs()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
      {nfts.map((data) => (
        <NftCard
          key={data.id}
          data={data}
        />
      ))}
    </div>
  )
}

export default Feed