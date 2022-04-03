// Array<T> - T[] <- TIpo genêrico

function mutiplicaArgs(...args: Array<number>):number {
    return args.reduce((acumulador, valor) => acumulador * valor, 1)
}

const result = mutiplicaArgs(1, 2, 3)

console.log(result)

function concatenString(...args: string[]): string {
    return args.reduce((acumulador, valor) => acumulador + valor)
}

const concatenacao = concatenString('Primeira', 'Segunda')

console.log(concatenacao)

function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase())
}

const upper = toUpperCase('primeira', 'segunda')

console.log(upper)