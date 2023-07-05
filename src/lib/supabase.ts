export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name?: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          cat_id: number
          description: string
          id: number
          name: string
          picture: string
          price: number
          structure: string
          weight: number
        }
        Insert: {
          cat_id: number
          description?: string
          id?: number
          name?: string
          picture?: string
          price?: number
          structure?: string
          weight?: number
        }
        Update: {
          cat_id?: number
          description?: string
          id?: number
          name?: string
          picture?: string
          price?: number
          structure?: string
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_cat_id_fkey"
            columns: ["cat_id"]
            referencedRelation: "category"
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
