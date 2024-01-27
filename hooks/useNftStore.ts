import { Nft } from '@/type'
import { create } from 'zustand'

interface NftStoreProps {
  nfts: Nft[]
  allNfts: (data: Nft[]) => void
}

const useNftStore = create<NftStoreProps>((set) => ({
  nfts: [],
  allNfts: (data: Nft[]) => set((state) => ({ nfts: data}) ),
}))

export default useNftStore