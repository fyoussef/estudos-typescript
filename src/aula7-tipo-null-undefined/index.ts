export function createPerson(firstName: string, lastName?: string): {
    firstName: string,
    lastName?: string
} {
    return {
        firstName,
        lastName
    }
}

/* Como no caso dessa função FACTORY ter um parametro opcional possibilida o parâmetro lastName ser uma string || undefined */

export function squareOf(x: any) {
    if (typeof x === 'number') return x * x
    return null
}

/* Como no caso desta função onde o retorno poder ser qualquer coisa como, ou o quadrado do numero (se o argumento passado for do type number ou pode ser null caso o argumento passasdo não seja number) o typescript vai inferir o tipo do retorno 

*/

/* O problema destas funções é que vc terá que ter o cuidado de chegar o tipo do retorno destas funções */

const squareOfTwoNUmber = squareOf(2)

if(typeof squareOfTwoNUmber === null){
    console.log('Erro')
} else {
    console.log(squareOfTwoNUmber)
}