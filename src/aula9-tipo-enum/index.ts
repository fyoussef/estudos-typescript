enum Cores {
    VERMELHO, // 0
    AZUL, // 1
    AMARELO // 2
}

console.log(Cores)
console.log(Cores.VERMELHO) // 0
console.log(Cores[0]) // VERMELHO

enum Cores2 {
    VERMELHO = 10, // 10
    AZUL = 20, // 20
    AMARELO = 30 // 30
}

console.log(Cores2.VERMELHO) // 10
console.log(Cores[1]) // 20

enum Cores {
    ROXO = 'ROXO',
    VERDE = 200,
    ROSA = 201
}

/* se fizer um enum utilizando o mesmo nome ele irá fazer um "merge" dos enums */

console.log(Cores)

/* Exemplo onde seria um boa escolha para utilizar o enum  */
function escolhaCor(cor: Cores): void {
    console.log(Cores[cor])
}

escolhaCor(200)

/* O problemea disso é que no type script ele permite vc passar até argumentos que não existem no enum e não irá impedir vc de fazer isso
    Ex: escolhaCor('AZUL CIANO') <- Não irá te impedir de fazer isso retorna undefined
*/