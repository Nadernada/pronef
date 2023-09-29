

import { Nft } from "@/type"
import { useSupabaseClient } from "@supabase/auth-helpers-react"


const useLoadImage = ( data: Nft ) => {
  const supabase = useSupabaseClient()

  if (!data) {
    return null
  }

  const { data: imgData } = supabase
                          .storage
                          .from('images')
                          .getPublicUrl(data.img_path)

  return imgData.publicUrl
}

export default useLoadImage