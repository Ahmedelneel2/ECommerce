import getCategories from '@/apis/getCategories'
import React from 'react'
import SwiperCategory from './swiperCategory'



const CategorySlide = async () => {
const  categories = await getCategories()
console.log(categories)
  return (
   <div>
   <SwiperCategory categories={categories}/>
   </div>
  )
}

export default CategorySlide