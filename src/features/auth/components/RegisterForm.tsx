"use clien"

import { Form, FormImput, FormLabel, FormSubmit } from "@/src/shared/components/forms"

export default function RegisterForm() {
  return (
    <Form >
        <FormLabel htmlFor="nombre">Nombre </FormLabel>
        <FormImput 
            id="name"
            type="text"
            placeholder="Ingresa tu Nombre"
        />
        <FormLabel htmlFor="email">E-mail</FormLabel>
        <FormImput 
            id="email"
            type="email"
            placeholder="Ingresa tu E-mail"
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormImput 
            id="password"
            type="password"
            placeholder="Passwors Min. 8 caracteres"
        />
        <FormLabel htmlFor="password_confirmation">Repite Password</FormLabel>
        <FormImput 
            id="password_confirmation"
            type="password"
            placeholder="Repite Password"
        />

        <FormSubmit value='Registrarme'  />


    </Form>
  )
}
