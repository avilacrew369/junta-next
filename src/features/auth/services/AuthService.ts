// se comunica con AuthRepository

import { auth } from "@/src/lib/auth";
import { SignUpInput } from "../schemas/authSchema";

class AuthService {
    async register(credentials: SignUpInput) {
        const { name, email, password} = credentials

    // revisar si el usuario existe

    // validacion de negocio

    // manejar el registro
    await auth.api.signUpEmail({
        body :{
            name,
            email,
            password
        }
    })
    
    }

}

export const authService = new AuthService();