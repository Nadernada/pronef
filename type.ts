export interface User {
  id: string
  name: string
  email: string
  avatar_url?: string | undefined
  created_at: string
}

export interface Nft {
  id: string
  title: string
  price: number
  user_id: string
  creator: string
  img_path: string
  created_at: string
  category: string
}