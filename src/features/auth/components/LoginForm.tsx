"use client"

import { Form , FormImput, FormLabel, FormSubmit } from "@/components/forms"

export default function LoginForm() {
  return (
    <Form >

      <FormLabel htmlFor="email"> E-mail</FormLabel>
      <FormImput
        type="email"
        id="email"
        placeholder="Ingresa tu E-mail"

       />
       <FormLabel htmlFor="password">Password</FormLabel>
      <FormImput type="email"
      id="password"
      placeholder="Ingresa Tu Password"
       />
       <FormSubmit 
        value="Iniciar Sesion"
       />
    </Form>

  )
}


