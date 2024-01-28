import { create } from 'zustand'

interface logoutModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useLogoutModal = create<logoutModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
})) 

export default useLogoutModal