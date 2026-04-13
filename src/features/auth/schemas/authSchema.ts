import { z } from 'zod'

export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1, {error: 'El nombre es obligatorio'}),
    email : z.email({error : 'E-mail no es valido'}),
    password : z.string().trim().min(8, {error : 'El Password es minimo de 8 carecteres'}),
    passwordConfirmation : z.string().trim().min(1 , {error : 'La confirmacion no puede ir vacia'}),

})

export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true,
}).refine( (data) => data.password === data.passwordConfirmation, {
    error: "Los Passwords no son iguales",
    path: ['passwordConfirmation']
})

export type SignUpInput = z.infer<typeof SignUpSchema>