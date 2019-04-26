
module.exports = (router) =>{

    const validador = require('../controllers/validador')

    router.group('/validar', (router) => {
        router.get('/cpf/:cpf', validador.cpf)  
        router.get('/cnpj/:cnpj', validador.cnpj)  
        router.get('/ie/:ie', validador.ie)  
    })
}