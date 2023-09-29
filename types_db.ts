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
        }
        Insert: {
          created_at?: string
          creator?: string | null
          id?: string
          img_path?: string | null
          price?: number | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          creator?: string | null
          id?: string
          img_path?: string | null
          price?: number | null
          title?: string | null
          user_id?: string | null
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
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
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
