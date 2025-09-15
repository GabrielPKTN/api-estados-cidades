/**********************************************************************
 * Objetivo: EndPoints referente a API de estados de cidades.
 * Data: 15/09/2025
 * Autor: Gabriel Lacerda Correia
 * Versão: 1.0
 * 
 * Observações: Instalação do Express, Cors, Body-Parser
 * npm install      express     --save
 * npm cors         express     --save
 * npm install    body-parser   --save
 **********************************************************************/


// Importando dependencias da API
const express    = require('express')        // Responsável pela API
const cors       = require('cors')           // Responsável pelas permissões da API (APP)
const bodyParser = require('body-parser')    // Responsável por gerenciar a chegada dos dados da API com o front

// Retorna a porta do servidor atual ou colocamos uma porta local.
const PORT = process.PORT || 8000

// Criando uma instancia de uma classe do express
const  APP = express()

// Configuração de permissões
APP.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')    // Servidor de origem
    response.header('Access-Control-Allow-Methods', 'GET') // Verbos permitidos
    
    // Carrega as configurações no CORS da API
    APP.use(cors())
    next() // Próximo, carregar os próximos EndPoints 
})

// EndPoints
APP.get('/v1/estados/', (request, response) => {
    
})