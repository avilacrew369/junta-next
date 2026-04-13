"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"
import { SignUpInput, SignUpSchema } from "../schemas/authSchema"
import { signUpAction } from "../actions/auth-actions"

export default function RegisterForm() {

    const { register, handleSubmit, formState : {errors } } = useForm({
        resolver: zodResolver(SignUpSchema),
        mode: 'onSubmit'
    })
    

    const onSubmit = async(data : SignUpInput) => {
        await signUpAction(data)
    }

  return (
    <Form
        onSubmit={handleSubmit(onSubmit)}
     >
        <FormLabel htmlFor="name">Nombre </FormLabel>
        <FormInput 
            id="name"
            type="text"
            placeholder="Ingresa tu Nombre"
            {...register('name')}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}

        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormInput 
            id="email"
            type="email"
            placeholder="Ingresa tu E-mail"
            {...register('email')}

        />
        {errors.email && <FormError>{errors.email.message}</FormError>}

        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput 
            id="password"
            type="password"
            placeholder="Passwors Min. 8 caracteres"
            {...register('password')}

        />
        {errors.password && <FormError>{errors.password.message}</FormError>}

        <FormLabel htmlFor="password_confirmation">Repite Password</FormLabel>
        <FormInput 
            id="password_confirmation"
            type="password"
            placeholder="Repite Password"
            {...register('passwordConfirmation')}
        />
        {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}


        <FormSubmit value='Registrarme'  />


    </Form>
  )
}

