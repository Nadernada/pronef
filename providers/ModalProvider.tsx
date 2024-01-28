import AuthModal from "@/components/AuthModal"
import LogoutModal from "@/components/LogoutModal"
import UploadModal from "@/components/UploadModal"


const ModalProvider = () => {
  return (
    <>
      <AuthModal />
      <UploadModal />
      <LogoutModal />
    </>
  )
}

export default ModalProvider