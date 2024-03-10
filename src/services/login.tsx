import { api } from "../api"

export const login = async (email: string): Promise<void> => {
    const data = await api
    
    if(email !== data.email) {
        return alert('Email Inválido')
    }

    alert(`Seja bem vindo(a) ao DIO BANK ${email}`)
}
