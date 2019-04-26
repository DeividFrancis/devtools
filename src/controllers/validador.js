const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.4devs.com.br/ferramentas_online.php'
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');


const request = (method, key, req, res) => {
    console.log(method)
    const body = req.query

    if (method != null)
        body['acao'] = method
    
    body['txt_' + key] = req.params[key]

    if (req.query.acao == 'undefined')
        res.json({ erro: 'paramentro acao é um campo obrigatorio :)' })

    return axios.post(url, toUrlEncoded(body), config)
}

const validador = async (method, key, req, res) => {
    const result = await request(method, key, req, res)
    let json = {}
    
    json.valido = result.data.includes('Verdadeiro')? true : false
    json.valor = req.params[key]
    json.chave = key

    res.json(json)
}

module.exports = {
    cpf: (req, res) => validador('validar_cpf', 'cpf', req, res),
    cnpj: (req, res) => validador('validar_cnpj', 'cnpj', req, res),
    ie: (req, res) => validador('validar_ie', 'ie', req, res),
}