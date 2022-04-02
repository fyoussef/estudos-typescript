/* eslint-disable */

/* OBS ESSAS ANOTAÇÕES SÃO SOMENTE PARA FICAR POR DENTRO DOS TIPOS DO TYPESCRIPT
NORMALMENTE ESSES TIPOS SÃO INFERIDOS AUTOMATICAMENTE */

/* TPYE ANNOTATIONS */
// Tipos básicos
let nome: string = "Filipi" // "", '', `` <- Strings
let idade: number = 30 // 10, 1.57, -5.55, 0xf, 0b1, 0o77
let adulto: boolean = true // true ou false
let simbolo: symbol = Symbol('qualquer-symbol') // symbol
// let big: bigint = 10n // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3]
let arrayDeStrings: Array<string> = ['a', 'b', 'c']
let arrayDeStrings2: string[] = ['a', 'b', 'c']

// Objetos
// OBS: adulto é opcional já q foi declarado com "?"
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: "Filipi",
    idade: 21,
    adulto: true
}

// Funções
function soma(x: number, y:number): number{
    return x + y
}

const soma2: (x:number, y:number) => number = (x, y) => x + y