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
const dados = require('./modulo/funcoes.js')

// Retorna a porta do servidor atual ou colocamos uma porta local.
const PORT = process.PORT || 8000

// Criando uma instancia de uma classe do express
const  app = express()

// Configuração de permissões
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')    // Servidor de origem
    response.header('Access-Control-Allow-Methods', 'GET') // Verbos permitidos
    
    // Carrega as configurações no CORS da API
    app.use(cors())
    next() // Próximo, carregar os próximos EndPoints 
})

// Request  -> chegada de dados na API
// Response -> retorno de dados na API

// EndPoints
app.get('/v1/estados/', (request, response) => {
    
    // Pesquisa na função de estados
    let estados = dados.getAllEstados()
    
    // Retorna o status code e JSON
    response.status(estados.status_code).json(estados)
    
})

app.get('/v1/estados/:uf', (request, response) => {
    
    let estado = dados.getEstadoBySigla(request.params.uf)

    response.status(estado.status_code).json(estado)

})

app.get('/v1/capital/:uf', (request, response) => {

    let capital = dados.getCapitalBySigla(request.params.uf)

    response.status(capital.status_code).json(capital)
    
})




// Start na API
app.listen(PORT, () => {
    console.log('Está vivo...!!!')
})