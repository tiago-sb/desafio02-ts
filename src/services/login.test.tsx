import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas para o usuário', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Seja bem-vindo(a) ao DIO BANK!')
    })
})