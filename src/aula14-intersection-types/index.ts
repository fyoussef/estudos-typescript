type TemNome = {nome: string}
type TemSobrenome = {sobrenome: string}
type TemIdade = {idade: number}
type Pessoa = TemNome & TemSobrenome & TemIdade // AND

/* type AB = 'A' | 'B'
type AC = 'A' | 'C' */
// type Intersececao = AB & AC

const pessoa4: Pessoa = {
    nome: 'Filipi',
    sobrenome: 'Youssef',
    idade: 21
}

console.log(pessoa4)