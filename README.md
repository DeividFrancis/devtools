# API de ferramentas para desenvolvimento

API restfull para facilitar a geração de dados ficticios

# Funções suportas pela API

- GERADORES

- [ ] Gerador de Certidões
- [x] Gerador de CNH
- [x] Gerador de Conta Bancária
- [x] Gerador de CPF
- [ ] Gerador de Nicks
- [ ] Gerador de Nomes
- [ ] Gerador de Números Aleatórios
- [ ] Gerador de PIS/PASEP
- [x] Gerador de RENAVAM
- [x] Gerador de Veículos
- [ ] Gerador Placa de Veículos
- [x] Gerador de CNPJ
- [x] Gerador de CEP
- [x] Gerador de RG
- [x] Gerador Inscrição Estadual
- [ ] Gerador Título de Eleitor
- [x] Gerador Cartão de Crédito
- [x] Gerador de Pessoas
- [x] Gerador de Empresas
- [ ] Gerador de Imagem
- [ ] Gerador de Lorem Ipsum
- [ ] Gerador de Senha

- SEO

- [ ] Gerador Meta Tags

- VALIDADORES

- [x] Validador Cartão Crédito
- [x] Validador Conta Bancária
- [x] Validador de Certidões
- [x] Validador de CNH
- [x] Validador de CNPJ
- [x] Validador de CPF
- [x] Validador de PIS/PASEP
- [x] Validador de RENAVAM
- [x] Validador de RG
- [x] Validador Título de Eleitor
- [x] Validar Inscrição Estadual

- UTILIDADES

- [x] Consulta Número do Banco

- FUNÇÕES STRING

- [ ] Colocar em Ordem Alfabética
- [ ] Contador de Caracteres
- [ ] Contador de Ocorrência de Palavra em um Texto
- [ ] Converter Texto to HTML
- [ ] Cortar Textos
- [ ] Dividir String
- [ ] Informações de Caracter
- [ ] Inverter Texto
- [ ] Letras Personalizadas
- [ ] Maiúsculas e Minúsculas
- [ ] Número por Extenso
- [ ] Remover Acentos do Texto
- [ ] Remover ou Trocar \n

- REDE E INTERNET

- [ ] Meu IP
- [ ] Meu Navegador
- [ ] Meu Sistema Operacional
- [ ] ENCODES E DECODERS
- [ ] Base64 Decodificar e Codificar
- [ ] Calcular CRC32
- [ ] Codificar MD5
- [ ] Codificar SHA1
- [ ] Gerador de QRCode
- [ ] Tradutor de Código Binário
- [ ] URL Encode/Decode
- [ ] TABELAS E PADRÕES
- [ ] Color Picker
- [ ] Tabela ASCII
- [ ] Colocar em Ordem Alfabética

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