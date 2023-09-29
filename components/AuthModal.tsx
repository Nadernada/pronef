'use client'

import { useSupabaseClient } from '@supabase/auth-helpers-react'
import useAuthModal from '@/hooks/useAuthModal'


import Modal from './Modal'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const AuthModal = () => {

  const supabaseClient = useSupabaseClient()
  const authModal = useAuthModal()

  return (
    <Modal
    onClose={() => authModal.onClose}
    isOpen={authModal.isOpen}
    title='Login'
    >
      <Auth
        supabaseClient={supabaseClient}
        theme='light'
        providers={['google']}
        appearance={{
          theme: ThemeSupa
        }}
      />
    </Modal>
  )
}

export default AuthModal