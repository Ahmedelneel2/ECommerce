"use client"
import { Button } from "@/components/ui/button";
import axios from './../../../node_modules/axios/lib/axios';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input'
import React from 'react'
import {  useForm } from 'react-hook-form'
import {signInSchema} from "./../../schema/signin.schema"
import {zodResolver} from "@hookform/resolvers/zod"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router =useRouter()
  const LoginForm = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver:zodResolver(signInSchema)
  });

   async function handleLogin(values:any){
    console.log(values)
    try{
    const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      toast.success(data.data.message , {
        position:"top-center",
        duration:2000
      })
      router.push("/")
    }catch(error:any){
  toast.error(error.response.data.message,{
        position:"top-center",
        duration:2000,
      })    }
  }
  return (
    <div>
             <Form {...LoginForm}>
              <form
          onSubmit={LoginForm.handleSubmit(handleLogin)}
          className=" p-3 shadow-xl shadow-black w-[40%] mx-auto rounded mt-8"
        >
          <h1 className="text-center text-3xl ">Sign In</h1>
                <FormField
                control={LoginForm.control}
                name="email"
                render={({field}) => (
                  <FormItem className="w-full  mx-auto ">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field}></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={LoginForm.control}
                name="password"
                render={({field}) => (
                  <FormItem className="w-full  mx-auto ">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field}></Input>
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
               <Button
                          className="w-full bg-black  ms-auto text-white "
                          type="submit"
                          variant="outline"
                        >
                          Sign In
                        </Button>
              </form>
             </Form>
    </div>
  )
}

export default LogIn