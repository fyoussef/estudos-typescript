const body1 = document.querySelector('body')

if (body1) body1.style.background = 'red'

// NOT NULL assertion -> Não recomendado
/* const body2 = document.querySelector('body')!
body2.style.background = 'blue' */

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'blue'

// HTMLElement
const input = document.querySelector('input') as HTMLInputElement
input.value = 'Qualquer'
input.focus()