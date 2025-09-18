import * as z from "zod"
export  const signInSchema = z.object({
    email: z.email("Enter valid email "),
    password:z.string("enter valid password").min(10,"minmum password must be 10 charachter") 
})
export type signInSchemaType = z.infer<typeof signInSchema>