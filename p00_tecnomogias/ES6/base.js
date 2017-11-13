let aDatos = [{precio : 22}, {precio : 34}, {precio : 57} ]
if (true) {
const nIva = 1.22
let precioFinal
aDatos.forEach(  elem => {
    precioFinal = elem.precio * nIva
    console.log(
        `
        El precio final es:
        ${precioFinal}`
    )
})
console.log(nIva)
}
