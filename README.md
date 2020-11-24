# Simulador de Financiamento

#### Esta aplicação foi desenvolvida especificamente para fins didáticos e mesmo contendo imagens ilustrativas não possui vínculo com nenhuma instituição financeira. 

*Obs.: em caso de erro de cors recomendo criar uma instancia do google chorme sem o cors, basta criar um novo atalho para o chrome adicionando esta tag "--disable-web-security --disable-gpu --user-data-dir=c:/chromeTemp" no final do destino. 


Aplicativo SPA híbrido (compatível com celular, tablet, computador, etc...) para simulação de empréstimo.

Solução para contratação de empréstimos. Permitindo a simulação antes de efetivar a contratação.

### Informações Adicionais
- As simulações de empréstimo possuem um período de validade de 30 dias. 
- Após este período não será possível efetivar a contratação. 
- Somente realizar simulações para cpf e email válido!

### Dados de entrada
- NOME
- CPF
- EMAIL
- VALOR_CONTRATO
- QUANTIDADE_PARCELAS.


# Regras de Negócio:

### Taxa de Juros  
- Sendo valor contrato menor ou igual a R$1.000,00 atribuir 1,8% como percentual de taxa de juros
- se não: atribuir 3%.
- Sendo a quantidade de parcelas maior que 12 parcelas, adicionar 0,5% a taxa de juros.

### Valor da Parcela
- Calcular o valor da parcela conforme: Taxa de juros (R3)
- valorContato*(1+(quantideParcelas*taxajuros))/quantidadeParcelas

### Quantidade Máxima de Parcelas

- Quantidade máxima de parcelas: 24

### Retorno da API:

- Informações do cliente;
- Data da Simulacao;
- Data Validade Simulação;
- Valor Contrato;
- Quantida de Parcelas;
- Valor Parcela;
- Taxa Juros Emprestimo.


### Pré-Requisito: 
Estar com a api "Simulador_Emprestimo_banckAnd" rodando. Você pode baixa-la neste link: https://github.com/infortic/Simulador_Emprestimo_banckAnd, leia o readmin para saber coomo configurar e subir a API. :)

### Parâmetros de Entrada: 
- NOME
- CPF
- EMAIL
- VALOR_CONTRATO
- QUANTIDADE_PARCELAS.

### Parâmetros de Saída:
- Dados do cliente;
- Data da Simulacao;
- Data Validade Simulação;
- Valor Contrato;
- Quantide de Parcelas;
- Valor Parcela;
- Taxa Juros Emprestimo.


### Tela Inicial
![alt text](img/telainicial.png)

### Tela de INPUT
![alt text](img/input.png)

### Tela de OUTPUT
![alt text](img/output.png)

### Tela de ERRO
![alt text](img/erro.png)


## Executando o projeto

### Pré-requisitos
* Node.JS
* Internet (algumas dependências possuem diretórios remotos)

### Passo a passo

1 - Execute a linha de código a baixo para baixar a branch da aplicação: 
`git clone https://github.com/infortic/FrontAndProcessManegemet.git`

2 - Dentro da pasta do sistema execute: 
`npm install`
para baixar as dependências do Node.js

3 - Ainda dentro da pasta da aplicação execute: 
`npx serve`
se tudo ocorreu bem a aplicação estará disponível’ no seguinte link: `localhost:5000` 
ao acessar deverá chegar a tela inicial do sistema!

