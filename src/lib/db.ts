import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase'
export const supabase = createClient<Database>(process.env.NEXT_PUBLIC_DB_URL as string, process.env.NEXT_PUBLIC_DB_KEY as string,{auth:{
    persistSession: false
}})