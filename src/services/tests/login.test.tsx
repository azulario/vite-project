import { login } from "../calculadora/login"

describe('login', () => {

    const mockAlert = jest.fn()
    globalThis.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem-vindo!')
    })
})
