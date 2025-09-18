import { error } from "console"
import path from "path"
import * as z from "zod"
export const RegestierSchema = z.object({
        name: z.string().min(3,"Name min 3").max(20,"max name 20 charachter"),
      email: z.email("enter valid mail"),
      password: z.string("password must be string").min(10,"minmum password must contain 10 charachter"),
      rePassword:  z.string("password must be string").min(10,"minmum password must contain 10 charachter"),
      phone: z.string().regex(/^01[0125][0-9]{8}$/,"enter valid phone nomber"),
}).refine(function(object){
    if(object.password === object.rePassword){
        return true
    }
    return false 
    path:["repassword"]
    error:"password must match repassword " 

})

export type regSchemType = z.infer<typeof RegestierSchema>