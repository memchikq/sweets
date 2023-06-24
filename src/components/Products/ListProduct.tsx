import { createStyles } from '@mantine/core'
import {useRouter} from 'next/navigation'

const list: string[] = ["Пирожные", "Торты", "Пироги", "Печенье"]

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

const ListProduct = () =>{
    const {classes} = useStyles()
    const router = useRouter()
    return (
    <div>
        <ul style={{display:"flex", justifyContent:"center"}}>
            {list.map((val,i)=>(
                <li key={i} onClick={()=> router.push("/products?b=23") } className={classes.liElement}>{val}</li>
            ))}
        </ul>
    </div>
    )
}

export default ListProduct