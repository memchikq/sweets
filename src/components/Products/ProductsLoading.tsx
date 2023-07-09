import { Container, Grid, Skeleton } from '@mantine/core'


const ProductsLoading = () =>{
    
    return (
        <Container size="lg">
        <Grid justify="center">
          {new Array(15).fill(0).map((v,i) => (
            <Grid.Col key={i} sm={9} md={6} lg={4}>
              <Skeleton width={364} height={501}/>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    )
}

export default ProductsLoading