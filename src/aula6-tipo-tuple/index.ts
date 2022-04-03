const dadosCliente1: [number, string] = [1, 'Filipi']
const dadosCliente2: [number, string, string] = [1, 'Filipi', 'Yousef']
const dadosCliente3: [number, string, string, string?] = [1, 'Filipi', 'Youssef']
const dadosCliente4: readonly [number, string, ...string[]] = [1, 'Filipi', 'Youssef']

dadosCliente1[0] = 10
dadosCliente1[1] = "Filipi"
/* dadosCliente1[0] = Filipi */ // como o tipo da tupla é number e string, o TS não permite atribui outro valor q n seja number
dadosCliente2[0] = 10;
dadosCliente2[1] = 'Filipi'
dadosCliente2[2] = 'Youssef'

dadosCliente3[3] = 'Oliveira'

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)


dadosCliente1.pop()
/* No typescript é permitido vc alterar o valor das tuplas com mestodos do array como, pop, push e etc...
   para não permitir alterar nada da typla é só declarar a tupla como readonly, pra deixar ela imutável
*/

/* dadosCliente4.pop() <- não é permitido fazer com readonly
   dadosCliente4[2] = 'Filipi' <- não é permitido fazer com readonly
*/