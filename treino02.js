function tabuada(numero) {
    let multi = 0;
    for (let i = 0; i <= 10; i ++) {
        // multi = numero * i;
        console.log(numero + ' X ' +  i + ' = ' + numero*i)
    }
    // return 'Sua tabuada é: ' + multi
    // O Return ele só tras um linha, agora o console tras meu FOR inteiro
}
tabuada(10)