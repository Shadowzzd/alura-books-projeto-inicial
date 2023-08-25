const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = filtrarPorDisponibilidade(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
   if(categoria =='disponivel'){
    const valorTotal = calcularValorTotal(livrosFiltrados)
    exibirValorTotal(valorTotal)
   }
}
function filtrarPorDisponibilidade(categoria) {
    return categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) :
        filtrarPorCategoria(categoria)
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function exibirValorTotal(valorTotal){
    elementoComValorTotal.innerHTML= `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}

