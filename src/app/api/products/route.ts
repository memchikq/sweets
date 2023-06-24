import {supabase} from '@/lib/db'
import {supabaseType} from '@/lib/typesOfRow'
import { NextRequest, NextResponse } from 'next/server'


export async function GET(request:NextRequest,response:NextResponse) {
   const {data} = await supabase.from('products').select() as supabaseType
    
   return NextResponse.json({data})
}