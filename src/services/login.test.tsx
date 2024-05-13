import { login } from "./login"
import { api } from "../api"
import { useContext } from "react"

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        logado: true,
        setLogaado: jest.fn()
    })
}))

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'tiago@gmail.com'
    it('Deve exibir um alert com boas vindas para o usuário', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo(a) ao DIO BANK tiago@gmail.com')
    })
    
    it('Deve exibir um erro', async () => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo(a) ao DIO BANK tiago@gmail.com')
    })
})