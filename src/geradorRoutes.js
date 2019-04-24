
module.exports = (router) =>{

    const gerador = require('./controllers/gerador')

    router.group('/gerar', (router) => {
        router.get('/pessoa', gerador.pessoa)  
        router.get('/empresa', gerador.empresa) 
        router.get('/cartao_credito', gerador.cartao_credito)
        router.get('/veiculo', gerador.veiculo)
        router.get('/conta_bancaria', gerador.conta_bancaria)
        router.get('/renavam', gerador.renavam)
        router.get('/cpf', gerador.cpf)
        router.get('/cnpj', gerador.cnpj)
        router.get('/ie', gerador.ie)
        router.get('/cnh', gerador.cnh)
    })
}