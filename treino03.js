let lista = ['Diego', 31, 'Renata', -64, 10, -50, 'batatinha' ];
// let lista = []

function validaLista(buscaNaLista) {

    let nomes = [], numPositivos = [], numNegativos = [];
    if (buscaNaLista.length == 0) {
        return '[ERRO] Lista vazia ou inexistente!'
    } else { 
        for (let i = 0; i < buscaNaLista.length; i ++) {
           
            if (buscaNaLista[i] < 0) {
                numNegativos.push(buscaNaLista[i])
            } else if (buscaNaLista[i] > 0) {
                numPositivos.push(buscaNaLista[i])
            } else {
                nomes.push(buscaNaLista[i])
            }  
        }
    }     
       return `${ '[' + nomes + ']' + '['+ numPositivos +']' + '['+ numNegativos + ']' }`
}

console.log(validaLista(lista))