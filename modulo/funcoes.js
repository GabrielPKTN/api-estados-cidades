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
    
    let message = {
        status: true,
        status_code: 200,
        development: "Gabriel Lacerda Correia",
        uf:[
            // Estados
        ]
    }

    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })

    message.quantidade = message.uf.length

    result = message.uf.length > 0 ? message : MESSAGE_ERROR

    return result
}

// Retorna um estado pela sigla
const getEstadoBySigla = (sigla) => {



}

// Retorna informações da capital referente a sigla do estado
const getCapitalBySigla = (sigla) => {

}

// Retorna informações dos estados referente a região
const getEstadosByRegiao = (regiao) => {

}

// Retorna informações dos estados que foram a capital do país, e qual é
// atualmente
const getVerifyCapitaisDoPais = () => {

}

// Retorna uma lista de cidades do estado pela sigla
const getCidadesBySigla = (sigla) => {

}

// getAllEstados()
getEstadoBySigla('SP')

module.exports = {
    getAllEstados
}