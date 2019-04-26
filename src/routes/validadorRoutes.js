
module.exports = (router) =>{

    const validador = require('../controllers/validador')

    router.group('/validar', (router) => {
        router.get('/cartao_credito/:cc', validador.cartao_credito)  
        router.get('/conta_bancaria', validador.conta_bancaria)  
        router.get('/certidao/:certidao', validador.certidao)  
        router.get('/cnh/:cnh', validador.cnh)  
        router.get('/cnpj/:cnpj', validador.cnpj)  
        router.get('/cpf/:cpf', validador.cpf)  
        router.get('/pis/:pis', validador.pis)  
        router.get('/renavam/:renavam', validador.renavam)  
        router.get('/rg/:rg', validador.rg)  
        router.get('/titulo_eleitor/:titulo_eleitor', validador.titulo_eleitor)  
        router.get('/ie/:ie', validador.ie)  
    })
}