export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      nft: {
        Row: {
          created_at: string
          creator: string | null
          id: string
          img_path: string | null
          price: number | null
          title: string | null
          user_id: string | null
          bet_ends_in: number | null
          category: string | null
        }
        Insert: {
          created_at?: string
          creator?: string | null
          id?: string
          img_path?: string | null
          price?: number | null
          title?: string | null
          user_id?: string | null
          bet_ends_in?: number | null
          category?: string | null
        }
        Update: {
          created_at?: string
          creator?: string | null
          id?: string
          img_path?: string | null
          price?: number | null
          title?: string | null
          user_id?: string | null
          bet_ends_in?: number | null
          category?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nft_creator_fkey"
            columns: ["creator"]
            referencedRelation: "users"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "nft_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          id: string
          name: string | null
          coins: number | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          coins?: number | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          coins?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      bids: {
        Row: {
          bidder: string | null
          created_at: string
          price: number | null
          id: number
          nft: string | null
        }
        Insert: {
          bidder?: string | null
          created_at?: string
          price?: number | null
          id?: number
          nft?: string | null
        }
        Update: {
          bidder?: string | null
          created_at?: string
          price?: number | null
          id?: number
          nft?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bids_bidder_fkey"
            columns: ["bidder"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bids_nft_fkey"
            columns: ["nft"]
            referencedRelation: "nft"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
