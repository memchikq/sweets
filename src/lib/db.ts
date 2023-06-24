import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.NEXT_PUBLIC_DB_URL as string, process.env.NEXT_PUBLIC_DB_KEY as string,{auth:{
    persistSession: false
}})