function lista() {
    const usuariosCrescente = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
    const frutasDecrescente = [ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja']
    const listaNova = []

    
    for (let i = 0; i < usuariosCrescente.length; i++) {
        listaNova.push(usuariosCrescente[i] + ' - ' + frutasDecrescente[frutasDecrescente.length - 1 - i])
    }

        console.log(listaNova)

}
    lista()