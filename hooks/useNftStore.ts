import { Nft } from '@/type'
import { create } from 'zustand'

interface NftStoreProps {
  nfts: Nft[]
  allNfts: (data: Nft[]) => void
  filterValue: string
  setFilterValue: (value: string) => void
}

const useNftStore = create<NftStoreProps>((set) => ({
  nfts: [],
  allNfts: (data: Nft[]) => set((state) => ({ nfts: data}) ),
  filterValue: '',
  setFilterValue: (value: string) => set((state) => ({filterValue: value}))
}))

export default useNftStore