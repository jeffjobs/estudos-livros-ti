// declara a função mostrarOla

function mostrarOla() {
  // obtem o conteúdo do campo (com id=) nome
  var nome = document.getElementById("nome").value;
  document.getElementById("resposta").textContent = "Olá " + nome;
}

// cria uma referência ao botão (com id=) mostrar
var mostrar = document.getElementById("mostrar");

// registra para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla);
