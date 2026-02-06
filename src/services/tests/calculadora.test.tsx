import { soma } from "../calculadora/soma";
import { subtrai } from "../calculadora/subtrai";
import { multiplica } from "../calculadora/multiplica";

describe('soma', () => {
    it('deve retornar 2 quando 1 + 1', () => {
        expect(soma(1, 1)).toBe(2)
    })
})

describe('subtrai', () => {
    it('deve retornar 0 quando 1 - 1', () => {
        expect(subtrai(1, 1)).toBe(0)
    })
})

describe('multiplica', () => {
    it('deve retornar 1 quando 1 * 1', () => {
        expect(multiplica(1, 1)).toBe(1)
    })

    it('deve retornar 2 quando 1 * 2', () => {
        expect(multiplica(1, 2)).toBe(2)
    })
})
