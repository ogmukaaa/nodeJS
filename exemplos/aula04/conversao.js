const produto = {
    id:1,
    nome: 'Teclado',
    preco: 249.9,
    disponivel: true
}
// console.log(typeof produto);
// console.log(produto);

const texto = JSON.stringify(produto);
// console.log(texto)

const reconstruido = JSON.parse(texto);
console.log(typeof reconstruido);
console.log(reconstruido);