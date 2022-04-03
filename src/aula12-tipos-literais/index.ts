let w = 10 /* eslint-disable-line */
w = 0b1010;

const z = 10
const a = 100 /* eslint-disable-line */

const pessoa3 = {
    nome: 'Filipi' as const,
    sobrenome: 'Youssef'
}

/* pessoa3.nome = 'Thiago'  <- Não poder fazer isso pois ele assumiu o tipo atribuido como constante */

pessoa3.sobrenome = 'Oliveira'

function escolhaCor2(cor: 'Vermelho' | 'Azul' | 'Verde'): string {
    return cor
}

console.log(escolhaCor2("Verde"))