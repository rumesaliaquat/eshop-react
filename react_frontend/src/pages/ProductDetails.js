import { useFetchSingleProduct } from "../config/components/CustomHooks"

function ProductDetails() {
 const {id, name, price} = useFetchSingleProduct()
 
  return (
    <>
    <div>{name}</div>
    </>
  )
}

export default ProductDetails