'use client'

import useUploadModal from '@/hooks/useUploadModal'
import { toast } from 'react-hot-toast'

import Modal from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Input from './Input'
import Button from './Button'
import { useUser } from '@/hooks/useUser'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'

const UploadModal = () => {

  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const router = useRouter()

  const uploadModal = useUploadModal()
  const {
    register,
    reset,
    handleSubmit
  } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = async(values) => {
    const imgFile = values.image?.[0]

    try {
      const { data: imgData, error: imgError } = await supabaseClient
                                                        .storage
                                                        .from('images')
                                                        .upload(`image-${values.title}`, imgFile, {
                                                          cacheControl: '3600',
                                                          upsert: false
                                                        })

      if(imgError) {
        return toast.error('Failed to upload the image')
      }

      const { error } = await supabaseClient
                                      .from('nft')
                                      .insert({
                                        title: values?.title,
                                        price: values?.price,
                                        img_path: imgData?.path,
                                        user_id: user?.id,
                                        creator: user?.name
                                      })

      if(error) {
        return toast.error(error.message)
      }
      

      toast.success('Your NFT has been uploaded!')
      uploadModal.onClose()
      reset()
      router.refresh()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
    onClose={uploadModal.onClose}
    isOpen={uploadModal.isOpen}
    title='Upload an NFT'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-4'
      >
        <Input
          {...register('title', { required: true })}
          placeholder='Enter a title'
          type='text'
          disabled={false}
          className='
            bg-purple-100
            placeholder:text-purple-500
            focus:outline-none
            focus:shadow-lg
            focus:shadow-purple-500/60
          '
        />
        <Input
          {...register('price', { required: true })}
          placeholder='Set your price'
          type='number'
          disabled={false}
          className='
            bg-yellow-100
            placeholder:text-yellow-500
            focus:outline-none
            focus:shadow-lg
            focus:shadow-yellow-500/60
          '
        />
        <div className='flex flex-col gap-y-2'>
          <p>Select your image</p>
          <Input
          {...register('image', { required: true })}
          type='file'
          disabled={false}
          accept='image/*'
          className='
            bg-lime-100
            placeholder:text-lime-500
            focus:outline-none
            focus:shadow-lg
            focus:shadow-lime-500/60
          '
        />
        </div>
        <Button
          label='Upload'
          className='
            py-3
            border-[1px]
            border-purple-400
            hover:bg-purple-600
            text-purple-600
            hover:text-white
          '
          type='submit'
        />
      </form>
    </Modal>
  )
}

export default UploadModal