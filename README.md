<div align="center">

# 👾 Pokédex com React e Vite 👾

**Uma aplicação web moderna construída para demonstrar competências essenciais de desenvolvimento front-end, incluindo componentização, gerenciamento de estado com Hooks e consumo de APIs REST.**

<br>

<img src="https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF?style=plastic&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=plastic&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=plastic" alt="Status">

<br>
<br>

<a href="https://gui-ccr.github.io/pokedex-react/">
  <img src="https://github.com/gui-ccr/gui-ccr/blob/main/img/Demonstra%C3%A7%C3%A3o%20da%20Pok%C3%A9dex%20em%20React.gif" alt="Demonstração da Pokédex" width="80%">
</a>

<h3><a href="https://gui-ccr.github.io/pokedex-react/">🔗 Acessar a Demonstração Ao Vivo 🔗</a></h3>

</div>

---

> 💡 **Nota do Desenvolvedor:** Este projeto representa a aplicação prática dos meus estudos em React. O objetivo foi ir além do JavaScript puro e construir uma aplicação seguindo as melhores práticas do desenvolvimento front-end moderno: uma arquitetura escalável baseada em componentes, gerenciamento de estado reativo com Hooks e uma experiência de desenvolvimento ágil proporcionada pelo Vite.

<br>

## 📜 Índice
* [✨ Funcionalidades](#-funcionalidades)
* [🏆 Vitrine de Conceitos React](#-vitrine-de-conceitos-react)
* [💻 Stack de Tecnologias](#-stack-de-tecnologias)
* [🚀 Como Executar Localmente](#-como-executar-localmente)

---

## ✨ Funcionalidades

| Funcionalidade | Descrição | Status |
| :--- | :--- | :---: |
|  Pokemon | Exibe os 151 Pokémon iniciais em uma grade responsiva, consumindo dados da PokéAPI. | ✅ |
| 🔍 **Busca em Tempo Real** | Filtra a lista de Pokémon por nome instantaneamente conforme o usuário digita. | ✅ |
| 📱 **Layout Responsivo** | A interface se adapta perfeitamente a desktops, tablets e dispositivos móveis usando CSS Grid. | ✅ |
| 🔗 **Links Dinâmicos** | Cada card de Pokémon é um link que poderia levar a uma página de detalhes (funcionalidade futura). | ✅ |

---

## 🏆 Vitrine de Conceitos React

Este projeto foi uma imersão nos principais conceitos do ecossistema React, demonstrados nos trechos de código abaixo.

<details>
<summary><strong>Gerenciamento de Estado e Efeitos com Hooks (`useState`, `useEffect`)</strong></summary>
<br>
No componente principal `App.jsx`, `useState` é usado para armazenar a lista de Pokémon e o termo de busca. `useEffect` é utilizado para buscar os dados da API de forma assíncrona assim que o componente é montado.

```jsx
// Em: src/App.jsx
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      // Lógica para buscar os 151 pokémons da API
      // ...
      setPokemons(allPokemons);
    };

    fetchPokemons();
  }, []); // O array vazio garante que o efeito rode apenas uma vez

  // ...
}
```
</details>

<details>
<summary><strong>Arquitetura de Componentes e Fluxo de Dados (`props`)</strong></summary>
<br>
A UI é dividida em componentes reutilizáveis. O `App` (pai) passa a lista de Pokémon filtrada para o componente `PokemonGrid` (filho) através de `props`, que por sua vez renderiza múltiplos componentes `PokemonCard`.

```jsx
// Em: src/App.jsx
const filteredPokemons = pokemons.filter(pokemon => 
  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div className="app">
    <h1>Pokédex</h1>
    <input
      type="text"
      placeholder="Buscar Pokémon"
      onChange={e => setSearchTerm(e.target.value)}
    />
    <PokemonGrid pokemons={filteredPokemons} />
  </div>
);
```
</details>

<details>
<summary><strong>Renderização de Listas e `keys`</strong></summary>
<br>
O componente `PokemonGrid.jsx` recebe a lista de Pokémon e utiliza o método `.map()` para renderizar um `PokemonCard` para cada item. A `key` é essencial para que o React otimize a renderização da lista.

```jsx
// Em: src/PokemonGrid.jsx
function PokemonGrid({ pokemons }) {
  return (
    <div className="pokemon-grid">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
```
</details>

---

## 💻 Stack de Tecnologias

* **React:** Biblioteca principal para a construção da UI.
* **Vite:** Ferramenta de build e servidor de desenvolvimento de alta performance.
* **JavaScript (ES6+):** Linguagem para a lógica da aplicação.
* **CSS3:** Estilização e layout responsivo (CSS Grid e Media Queries).
* **HTML5:** Estrutura semântica.
* **PokéAPI:** API REST como fonte de dados.

---

## 🚀 Como Executar Localmente

```bash
# 1. Clone o repositório
$ git clone [https://github.com/gui-ccr/pokedex-react](https://github.com/gui-ccr/pokedex-react)

# 2. Navegue até o diretório
$ cd pokedex-react

# 3. Instale as dependências
$ npm install

# 4. Rode o servidor de desenvolvimento
$ npm run dev
```
