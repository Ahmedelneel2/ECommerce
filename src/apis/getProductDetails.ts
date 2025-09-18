
const getProductDetails = async (id:string) => {
    const productDetails = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  const details = await productDetails.json()
return details   
}

export default getProductDetails