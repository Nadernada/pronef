export interface User {
  id: string
  name: string
  email: string
  avatar_url?: string | undefined
  created_at: string
  coins: number
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
  bet_ends_in: number
}

export interface Bid {
  id: string
  bidder: string
  price: number
  nft: string
  ended: boolean
  created_at: string
}