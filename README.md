# Jogo do Número Secreto 🎯

### Autor: Breno Jordão 👋

## 📝 Sobre o Projeto
O **Jogo do Número Secreto** é um divertido projeto interativo onde o jogador tenta adivinhar um número secreto gerado aleatoriamente pelo sistema. Com feedback a cada tentativa, o jogo desafia o jogador a encontrar o número correto no menor número de tentativas possível.

O objetivo principal do projeto é aplicar conceitos de lógica de programação, manipulação do DOM e interatividade no navegador.

---

## 🛠️ Tecnologias Utilizadas
- **JavaScript** 🟨: Lógica do jogo, geração de números aleatórios e manipulação do DOM.
- **HTML** 🌐: Estrutura da interface do jogo.
- **CSS** 🎨: Para estilizar o jogo (caso aplique).
- **ResponsiveVoice.js** 🗣️: Biblioteca para narração do texto na interface.

---

## 🚀 Funcionalidades
1. **Geração de Número Aleatório**:
   - O jogo gera um número secreto entre 1 e 10 no início da partida.
   
2. **Feedback ao Jogador**:
   - Indica se o palpite do jogador está **acima**, **abaixo** ou **igual** ao número secreto.

3. **Contador de Tentativas**:
   - Mostra o número de tentativas necessárias para acertar o número.

4. **Reinício de Jogo**:
   - Possibilidade de reiniciar a partida sem recarregar a página.

5. **Narração do Jogo**:
   - Utiliza a biblioteca `ResponsiveVoice` para narrar as mensagens exibidas na interface.

---

## 📂 Estrutura do Código
- **`index.html`**:
  - Estrutura do jogo, contendo os campos para exibir mensagens e receber o palpite do jogador.

- **`app.js`**:
  - Contém toda a lógica do jogo:
    - Geração do número secreto.
    - Validação do palpite.
    - Exibição de mensagens e interação com o jogador.
    - Reinício da partida.

---

1. Clone o repositório:
   ```bash
   git clone git@github.com:brenojordaao/numero-secreto.git
