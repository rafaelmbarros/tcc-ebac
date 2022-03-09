# TCC EBAC QUALIDADE DE SOFTWARE - RAFAEL MONTEIRO DE BARROS

### Cenários de Testes automatizados

#### Funcionalidade: Adicionar item ao carrinho
Descrição: Adicionar item ao carrinho usando custom commands
    ✓ Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho;
    ✓ Os valores não podem ultrapassar a R$ 990,00;
    ✓ Valores entre R$ 200 e R$ 600 , ganham cupom de 10% 
    ✓ Valores acima de R$ 600 ganham cupom de 15%

#### Funcionalidade: Login na plataforma
Descrição: Login na plataforma usando massa de dados
    ✓ Somente usuários ativos podem fazer login;
    ✓ Deve exibir uma mensagem de erro caso o usuário erre o login e senha;
    ✓ Login deve permitir e-mail, nome de usuário ou cpf;
    ✓ Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login

#### Funcionalidade: API de cupons
Funcionalidade: API de cupons usando custom commands
    ✓ Deve listar todos os cupons cadastrado ou listar buscando por ID do cupom
    ✓ Nome do cupom não pode ser repetido
    ✓ Os outros campos são opcionais.
    ✓ Deve cadastrar os cupons com os campos obrigatórios abaixo:
        - Código do cupom: Exemplo: “Ganhe10” 
        - Valor: “10.00”
        - Tipo do desconto: “fixed_product”
        - Descrição: “Cupom de teste”



## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js https://nodejs.org/en/

-Visual Studio Code https://code.visualstudio.com/download ou qualquer editor de texto 

-Git https://git-scm.com/downloads

Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/rafaelmbarros/tcc-ebac.git
```
```
cd tcc-ebac
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.

### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Jmeter: Aplicativo projetado para carregar o comportamento funcional de teste e medir o desempenho: https://jmeter.apache.org/

-Jenkins: Ferramenta de automação: https://www.jenkins.io/

