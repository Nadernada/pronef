'use client'

import Modal from './Modal'
import Button from './Button'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import useBidModal from '@/hooks/useBidModal'
import Input from './Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useUser } from '@/hooks/useUser'
import toast from 'react-hot-toast'

const BidModal = () => {

  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const bidModal = useBidModal()
  const user = useUser()

  const {
    register,
    reset,
    handleSubmit
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async(values) => {
    try {
      const { error } = await supabaseClient
                                      .from('bids')
                                      .insert(
                                        [{
                                        price: values?.bid_price,
                                        bidder: user?.id,
                                        nft: bidModal.nft_id
                                      }])

      if(error) {
      return toast.error(error.message)
      }

      toast.success('Bid placed!')
      router.refresh()
      bidModal.set_nft_id('')
      bidModal.onClose()
      reset()
    } catch (error) {
      console.log(error);
      
    }

  }

  return (
    <Modal
    onClose={bidModal.onClose}
    isOpen={bidModal.isOpen}
    title='Place a bid'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-y-6">
          <div className="flex flex-row gap-x-6">
            <p className='font-semibold w-5/6'>How much do you want to bid?</p>
            <Input
              {...register('bid_price', { required: true })}
              type='number'
              className='bg-green-100 outline-none'
            />
          </div>
          <div className='flex flex-row gap-x-2'>
            <Button
              label='Cancel'
              className='bg-neutral-400 text-white'
              onClick={bidModal.onClose}
            />
            <Button
              type='submit'
              label='Bid'
              className='bg-green-600 hover:bg-green-800 text-white'
            />
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default BidModal