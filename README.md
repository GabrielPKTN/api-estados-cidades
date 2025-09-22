# API de Estados e Cidades do Brasil

Esta API oferece endpoints para consultar dados geográficos do Brasil, incluindo estados, capitais e cidades. Desenvolvida para ser simples e rápida, ela utiliza exclusivamente o método **GET** para todas as consultas.

---

## Endpoints

### 1. Obter um estado pela sigla
Retorna informações detalhadas de um estado, como nome, capital e região, a partir de sua sigla.

* **URL:** `/getEstadoBySigla`
* **Método:** `GET`
* **Parâmetros de consulta:** `sigla` (obrigatório, ex: `SP`)
* **Resposta de sucesso (200 OK):**
    ```json
    {
      "status": true,
      "status_code": 200,
      "development": "Gabriel Lacerda Correia",
      "result": {
        "uf": "SP",
        "descricao": "São Paulo",
        "capital": "São Paulo",
        "regiao": "Sudeste"
      }
    }
    ```

### 2. Obter a capital de um estado pela sigla
Retorna a capital de um estado a partir de sua sigla.

* **URL:** `/getCapitalBySigla`
* **Método:** `GET`
* **Parâmetros de consulta:** `sigla` (obrigatório, ex: `RJ`)
* **Resposta de sucesso (200 OK):**
    ```json
    {
      "status": true,
      "status_code": 200,
      "development": "Gabriel Lacerda Correia",
      "result": {
        "uf": "RJ",
        "descricao": "Rio de Janeiro",
        "capital": "Rio de Janeiro"
      }
    }
    ```

### 3. Obter todos os estados de uma região
Lista todos os estados que pertencem a uma determinada região.

* **URL:** `/getEstadosByRegiao`
* **Método:** `GET`
* **Parâmetros de consulta:** `regiao` (obrigatório, ex: `Sul`)
* **Resposta de sucesso (200 OK):**
    ```json
    {
      "status": true,
      "status_code": 200,
      "development": "Gabriel Lacerda Correia",
      "estados": [
        {
          "sigla": "PR",
          "capital": "Curitiba"
        },
        {
          "sigla": "SC",
          "capital": "Florianópolis"
        },
        {
          "sigla": "RS",
          "capital": "Porto Alegre"
        }
      ]
    }
    ```

### 4. Verificar as capitais do país
Retorna informações sobre as cidades que já foram capitais do Brasil, incluindo a atual.

* **URL:** `/getVerifyCapitaisDoPais`
* **Método:** `GET`
* **Parâmetros de consulta:** Nenhum
* **Resposta de sucesso (200 OK):**
    ```json
    {
      "status": true,
      "status_code": 200,
      "development": "Gabriel Lacerda Correia",
      "capitais": [
        {
          "capital_atual": true,
          "uf": "DF",
          "descricao": "Distrito Federal",
          "capital": "Brasília",
          "regiao": "Centro-Oeste",
          "capital_pais_ano_inicio": 1960,
          "capital_pais_ano_fim": null
        },
        {
          "capital_atual": false,
          "uf": "RJ",
          "descricao": "Rio de Janeiro",
          "capital": "Rio de Janeiro",
          "regiao": "Sudeste",
          "capital_pais_ano_inicio": 1763,
          "capital_pais_ano_fim": 1960
        },
        ...
      ]
    }
    ```
    > **Nota:** A API retorna todas as capitais históricas. O exemplo acima foi simplificado.

### 5. Obter cidades de um estado pela sigla
Retorna uma lista completa das cidades de um estado específico, incluindo a contagem total.

* **URL:** `/getCidadesBySigla`
* **Método:** `GET`
* **Parâmetros de consulta:** `sigla` (obrigatório, ex: `MG`)
* **Resposta de sucesso (200 OK):**
    ```json
    {
      "status": true,
      "status_code": 200,
      "development": "Gabriel Lacerda Correia",
      "uf": "MG",
      "descricao": "Minas Gerais",
      "quantidade_cidades": 853,
      "cidades": [
        "Abaeté",
        "Abre Campo",
        "Acaiaca",
        ...
      ]
    }
    ```

### 6. Obter todos os estados
Retorna uma lista de todas as siglas de estados do Brasil e a quantidade total.

* **URL:** `/getAllEstados`
* **Método:** `GET`
* **Parâmetros de consulta:** Nenhum
* **Resposta de sucesso (200 OK):**
    ```json
    {
      "status_code": 200,
      "development": "Gabriel Lacerda Correia",
      "uf": [
        "AC",
        "AL",
        "AM",
        "AP",
        ...
      ],
      "quantidade": 27
    }
    ```

---

## Respostas de Erro


    ```json
    {
      "status": false,
      "status_code": 500,
      "development": "Gabriel Lacerda Correia"
    }
    ```
    
---
