import { Container, Flex, Skeleton, Space, createStyles } from "@mantine/core"
const useStyles = createStyles((theme) => ({
    flexContainer: {
      flexWrap:"nowrap",
      [theme.fn.smallerThan("sm")]: {
        flexWrap: "wrap",
      },
    },
    productImage:{
      [theme.fn.smallerThan("sm")]: {
        width:"100%",
        height:"100%"
      }
    }
  }))

const ProductsByIdLoading = () =>{
    const {classes} = useStyles()
    return (
        <Container size="md" mt={40} mb={40}>
        <Flex gap={25} className={classes.flexContainer} >
          <div>
          <Skeleton width={400} height={300}/>
          </div>
  
          <div>
          <Skeleton width={150} height={30}/>
  
            <Space h="md" />
            <Skeleton width={90} height={30}/>
            <Space h="md" />
            <Skeleton width={400} height={100}/>
            <Space h="md" />
  
            <Skeleton width={400} height={60}/>
            <Space h="md" />
            <Skeleton width={70} height={25}/>
            <Space h="md" />
            <Skeleton width={80} height={40}/>
          </div>
        </Flex>
      </Container>
    )
}

export default ProductsByIdLoading