const botaoFiltrar = document.querySelector(".btn-filtrar");
// Adiciona um evento de clique ao botão de filtrar
botaoFiltrar.addEventListener("click", () => {
  const categoriaSelecionada = document.getElementById("categoria").value;
  const precoMaximoSelecionado = document.getElementById("preco").value;
  const cartas = document.querySelectorAll(".carta");
  cartas.forEach(function (carta) {
    const categoriaCarta = carta.dataset.categoria;
    const precoCarta = carta.dataset.preco;
    let mostrarCarta = true;
    mostrarCarta = filtrarCartas(categoriaSelecionada, categoriaCarta, mostrarCarta, precoMaximoSelecionado, precoCarta); // recebe os filtros e verifica se a carta deve ser mostrada ou escondida
    if (mostrarCarta) {
      mostrarCartas(carta);
    } else {
      esconderCartas(carta);
    }
  });
});

function filtrarCartas(categoriaSelecionada, categoriaCarta, mostrarCarta, precoMaximoSelecionado, precoCarta) {
  const temFiltroDeCategoria = categoriaSelecionada !== "";
  const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();
  if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
    mostrarCarta = false;
  }
  const temFiltroDePreco = precoMaximoSelecionado !== "";
  const cartaNaoBateComFiltroDePreco = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);
  if (temFiltroDePreco && cartaNaoBateComFiltroDePreco) {
    mostrarCarta = false;
  }
  return mostrarCarta;
}

function esconderCartas(carta) {
  carta.classList.add("esconder");
  carta.classList.remove("mostrar");
}

function mostrarCartas(carta) {
  carta.classList.add("mostrar");
  carta.classList.remove("esconder");
}

