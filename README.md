🚀 **Projeto para a criação de Produtos e Notas Fiscais + Go/Angular**

Este repositório contém um sistema completo com frontend em Angular e backend em Go.
O objetivo é fornecer um guia simples e direto para configurar e rodar o projeto localmente.

⚙️ Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js (versão LTS recomendada)

Angular CLI

bash
npm install -g @angular/cli
Go (versão 1.20 ou superior)

Git para clonar o repositório

📥 Instalação
Clone o repositório:

bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
Instale as dependências globais:

bash
npm install
Instale as dependências do frontend:

bash
cd frontend
npm install

▶️ Como rodar o projeto
🔹 Rodando apenas o frontend
Dentro da pasta frontend:

bash
ng serve
Acesse em: http://localhost:4200

🔹 Rodando apenas o backend
Na raiz do projeto:

bash
go run main.go
O servidor backend estará disponível em: http://localhost:8080

🔹 **Rodando o sistema completo**
Na raiz do projeto, inicie o backend:

bash
go run main.go
Em outro terminal, dentro da pasta frontend, inicie o frontend:

bash
ng serve
Agora o sistema estará rodando com o frontend em http://localhost:4200 e o backend em http://localhost:8080.
