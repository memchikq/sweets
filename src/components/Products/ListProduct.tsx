'use client'
import { createStyles } from '@mantine/core'
import {useRouter} from 'next/navigation'
import {CategoriesResponseSuccess} from "@/utils/index"
import { FC } from 'react'
// const list: string[] = ["Пирожные", "Торты", "Пироги", "Печенье"]

const useStyles = createStyles((theme) => ({
    liElement:{
        padding:"5px",
        margin:"8px",
        fontSize:"20px",
        cursor:"pointer",
        transition:"all .5s",
        "&:hover":{
           color:"gold"
        }
    }
}))



const ListProduct:FC<{list:CategoriesResponseSuccess}> = ({list}) =>{
    const {classes} = useStyles()
    const router = useRouter()
    return (
    <div>
        <ul style={{display:"flex", justifyContent:"center"}}>
            {list?.map((val,i)=>(
                <li key={val.id} onClick={()=> router.push(`/products?c=${val.id}`) } className={classes.liElement}>{val.name}</li>
            ))}
        </ul>
    </div>
    )
}

export default ListProduct