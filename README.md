# ⚛️ Portfólio Pessoal - Lucas Sacerdote

Este é o repositório do meu portfólio pessoal, desenvolvido para ser uma vitrine moderna e interativa dos meus projetos, habilidades e experiência como Desenvolvedor Full Stack.

---

### 🎯 Objetivos do Projeto

O principal objetivo deste projeto foi tratar o meu portfólio como um produto de software completo, aplicando na prática os seguintes conceitos:

* **Desenvolver** uma aplicação full stack moderna com Next.js, TypeScript e Tailwind CSS.
* **Criar** uma interface de usuário (UI) visualmente apelativa e rica em animações, utilizando bibliotecas como Framer Motion e React Icons.
* **Implementar** funcionalidades dinâmicas, como um formulário de contato funcional.
* **Construir** um site totalmente responsivo, garantindo uma experiência de usuário consistente em desktops, tablets e dispositivos móveis.

---

### ⚡ Funcionalidades Implementadas

✅ **Apresentação Dinâmica:**
* Seção "Hero" com título, subtítulo e botões de ação que causam um primeiro impacto visual forte.
* Fundo animado com WebGL para criar uma atmosfera imersiva.

✅ **Seções Interativas:**
* **Sobre Mim:** Título com efeito de foco e texto de apresentação.
* **Galeria de Projetos:** Cards com efeito "spotlight" que reage ao movimento do mouse para exibir meus trabalhos.

✅ **Funcionalidades Full Stack:**
* **Formulário de Contato:** Integrado no rodapé, com um endpoint de API funcional (`/api/contact`) construído com as API Routes do Next.js.

✅ **Integrações de API:**
* **Widget do Spotify:** Exibição de uma playlist diretamente no rodapé da página.

---

### 🏗️ Arquitetura e Estrutura do Projeto

O projeto utiliza a arquitetura **App Router** do Next.js, que favorece o uso de Componentes de Servidor e Componentes de Cliente para otimização de performance.

* `src/app/`: Diretório principal contendo as rotas da aplicação.
    * `layout.tsx`: O layout raiz que define a estrutura de todas as páginas.
    * `page.tsx`: A página inicial do portfólio.
    * `api/`: Contém as rotas de API, como o endpoint de contato.
* `src/components/`: Diretório para todos os componentes React reutilizáveis (Navbar, Botões, Cards, Rodapé, etc.).
* `public/`: Diretório para arquivos estáticos, como imagens e SVGs.
* `tailwind.config.ts`: Arquivo de configuração para o Tailwind CSS, incluindo a definição de animações customizadas.
* `next.config.mjs`: Arquivo de configuração do Next.js.

---

### 🔧 Tecnologias Utilizadas

| Tecnologia      | Propósito                                             |
| --------------- | ----------------------------------------------------- |
| **Next.js** | Framework React para front-end e back-end.            |
| **React** | Biblioteca principal para a construção da UI.         |
| **TypeScript** | Superset do JavaScript para tipagem estática.         |
| **Tailwind CSS**| Framework de estilização "utility-first".             |
| **Framer Motion**| Biblioteca para animações complexas em React.         |
| **React Icons** | Biblioteca para a inclusão de ícones de alta qualidade.|
| **OGL** | Biblioteca WebGL para o fundo animado "Dark Veil".    |
| **Node.js** | Ambiente de execução para as API Routes do Next.js.   |
| **Vercel** | Plataforma de hospedagem otimizada para Next.js.      |

---

### 🚀 Como Executar o Projeto Localmente

**Pré-requisitos**

* **Node.js** - Versão 18 ou superior.
* **npm** ou **yarn**.

**Instalação e Execução**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LSacerdote/meu-portfolio.git](https://github.com/LSacerdote/meu-portfolio.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd meu-portfolio
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
5.  **Acesse a Aplicação:**
    O sistema estará disponível no seu navegador no endereço: `http://localhost:3001`

---

### 👥 Contribuidor

Este projeto foi desenvolvido por:

**Lucas Sacerdote**

* **GitHub:** [@LSacerdote](https://github.com/LSacerdote)
* **LinkedIn:** [https://www.linkedin.com/in/lucas-sacerdote-3a6b8a240/)

---

### 📄 Licença

Este projeto é de minha autoria e serve como meu portfólio profissional. © 2025 Lucas Sacerdote. Todos os direitos reservados.
