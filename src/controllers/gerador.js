const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.4devs.com.br/ferramentas_online.php'
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const toUrlEncoded = obj => Object.keys(obj).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&');


const request = (method, req, res) => {
    console.log(method)
    const body = req.query

    if (method != null)
        body['acao'] = method
    if (req.query.acao == 'undefined')
        res.json({ erro: 'paramentro acao é um campo obrigatorio :)' })

    return axios.post(url, toUrlEncoded(body), config)
}

const geradorNode = async (method, key, req, res) => {
    const result = await request(method, req, res)
    let json = {}
    json[key] = result.data
    res.json(json)
}
const gerador = async (method, req, res) => {
    const result = await request(method, req, res)
    const content_type = result.headers['content-type']
    try {
        let json
        if (content_type.includes('json'))
            json = await json2json(result)
        else if (content_type.includes('html'))
            json = await html2json(result)
        else
            res.json({ erro: 'Não sei como fazer aqui não content type ' + content_type })

        res.json(json)
    } catch (err) {
        res.send(err)
    }
}

// Caso a complexidado do metodo almente esta preparado com promise
const json2json = async result => {
    return new Promise((resolve, reject) => {
        resolve(result.data)
    })
}

const html2json = async result => {
    return new Promise((resolve, reject) => {
        try {
            const $ = cheerio.load(result.data)
            const json = {}
            $('[id]').each((i, el) => {
                const $el = $(el)
                json[$el.attr('id')] = getValue($el)
            })
            resolve(json)
        } catch (error) {
            reject(error)
        }
    })
}

const getValue = (el) => {
    switch (el[0].name) {
        case "div":
            return el.text()
        case "input":
            return el.val()
    }
}

module.exports = {
    pessoa: (req, res) => gerador('gerar_pessoa', req, res),
    empresa: (req, res) => gerador('gerar_empresa', req, res),
    cartao_credito: (req, res) => gerador('gerar_cc', req, res),
    veiculo: (req, res) => gerador('gerar_veiculo', req, res),
    conta_bancaria: (req, res) => gerador('gerar_conta_bancaria', req, res),
    renavam: (req, res) => geradorNode('gerar_renavam', 'renavam', req, res),
    cpf: (req, res) => geradorNode('gerar_cpf', 'cpf', req, res),
    cnpj: (req, res) => geradorNode('gerar_cnpj', 'cnpj', req, res),
    rg: (req, res) => geradorNode('gerar_rg', 'rg', req, res),
    ie: (req, res) => geradorNode('gerar_ie', 'ie', req, res),
    cnh: (req, res) => geradorNode('gerar_cnh', 'cnh', req, res),
}