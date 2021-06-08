<h1 align="center">
Telzir - FaleMais
</h1>
<p align="center">
Desafio/Teste prestado como processo seletivo para a <a href="https://vizir.com.br/"> Vizir - Software Studio</a><br/>
Essa aplicação/sistema foi feita com <a href="https://pt-br.reactjs.org/">ReactJS</a> e simula dados de uma API com o <a href="https://miragejs.com/">MirajeJS</a>

<p align="center">
  <a href="#começando">Começando</a> &#xa0; | &#xa0; 
  <a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#notas-e-avisos">Notas e Avisos</a>
</p>

<h1 align="center">
 <img alt="Telzir" src="https://raw.githubusercontent.com/NaySoares/faleMais/main/.github/faleMais.png?token=AEDIWXGRVIAOAEWUAFKU37TAX3PH2" width = "600px" />
 </h1>

## Começando

```bash
# Clone this repository // Clone esse repositório
$ git clone https://github.com/NaySoares/faleMais.git

# Go into the repository // Entre no repositório/diretório
$ cd faleMais

# Install dependencies // Instale as dependências
$ yarn

# Run the app // Rode o app
$ yarn start

# Nota: O app usará a porta 3000
```

## Tecnologias 

Essas são algumas das tecnologias e bibliotecas usadas nesse projeto:

- ReactJS
- TypeScript
- MirageJS
- Styled Components
- Formik
- Axios

## Notas e Avisos

01 - A tabela de comparação custo plano X custo fixo já vem com um valor setado de exemplo e armazena todos os outros valores que são adicionados através do formulário.<br> 
02 - A tabela de custo por minuto entre os DDDs, fornecida no documento do desafio/teste, foi alterada para que fornecesse valores para todas as combinações de DDDs, os valores originalmente dados não foram alterados:

<strong>Nova Tabela Base</strong>


-|11|16|17|18|
|--|--|--|--|--|
11|0,50|1,90|1,70|0,90 
16|2,90|0,50|1,20|0,70
17|2,70|2,00|0,50|1,00
18|1,90|2,00|1,20|0,50

<p>Linha = Origem | Coluna = Destino </p>
<br>
03 - Devido a minha inexperiência com testes acabei não conseguindo completar esse requisito do desafio/teste, apesar de ter pesquisado e lido a documentação, a maior dificuldade, pelo que percebi, está no fato da aplicação utilizar o styled components substituindo os componentes/tags originais, e assim fazendo com que o Jest e React-Testing-Library não consigam enxergar-los, pelo menos nesse período de desenvolvimento, peço desculpas por isso e espero que considere o resto do desafio/teste entregado.
