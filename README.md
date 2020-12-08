# Financial Control

Projeto simples para fazer calculos rápidos de gastos

## Instalação

Para rodar o projeto você deve clonar o repositório do git, instalar os pacotes e iniciar o server local do angular, como está a seguir:
```sh
$ git clone https://github.com/mateusmcordeiro/financial-control.git
$ cd financial-control
$ npm install
$ npm start
```
## Observação
Todos os plugins que rodam na versão atual do angular para fazer mascara de inputs e que eram necessários para esta aplicação estão quebrados.
Como eu não tenho tempo para mandar um Pull request corrigindo e esperar a release dessa feature, eu utilizei uma biblioteca feita em javascript vanilla e criei uma directive para fazer o intermédio entre a DOM do angular e a referencia ao elemento que o plugin pede. 
 
Plugins quebrados para a funçao currency(dinheiro):  
- https://github.com/JsDaddy/ngx-mask
- https://github.com/nbfontana/ngx-currency.
 
Plugin utilizado 
- https://github.com/RobinHerbots/Inputmask

