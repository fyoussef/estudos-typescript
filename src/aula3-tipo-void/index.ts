function semRetorno(...args: string[]): void {
    console.log(args.join(' '))
}

semRetorno('Filipi', 'Youssef')

const pessoa2 = {
    nome: 'Filipi',
    sobrenome: 'Youssef',

    nomeCompleto(): void {
        console.log(this.nome + ' ' + this.sobrenome)
    }
}

pessoa2.nomeCompleto()