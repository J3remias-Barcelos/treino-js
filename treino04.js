//* Registro de lista */
let list = ['Diego', 31, 'Renata', -64, 10, -50, 'Batatinha', 'Jeremias', 100, -80, 'coisa', 2132, 'casa']

// Função que solicita oque o usuario quer ( ? , ?)
transform(list, 100)


// Função que busca na lista a palavra ou número... 
function transform(listaInterna, busca) {
    if (listaInterna.indexOf(busca) === -1) {
        console.log('Desculpe, o elemento ' + busca + ' Não foi encontrado')
    } else if (listaInterna.indexOf(busca) > -1) {
        console.log('Encontramos o dado ' + busca + ' na posição ' + listaInterna.indexOf(busca))
    }
}