import { User } from "@/type"
import { useSessionContext, useUser as useSupaUser} from "@supabase/auth-helpers-react"
import { createContext, useContext, useEffect, useState } from "react"

interface Props {
  [propName: string]: any
}

export const UserContext = createContext<User | null>(
  null
)

export const MyUserContextProvider = (props: Props) => {
  const {
    session,
    supabaseClient
  } = useSessionContext()

  const [userDetails, setUserDetails] = useState<User | null>(null)

  const getUserDetails = () => supabaseClient
                                  .from('users')
                                  .select('*')
                                  .eq('id', user?.id)
                                  .single()

  const user = useSupaUser()
  
  useEffect(() => {
    if(user && !userDetails) {
      Promise.allSettled([getUserDetails()]).then(
        (results) => {
          if (results[0].status === "fulfilled") {
            setUserDetails(results[0].value.data as User)
          } 
        }
      )
    } else if (!user) {
      setUserDetails(null)
    }
  }, [user])
                                  
  
  return <UserContext.Provider value={userDetails} {...props} />
}

export const useUser = () => {
  const context = useContext(UserContext)

  if(context === undefined) {
    throw new Error('useUser must be used in UserContext')
  }

  return context
}