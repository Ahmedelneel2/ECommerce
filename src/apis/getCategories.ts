export default async function getCategories (){
    const resp =await fetch("https://ecommerce.routemisr.com/api/v1/categories")
    const {data} = await resp.json()
return data
}