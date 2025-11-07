// Quando clicar em "Adicionar ao Carrinho", mostrar alerta com o nome do livro
const botoesCarrinho = document.querySelectorAll(".add-carrinho");

botoesCarrinho.forEach(botao => {
  botao.addEventListener("click", () => {
    const nomeLivro = botao.parentElement.querySelector("h3").textContent;
    alert(`Livro "${nomeLivro}" adicionado!`);
  });
});

// Mostra ou oculta os preços
const botaoToggle = document.getElementById("toggle-precos");
const precos = document.querySelectorAll(".preco");

botaoToggle.addEventListener("click", () => {
  precos.forEach(preco => {
    // Alterna a exibição entre "none" e "block dos preçoss"
    preco.style.display = preco.style.display === "none" ? "block" : "none";
  });
});
