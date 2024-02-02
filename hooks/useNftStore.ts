import { Bid, Nft } from '@/type'
import { create } from 'zustand'

interface NftStoreProps {
  nfts: Nft[]
  allNfts: (data: Nft[]) => void
  bids: Bid[]
  allBids: (data: Bid[]) => void
  filterValue: string
  setFilterValue: (value: string) => void
}

const useNftStore = create<NftStoreProps>((set) => ({
  nfts: [],
  allNfts: (data: Nft[]) => set((state) => ({ nfts: data}) ),
  bids: [],
  allBids: (data: Bid[]) => set((state) => ({ bids: data}) ),
  filterValue: '',
  setFilterValue: (value: string) => set((state) => ({filterValue: value}))
}))

export default useNftStore