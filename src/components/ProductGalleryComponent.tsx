import { Box, Center, createStyles } from '@mantine/core'
import React from 'react'
const useStyles = createStyles((theme) => ({
   
  }))
const ProductGalleryComponent = () =>{
    const {classes} = useStyles()
    return (
    <Box mt={15}>
        <Center fz={20}>
            <h2>
                Наша продукция
            </h2>
        </Center>
    </Box>
    )
}

export default ProductGalleryComponent