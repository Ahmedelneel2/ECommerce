"use client"
import { Button } from '@/components/ui/button';
import getAllProducts from '../apis/getAllProducts'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { FaStar } from "react-icons/fa6";
import Mainswiper from './_components/MainSwiper/Mainswiper';
import CategorySlide from './_components/CategorySlide/CategorySlide';
import getCategories from '@/apis/getCategories';
import Image from 'next/image';
import { useContext } from 'react';
import { AppProvider } from '@/store/context';


const Home = async () => {
  const state = useContext(AppProvider)
  console.log("text",state)

   const products = await getAllProducts()
  
  return <>
    <Mainswiper/>
    <CategorySlide/>
    <div className='w-[80%] mx-auto flex flex-wrap justify-center items-center gap-1  m-3' >
  {products.map((product, index)=>{
    return (
      <Link href={`/productdetails/${product.id}`} className="rounded-md border border-black mt-3 w-full md:w-1/5 xl:w-1/4  bg-[#FFFFFF]  p-1" key={index} >
                < Image width={500} height={300} className="object-cover " src={product.imageCover} alt="sas" />
                <p className="text-[green] text-center text-bold">{product.brand.name}</p>
                <p  className='line-clamp-1 text-center text-[black] font-bold'>{product.slug}</p>
                <div className='p-2 flex justify-between align-center'>
                 <p  className='line-clamp-1 text-center text-[black] font-bold '>{product.price} EGP</p>
               {/* price & rate */}
                <div className=' flex justify-center align-center self-end p-1 text-[yellow] text-end' >
                  <i className="text-[yellow] fa-solid fa-star"></i>
                  <p className="text-[black] ms-1 font-bold">{product.ratingsAverage} </p>
                </div>
                </div>
              <Button className='bg-green-400 w-full'>Add to Cart</Button>
      </Link> 
      )
  })}
  </div>
  </>  
}

export default Home