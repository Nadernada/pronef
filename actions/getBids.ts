'use server'

import { Bid } from "@/type";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getBids = async(): Promise<Bid[]> => {
  const supabase = createServerComponentClient({ cookies: cookies})

  const { data, error } = await supabase
                                      .from('bids')
                                      .select('*, users(*), nft(*)')

  if(error) {
    console.log(error)
  }

  return (data as any) || []
}

export default getBids