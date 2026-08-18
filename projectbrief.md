# 📋 Project Brief — Sistema de Emissão de Notas Fiscais

## 1. Visão Geral

Este documento descreve o projeto de um **Sistema de Emissão de Notas Fiscais**, construído com:

| Camada      | Tecnologia                          |
|-------------|-------------------------------------|
| **Frontend**| Angular (TypeScript, HTML, CSS)     |
| **Backend** | Go + Framework Gin                  |
| **Banco**   | MySQL (via WampServer)              |

O sistema permite cadastrar produtos, criar notas fiscais com múltiplos itens e "imprimir" (fechar) as notas, atualizando o estoque dos produtos automaticamente.

---

## 2. Público-Alvo

Este guia foi escrito para um **programador iniciante** que:

- Usa o **VS Code** como editor;
- Utiliza o **WampServer** para rodar o MySQL localmente;
- Tem noções básicas de programação, mas precisa de **passo a passo detalhado**.

---

## 3. Requisitos Funcionais

### 3.1. Cadastro de Produtos

**Campos obrigatórios:**

- ✅ **Código** — identificação única do produto (ex.: P-001);
- ✅ **Descrição** — nome do produto (ex.: Teclado Mecânico RGB);
- ✅ **Saldo** — quantidade disponível em estoque.

**Resultado esperado:** permitir que um produto seja cadastrado previamente para posterior utilização em notas fiscais.

---

### 3.2. Cadastro de Notas Fiscais

**Campos obrigatórios:**

- ✅ **Numeração sequencial** — gerada automaticamente pelo sistema;
- ✅ **Status** — pode ser `Aberta` ou `Fechada`;
- ✅ **Inclusão de múltiplos produtos** — cada item com sua respectiva quantidade.

**Resultado esperado:** permitir a criação de uma nota fiscal com numeração sequencial e status inicial `Aberta`.

---

### 3.3. Impressão de Notas Fiscais

- ✅ Botão de impressão visível e intuitivo em tela.

**Resultado esperado:**

- Ao clicar no botão, exibir um **indicador de processamento**;
- Após finalizar, **atualizar o status** da nota para `Fechada`;
- **Não permitir** a impressão de notas com status diferente de `Aberta`;
- **Atualizar o saldo** dos produtos conforme a quantidade utilizada na nota:
  - Exemplo: saldo anterior = 10; nota utiliza 2 unidades → novo saldo = 8.

---

## 4. Etapas de Desenvolvimento

### Etapa 1 — Preparação do Ambiente

1. Instalar o **WampServer** (versão 3 ou superior);
2. Iniciar o WampServer e aguardar o ícone ficar verde;
3. Instalar o **Go** (versão 1.22 ou superior);
4. Instalar o **Node.js** (versão 20 ou superior);
5. Instalar o **Angular CLI** globalmente:
   ```bash
   npm install -g @angular/cli
   ```

---

### Etapa 2 — Configuração do Banco de Dados

1. Abrir o phpMyAdmin (`http://localhost/phpmyadmin`);
2. Criar o banco de dados `notas_fiscais_db`;
3. Criar as tabelas `produtos`, `notas_fiscais` e `nota_fiscal_itens`;
4. Garantir que o usuário `root` sem senha está acessível (padrão do WampServer).

---

### Etapa 3 — Backend (Go + Gin)

1. Criar o módulo Go:
   ```bash
   go mod init emissao-notas-fiscais
   ```
2. Instalar as dependências:
   ```bash
   go get github.com/gin-gonic/gin
   go get github.com/go-sql-driver/mysql
   go get github.com/gin-contrib/cors
   ```
3. Estrutura de pastas sugerida:

```
backend/
├── handlers/
│   ├── produto_handler.go
│   └── nota_fiscal_handler.go
├── models/
│   ├── produto.go
│   └── nota_fiscal.go
└── db/
    └── connection.go
```

4. Criar a conexão com o MySQL.
5. Criar as rotas da API:

| Método | Rota                    | Descrição                      |
|--------|-------------------------|--------------------------------|
| GET    | `/produtos`             | Lista produtos                 |
| POST   | `/produtos`             | Cadastra produto               |
| PUT    | `/produtos/:id`         | Atualiza produto               |
| DELETE | `/produtos/:id`         | Exclui produto                 |
| GET    | `/notas-fiscais`        | Lista notas fiscais            |
| POST   | `/notas-fiscais`        | Cria nota fiscal               |
| POST   | `/notas-fiscais/:id/imprimir` | Imprime/fecha nota fiscal |

6. Habilitar **CORS** para permitir o acesso do Angular (porta 4200).

---

### Etapa 4 — Frontend (Angular)

1. Criar o projeto Angular:
   ```bash
   ng new frontend
   ```
2. Instalar as dependências de HTTP e Rotas.
3. Estrutura de pastas sugerida:

```
frontend/src/app/
├── pages/
│   ├── home/
│   ├── produtos/
│   ├── notas-fiscais/
│   └── nota-fiscal-nova/
├── services/
│   ├── produto.service.ts
│   └── nota-fiscal.service.ts
└── models/
    └── models.ts
```

4. Criar o serviço de produtos e notas fiscais que consomem a API do backend.
5. Criar as páginas de listagem e cadastro.

---

### Etapa 5 — Regras de Negócio

#### Cadastro de Produto
- Código e descrição são obrigatórios;
- O código deve ser único no banco.

#### Criação de Nota Fiscal
- A numeração é gerada automaticamente (sequencial);
- O status inicial é `Aberta`;
- Deve ser possível incluir múltiplos produtos com suas quantidades.

#### Impressão (Fechamento) da Nota
- Somente notas com status `Aberta` podem ser impressas;
- Ao fechar, o saldo de cada produto é reduzido pela quantidade usada;
- Sistemas de validação: impedir saldo negativo.

---

### Etapa 6 — Testes e Execução

1. Iniciar o backend:
   ```bash
   go run main.go
   ```
   O servidor roda em `http://localhost:8081`.

2. Iniciar o frontend:
   ```bash
   cd frontend
   ng serve
   ```
   A aplicação roda em `http://localhost:4200`.

3. Testar as funcionalidades:
   - ✅ Cadastrar um produto;
   - ✅ Criar uma nota fiscal com 2+ produtos;
   - ✅ Imprimir a nota (verificar se o saldo foi atualizado);
   - ✅ Verificar que a nota mudou de `Aberta` para `Fechada`.

---

## 5. Fluxo do Usuário

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Usuário acessa http://localhost:4200                     │
│ 2. Cadastra produtos (código, descrição, saldo)             │
│ 3. Cria uma nova nota fiscal                                │
│    → seleciona produtos e quantidades                       │
│    → sistema gera numeração sequencial (status: Aberta)     │
│ 4. Lista as notas fiscais                                   │
│ 5. Clica em "Imprimir" em uma nota Aberta                   │
│    → exibe indicador de processamento                       │
│    → status muda para Fechada                               │
│    → saldo dos produtos é atualizado                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Considerações Finais

- O projeto usa **Angular 22** com **SSR (Server-Side Rendering)** — para carregar dados automaticamente no navegador, use `afterNextRender()` em vez de `isPlatformBrowser()` dentro de `ngOnInit()`;
- O backend usa **Gin** com **CORS liberado** para a origem `http://localhost:4200`;
- O banco de dados é **MySQL** gerenciado pelo **WampServer**.

---

*Documento criado conforme os requisitos do projeto.*