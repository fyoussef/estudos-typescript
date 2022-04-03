/* É um tipo que especifica que nunca irá retornar nada
   Comum ser usada em funções para gerar erro
*/

function criaErro(): never {
    throw new Error('Erro qualquer')
}

criaErro()