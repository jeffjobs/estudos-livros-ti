// cria referencia aos elementos da página
const inRemedio = document.getElementById("inRemedio");
const inPreco = document.getElementById("inPreco");
const btVerPromo = document.getElementById("btVerPromo");
const outPromo = document.getElementById("outPromo");

function mostrarPromo() {
  // obtem conteudo dos campos de entrada
  const nome = inRemedio.value;
  const preco = Number(inPreco.value);

  // calcula promocao
  const total = Math.floor(preco * 2);

  // altera conteudo da linha de resposta
  outPromo.textContent = `Promoção de ${nome}\nLeve 2 por apenas R$ ${total.toFixed(2)}`;
}

// cria referência ao elemento btVerPromo
btVerPromo.addEventListener('click', mostrarPromo);
