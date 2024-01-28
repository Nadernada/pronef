'use client'

import { toast } from 'react-hot-toast'


import Modal from './Modal'
import useLogoutModal from '@/hooks/useLogoutModal'
import Button from './Button'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'

const LogoutModal = () => {

  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const logoutModal = useLogoutModal()

  const handleLogout = async() => {
    const { error} = await supabaseClient.auth.signOut()
    logoutModal.onClose()
    router.refresh()

    if(error) {
      console.log(error)
    }
  }

  return (
    <Modal
    onClose={logoutModal.onClose}
    isOpen={logoutModal.isOpen}
    title=''
    >
      <div className="flex flex-col items-center gap-y-6">
        <p className='font-semibold'>Leaving already?</p>
        <div className='flex flex-row gap-x-2'>
          <Button
            label='Cancel'
            className='bg-neutral-400 text-white'
            onClick={logoutModal.onClose}
          />
          <Button
            label='Logout'
            className='bg-red-800 text-white'
            onClick={handleLogout}
          />
        </div>
      </div>
    </Modal>
  )
}

export default LogoutModal