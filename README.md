# API de ferramentas para desenvolvimento

API restfull para facilitar a geração de dados ficticios

## Intalação

Para rodar localmente e necessario node js  11 <

- Download

```sh
git clone https://github.com/DeividFrancis/devtools.git
```

- Instala as dependencias

```sh
cd /src
npm install
```

## Dockerfile

Temos uma forma mais simples de iniciar o projeto atraves do docker

- Build

```sh
docker build -t deividoliver/devtools .
```

- Run

```sh
docker run --rm -p 3000:3000 deividoliver/devtools
```

- Docker composer

Utilize o docker composer para iniciar a api no modo desenvolvedor
onde sera iniciado com o nodemon e as alterações no código sera aplicada em tempo real.

```sh
docker-compose up
```

## Postman

Importe o json do postman para auxiliar nos endpoints disponiveis

### NOTA

Esta api e apenas um wrapper da ferramenta online https://www.4devs.com.br/
assim todos os filtros aplicados pela dashboard pode ser adicionado a requisição
atraves de querys params