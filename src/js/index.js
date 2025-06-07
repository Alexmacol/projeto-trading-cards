const dropdown = document.getElementById("categoria");
const cartas = document.querySelectorAll(".carta");
const botaoFiltrar = document.querySelector(".btn-filtrar");
// Adiciona um evento de clique ao botão de filtrar
botaoFiltrar.addEventListener("click", () => {
    const categoriaSelecionada = dropdown.value;
    cartas.forEach((carta) => {
      const categoria = carta.getAttribute("data-categoria");
      filtrarCartas(categoriaSelecionada, categoria, carta);
    });
  });
  
function filtrarCartas(categoriaSelecionada, categoria, carta) {
  if (categoriaSelecionada === "" || categoriaSelecionada === categoria) {
    carta.classList.add("mostrar");
    carta.classList.remove("esconder");
  } else {
    carta.classList.add("esconder");
    carta.classList.remove("mostrar");
  }
}

