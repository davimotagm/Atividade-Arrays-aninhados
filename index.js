let higiene = ["papel higiênico", 'Pasta de Dente', 'Escova de Dente', 'Lenço', 'Desodorante'];
let alimentacao = ['Pão', 'Biscoito', 'Suco', 'Refri', 'Maçã'];
let farmacia = ['Faixa', 'Remédio', 'Álcool', 'Bandaid', 'Tala'];
let lazer = ['Rede', 'Livro', 'Jogo', 'Instrumento', 'Brincadeira'];
let caixaDeSuprimentos = [[higiene], [alimentacao], [farmacia], [lazer]];

function verificacaoDeItens() {
    if (caixaDeSuprimentos.length === 4) {
        if (higiene.length === 5) {
            if (alimentacao.length === 5) {
                if (farmacia.length === 5) {
                    if (lazer.length === 5) {
                        console.log('Podemos ir acampar')
                    } else if (lazer.length < 5) {
                        console.log('Precisamos de mais itens desta seção')
                    } else {
                        console.log('Tem itens demais, não precisamos de tantos')
                    }
                } else if (farmacia.length < 5) {
                    console.log('Precisamos de mais itens desta seção')
                } else {
                    console.log('Tem itens demais, não precisamos de tantos')
                }
            } else if (alimentacao.length < 5) {
                console.log('Precisamos de mais itens desta seção')
            } else {
                console.log('Tem itens demais, não precisamos de tantos')
            }
        } else if (higiene.length < 5) {
            console.log('Precisamos de mais itens desta seção')
        } else {
            console.log('Tem itens demais, não precisamos de tantos')
        }
    } else if (caixaDeSuprimentos.length < 4) {
        console.log('Algum amigo ainda não retornou com os itens')
    } else {
        console.log('Acho que temos um intruso')
    }
}

verificacaoDeItens();