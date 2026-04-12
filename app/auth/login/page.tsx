import LoginForm from "@/src/features/auth/components/LoginForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: generatePageTitle('Iniciar Sesion')
}

export default function LoginPage() {
  return (
    <>
      <Heading  >Iniciar Sesion</Heading>
    
      <LoginForm />
    </>
  )
}