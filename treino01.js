function contador(palavra) {
    let iniciador = 0
    for (let i = 0; i < palavra.length; i ++) {
        iniciador ++ 
    }
    return 'Sua palavra é: ' + palavra + 'e tem: ' + iniciador + ' letras'
};

console.log(contador('Jeremias'))
