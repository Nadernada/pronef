'use server'

import { Nft } from "@/type"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"


const getNFTs = async(): Promise<Nft[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const { data, error} = await supabase
                          .from('nft')
                          .select('*')
                          .order('created_at', { ascending: false})
  
  if(error) {
    console.log(error);
  }

  return (data as any) || []
}

export default getNFTs