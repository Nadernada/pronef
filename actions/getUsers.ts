import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { User } from "@/type";

const getUsers = async(): Promise<User[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const { data, error } = await supabase
                            .from('users')
                            .select('*')

  if (error) {
    console.log(error);
  }

  return (data as any) || []
}

export default getUsers