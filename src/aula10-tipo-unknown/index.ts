let x: unknown;

x = 100
x = 'Filipi'
x = 900
x = 'Youssef'
x = '10'

const y = 10

/* No tipo unknown não é permitido fazer isso -> no tipo any sim */
// console.log(y + x)

/* Só envolver uma checagem antes ele não irá reclamar */
if (typeof x === 'number') console.log(x + y)

/* Ou seja sempre q for o tipo unknown vc terá de fazer uma checagem para poder realizar uma operação */