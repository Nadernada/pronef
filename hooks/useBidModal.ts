import { create } from 'zustand'

interface BidModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  nft_id: string
  set_nft_id: (id: string) => void
}

const useBidModal = create<BidModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  nft_id: '',
  set_nft_id: (id: string) => set(state => ({nft_id: id}))
})) 

export default useBidModal