"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegestierSchema, regSchemType } from "@/schema/regestier.schema";
import React from "react";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import axios from './../../../node_modules/axios/lib/axios';
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const SignUp =  () => {
  const router =useRouter()
  const form = useForm<regSchemType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver:zodResolver(RegestierSchema)
    
  });
  async function handleRegister(values) {
    try {
      const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup" , values)
      console.log(data.message)
      toast.success(data.message,{
        position:"top-center",
        duration:2000,
      })
      router.push("/login")
    } catch (error) {
       toast.error(error.response.data.message,{
        position:"top-center",
        duration:2000,
      })
    }
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleRegister)}
          className=" p-3 shadow-xl shadow-black w-[40%] mx-auto rounded mt-8"
        >
          <h1 className="text-center text-3xl ">Sign Up</h1>
          <FormField
            control={form.control}
            name="name"
            render={({field}) => (
              <FormItem className="w-full  mx-auto ">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field}></Input>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
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
            control={form.control}
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
          <FormField
            control={form.control}
            name="rePassword"
            render={({field}) => (
              <FormItem className="w-full  mx-auto ">
                <FormLabel>repassword</FormLabel>
                <FormControl>
                  <Input type="password" {...field}></Input>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({field}) => (
              <FormItem className="w-full  mx-auto ">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" {...field}></Input>
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
            Regestier Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;
