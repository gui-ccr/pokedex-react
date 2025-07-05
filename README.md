# 👾 Pokédex com React

Uma aplicação web moderna e responsiva que exibe uma lista dos 151 Pokémon originais, permitindo a busca e filtro em tempo real. Este projeto foi construído do zero utilizando **React** e **Vite**, com foco em aplicar conceitos modernos de desenvolvimento front-end, como componentização, gerenciamento de estado e consumo de APIs.

Este projeto solidifica os aprendizados do desenvolvimento com JavaScript puro e demonstra a aplicação de uma arquitetura escalável baseada em componentes.

### 🔗 [Demonstração Ao Vivo](https://gui-ccr.github.io/pokedex-react/)


---

### ✨ Funcionalidades

* **Visualização em Grade:** Exibe os 151 Pokémon iniciais em uma grade responsiva e agradável.
* **Busca em Tempo Real:** Um campo de busca permite filtrar a lista de Pokémon por nome instantaneamente.
* **Dados da API:** Todas as informações e imagens são consumidas em tempo real da [PokéAPI](https://pokeapi.co/).
* **Layout Responsivo:** A grade se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.

---

### 💻 Tecnologias e Ferramentas

* **React:** Biblioteca principal para a construção da interface de usuário.
* **Vite:** Ferramenta de desenvolvimento para iniciar e servir o projeto com alta performance.
* **JavaScript (ES6+):** Linguagem base para toda a lógica da aplicação.
* **CSS3:** Estilização e criação do layout responsivo com CSS Grid e Media Queries.
* **HTML5:** Estrutura semântica da aplicação.

---

### 🧠 Conceitos Praticados

Este projeto foi uma imersão nos principais conceitos do ecossistema React:

* **Arquitetura de Componentes:** Divisão da UI em componentes reutilizáveis (`App`, `PokemonGrid`, `PokemonCard`).
* **Hooks do React:**
    * **`useState`**: Para gerenciar o estado da lista de Pokémon e do termo de busca.
    * **`useEffect`**: Para lidar com o "efeito colateral" de buscar dados de uma API externa após a montagem do componente.
* **Fluxo de Dados com `props`:** Passagem de dados da lista de Pokémon do componente pai (`App`) para os filhos.
* **Renderização de Listas:** Uso do método `.map()` para renderizar dinamicamente a lista, com a atribuição de `keys` únicas para otimização.
* **Renderização Condicional e Filtros:** Lógica para filtrar o array de dados com base no input do usuário antes de renderizar.
* **Event Handling:** Gerenciamento do evento `onChange` do campo de busca para criar uma interface reativa.

---

### ▶️ Como Executar Localmente

```bash
# 1. Clone o repositório
$ git clone https://github.com/gui-ccr/pokedex-react

# 2. Navegue até o diretório
$ cd pokedex-react

# 3. Instale as dependências
$ npm install

# 4. Rode o servidor de desenvolvimento
$ npm run dev
