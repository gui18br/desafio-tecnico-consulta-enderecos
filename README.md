<h1>
    <p>Desafio Técnico - Desenvolvedor(a) Frontend</p>
</h1>

## 🧑‍💻 Preview

<p align="center">
    <img src="https://github.com/gui18br/desafio-tecnico-consulta-enderecos/blob/main/src/assets/preview.png?raw=true" width="700" height="400"  />
</p>

## 📖 About

O projeto consiste em um desafio técnico proposto para se criar uma aplicação em **React** com **TypeScript** e **TailwindCSS** que permita o usuário consultar endereços via API do ViaCEP, armazená-los localmente e listá-los.

## 📓 Explanation
O projeto foi desenvolvido como um todo se baseando em componentes funcionais com a utlização de Hooks para o gerenciamente de estado. Foi feita principalmente a utlização do Hook **useState** para manter e alterar o estado de componentes que necessitavam de atualizações conforme funções fossem executadas através de ações requisitadas pelo usuário, como 'Buscar' e 
'Salvar'. Optou-se por utilizar o **localStorage** para o armazenamento dos endereços salvos e a utilização própria do **useState** para o cache das consultas na sessão atual do usuário, evitando um looping de requisições seguidas para um mesmo CEP já requisitado. Para o consumo e a requisição da API, se utilizou da biblioteca **Axios**. O design do projeto segue a responsividade traga pelo **TailwindCSS** e com o mesmo foi feito um refinamento para o mobile. Por fim, utilizou-se do **Vite** para a criação do projeto **React**, pois o mesmo permite uma rápida configuração e inicialização do projeto.

## 👷‍♂️ Installation Instructions

Para instalar as dependências, utilize este comando:

```bash
npm install
```

## 🚀 Usage

Para iniciar o projeto, utilize o comando:

```bash
npm run dev
```

## 🔨 Tools

- [TypeScript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Vite](https://vitejs.dev/guide/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
