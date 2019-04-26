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

    if (key !== null)
        body['txt_' + key] = req.params[key]

    if (req.query.acao == 'undefined')
        res.json({ erro: 'paramentro acao é um campo obrigatorio :)' })

    return axios.post(url, toUrlEncoded(body), config)
}

const validador = async (method, key, req, res) => {
    const result = await request(method, key, req, res)
    let json = {}

    json.valido = result.data.includes('Verdadeiro') ? true : false

    if (key !== null) {
        json.valor = req.params[key]
        json.chave = key
    }

    Object.assign(json, req.query)

    res.json(json)
}

module.exports = {
    cartao_credito: (req, res) => validador('validar_cc', 'cc', req, res),
    conta_bancaria: (req, res) => validador('validar_conta_bancaria', null, req, res),
    certidao: (req, res) => validador('validar_certidao', 'certidao', req, res),
    cnh: (req, res) => validador('validar_cnh', 'cnh', req, res),
    cnpj: (req, res) => validador('validar_cnpj', 'cnpj', req, res),
    cpf: (req, res) => validador('validar_cpf', 'cpf', req, res),
    pis: (req, res) => validador('validar_pis', 'pis', req, res),
    renavam: (req, res) => validador('validar_renavam', 'renavam', req, res),
    rg: (req, res) => validador('validar_rg', 'rg', req, res),
    titulo_eleitor: (req, res) => validador('validar_titulo_eleitor', 'titulo_eleitor', req, res),
    ie: (req, res) => validador('validar_ie', 'ie', req, res),
}