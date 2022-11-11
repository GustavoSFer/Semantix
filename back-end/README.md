# API

### Parte do back-end

## TECNOLOGIAS UTILIZADOS
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Dotenv</li>
  <li>MongoDB</li>
  <li>Mocha | Chai | Sinon.js </li>
</ul>

## Utilizando o projeto com o Docker

1. Crie a imagem no docker
  * docker build -t <'NomeDaImagem'> <'LocalOndeestaODockerFile'>
  * Exemplo
``` docker build -t msb . ```
2. Crie o container no docker
  * docker container run -p 3001:3001 <'NomeDaImagem'>
  * Exemplo
``` docker container run -p 3001:3001 msb ```


### Conexão com o Banco:
Para os testes rodarem corretamente, na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo ficará desta forma:

```sh
DB_URI=bancoDeDados
PORT=3001
```

**⚠️ IMPORTANTE! ⚠️**

Crie um arquivo na raiz do projeto chamado `secret.txt`, e informe uma senha, para que seja usado no token.

## Utilizando o projeto com o Docker

1. Crie a imagem no docker
  * docker build -t <'NomeDaImagem'> <'LocalOndeEstaODockerFile'>
  * Exemplo
``` docker build -t semantix . ```
2. Crie o container no docker
  * docker container run -p 3001:3001 <'NomeDaImagem'>
  * Exemplo
``` docker container run -p 3001:3001 semantix ```