import { supabase } from "@/lib/db"

import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, response: NextResponse) {
  const searchParams = request.nextUrl.searchParams.get("c")
  if (searchParams !== "null") {
     const { data } = await supabase
     .from("products")
     .select("id,picture")
     .eq("cat_id", searchParams)
     
     return NextResponse.json({ data })
   }
   
   const { data } = await supabase.from("products").select("id,picture")
  return NextResponse.json({ data })
}
