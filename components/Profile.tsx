import useUploadModal from "@/hooks/useUploadModal"
import { useUser } from "@/hooks/useUser"
import Image from "next/image"
import { AiOutlinePlus } from "react-icons/ai"
import { BiMessageDetail } from "react-icons/bi"
import { IoIosNotifications } from "react-icons/io"

const Profile = () => {

  const user = useUser()
  const uploadModal = useUploadModal()

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-x-2">
        <BiMessageDetail size={25} />
        <IoIosNotifications size={25} />
        <AiOutlinePlus size={25} onClick={uploadModal.onOpen} className='cursor-pointer hover:text-neutral-500' />
      </div>
      <div className="flex flex-row gap-x-2">
        <Image
          src={user?.avatar_url? user.avatar_url : '/assets/images/person01.png'} 
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-sm">{user?.name}</p>
          <p className="bg-black rounded-full text-white text-[9px] text-center w-fit px-2">Top Buyer</p>
        </div>
      </div>
    </>
  )
}

export default Profile