/********************************************************************
 * Objetivo: Arquivo de funções para gerenciar a API de estados e 
 * cidades
 * Data: 15/09/2025
 * Autor: Gabriel Lacerda Correia
 * Versão: 1.0
*********************************************************************/

const dados = require('./estados_cidades.js')

const MESSAGE_ERROR = {
    "status": false,
    "status_code": 500,
    "development": "Gabriel Lacerda Correia"
} 

// Retorna todos os estados
const getAllEstados = () => {
    
    // Variável de base para cabeçalho da API
    let message = {
        status: true,
        status_code: 200,
        development: "Gabriel Lacerda Correia",
        uf:[
            
        ]
    }

    // Loop
    dados.listaDeEstados.estados.forEach((item) => {
        message.uf.push(item.sigla)
    })

    message.quantidade = message.uf.length

    // Adicionando elemento novo no JSON
    result = message.uf.length > 0 ? message : MESSAGE_ERROR

    // Método que remove atributos de um objeto
    delete message.status

    return result
}

// Retorna um estado pela sigla
const getEstadoBySigla = (sigla) => {

    sigla = sigla.toUpperCase()

    let message = {
        status: true,
        status_code: 200,
        development: "Gabriel Lacerda Correia",
        result: {

        }
    }

    dados.listaDeEstados.estados.forEach((item) => {
    
        if (item.sigla == sigla) {
    
            message.result.uf = item.sigla
            message.result.descricao = item.nome
            message.result.capital = item.capital
            message.result.regiao = item.regiao
    
        }
    
    })

    result = dados.listaDeEstados.estados
    .find(estados => estados.sigla === sigla) ? message : MESSAGE_ERROR

    return result
}

// Retorna informações da capital referente a sigla do estado
const getCapitalBySigla = (sigla) => {

    sigla = sigla.toUpperCase()

    let message = {
        status: true,
        status_code: 200,
        development: "Gabriel Lacerda Correia",
        result: {

        }
    }

    dados.listaDeEstados.estados.forEach((item) => {
    
        if (item.sigla == sigla) {
    
            message.result.uf = item.sigla
            message.result.descricao = item.nome
            message.result.capital = item.capital
    
        }
    
    })

    result = dados.listaDeEstados.estados
    .find(estados => estados.sigla === sigla) ? message : MESSAGE_ERROR

    return result
}

// Retorna informações dos estados referente a região
const getEstadosByRegiao = (regiao) => {


    let message = {
        status: true,
        status_code: 200,
        development: "Gabriel Lacerda Correia",
        estados: [

        ]
    }

    dados.listaDeEstados.estados.forEach( (item) => {
       
        if(item.regiao == regiao) {
           
            let sigla = item.sigla
            let capital = item.capital

            message.estados.push({ sigla, capital })
        }

    })

    result = dados.listaDeEstados.estados
    .find(estados => estados.regiao == regiao) ? message : MESSAGE_ERROR


    return result
}

// Retorna informações dos estados que foram a capital do país, e qual é
// atualmente
const getVerifyCapitaisDoPais = () => {

    let message = {
        status: true,
        status_code: 200,
        development: "Gabriel Lacerda Correia",
        capitais: [

        ]
    }

    dados.listaDeEstados.estados.forEach( (item) => {

        if (item.capital_pais) {

            let capital_atual = item.capital_pais.capital
            let uf = item.sigla
            let descricao = item.nome
            let capital = item.capital
            let regiao = item.regiao
            let capital_pais_ano_inicio = item.capital_pais.ano_inicio
            let capital_pais_ano_fim = item.capital_pais.ano_fim


            message.capitais.push(
                {
                    capital_atual,
                    uf,
                    descricao,
                    capital,
                    regiao,
                    capital_pais_ano_inicio,
                    capital_pais_ano_fim

                })
        }

    })

    console.log(message)
}

// Retorna uma lista de cidades do estado pela sigla
const getCidadesBySigla = (sigla) => {
    
    sigla = sigla.toUpperCase()

    let message = {
        status: true,
        status_code: 200,
        development: "Gabriel Lacerda Correia",
        
    }

    dados.listaDeEstados.estados.forEach((item) => {

        if (sigla == item.sigla) {

            let cidades = []
            let qtd_cidades = 0

            item.cidades.forEach((cidade) => {

                cidades.push(cidade.nome)
                qtd_cidades += 1

            })

            message.uf = item.sigla
            message.descricao = item.nome
            message.quantidade_cidades = qtd_cidades
            message.cidades = cidades
           
        }

    })
    
    result = dados.listaDeEstados.estados
    .find(estados => estados.sigla === sigla) ? message : MESSAGE_ERROR

    return result

}

// getAllEstados()
// console.log(getEstadoBySigla('po'))
// console.log(getCapitalBySigla('po'))
// console.log(getEstadosByRegiao('Sudeste'))
// console.log(getVerifyCapitaisDoPais())
// console.log(getCidadesBySigla('ac'))

module.exports = {
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla,
    getEstadosByRegiao,
    getVerifyCapitaisDoPais,
    getCidadesBySigla
}