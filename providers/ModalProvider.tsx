import AuthModal from "@/components/AuthModal"
import BidModal from "@/components/BidModal"
import LogoutModal from "@/components/LogoutModal"
import UploadModal from "@/components/UploadModal"


const ModalProvider = () => {
  return (
    <>
      <AuthModal />
      <UploadModal />
      <LogoutModal />
      <BidModal />
    </>
  )
}

export default ModalProvider