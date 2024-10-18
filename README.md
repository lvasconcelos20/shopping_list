# Projeto: [Nome do Projeto]

## Descrição
Este projeto visa [breve descrição do objetivo do projeto]. A seguir, estão detalhadas as principais tecnologias e bibliotecas utilizadas durante o desenvolvimento.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução JavaScript server-side, utilizado para construir a API do projeto.
- **Express**: Framework web para Node.js, usado para gerenciar as rotas e facilitar a criação de middleware.
- **Prisma**: ORM para manipulação de banco de dados, facilitando a criação de queries e a integração com o banco de dados.
- **Cookie-Parser**: Middleware para análise de cookies em requisições HTTP.
- **Cors**: Biblioteca para configurar e permitir requisições de diferentes origens (CORS).
- **Helmet**: Middleware que ajuda a proteger a aplicação definindo vários cabeçalhos de segurança HTTP.
- **Swagger-UI-Express**: Utilizado para documentar a API, fornecendo uma interface gráfica para explorar e testar os endpoints.
- **Winston** e **express-winston**: Usados para logging, permitindo a captura de logs de forma estruturada e integrando com o Express.
- **Zod**: Biblioteca de validação de esquemas, garantindo que os dados enviados para a API estejam no formato esperado.

### Frontend (Mobile)
- **React Native**: Framework JavaScript para criar interfaces de usuário nativas em dispositivos móveis.
- **Expo**: Plataforma que facilita o desenvolvimento de aplicativos React Native, simplificando o processo de build e testes.
- **Expo-Checkbox**: Componente de checkbox para React Native, integrado com o Expo.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário, especialmente usada em componentes reutilizáveis.

### Frontend (Web)
- **Next.js**: Framework React para desenvolvimento de aplicações web com renderização do lado do servidor (SSR) e geração de sites estáticos.
- **@mui/material** e **@mui/icons-material**: Componentes de UI para React, permitindo a criação de interfaces elegantes e responsivas.
- **@emotion/react** e **@emotion/styled**: Bibliotecas para estilização, usadas junto com o MUI para personalização de temas e estilos.
- **TailwindCSS** e **tailwind-merge**: Framework de estilização utilitária que facilita a construção de layouts responsivos e personalizados.
- **ShadCN**: Conjunto de componentes e hooks para Next.js, proporcionando uma abordagem modular e reutilizável na construção de interfaces de usuário complexas.

### Desenvolvimento
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática, utilizado para melhorar a manutenção e robustez do código.
- **TS-Node-Dev**: Ferramenta para desenvolvimento com TypeScript que permite recarregar automaticamente o servidor durante alterações no código.
- **@Types**: Tipos utilizados para integração com TypeScript em bibliotecas que não possuem suporte nativo à tipagem, como `@types/express` e `@types/cookie-parser`.

### DevOps e Segurança
- **Dotenv**: Utilizado para carregar variáveis de ambiente a partir de um arquivo `.env`, permitindo manter informações sensíveis fora do código-fonte.
- **Node Package Manager (NPM) / Yarn**: Gerenciadores de pacotes para instalar e gerenciar as dependências do projeto.

## Instalação
1. Clone o repositório:
   ```bash
   git clone [url_do_repositorio]
2. Instale as dependências do backend:
   ```bash
   npm install or yarn install
3. Instale as dependências do Frontend:
    ```bash
    yarn install or npm install


## Execução
### backend
1. Execute o servidor:

```bash
npm run dev
Frontend (Mobile)

2. Inicie o aplicativo:

expo start
Frontend (Web)
Execute a aplicação Next.js:
yarn dev

