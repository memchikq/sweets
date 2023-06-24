export type supabaseType = {
    error:any | null,
    data:[
        {
            id:number,
            name:string,
            price:number,
            picture:string,
            cat_id:number,
            description:string,
            weight:number
        }
            
    ],
    count: number | null,
    status:number,
    statusText: string
}