const catalogoDaBiblioteca = [
  { tombo: 'L-101', titulo: 'JavaScript Essencial', tipo: 'Livro', disponivel: true },
  { tombo: 'R-205', titulo: 'Tecnologia em Foco', tipo: 'Revista', disponivel: true },
  { tombo: 'L-309', titulo: 'Algoritmos na Prática', tipo: 'Livro', disponivel: false }
];

const tipoDesejado = process.argv[2] || 'Livro';

const resultado = catalogoDaBiblioteca
.filter(item => item.disponivel && item.tipo === tipoDesejado)
.map(({tombo, titulo }) => ({tombo, titulo}));

console.log(resultado);

console.log('Entrada da busca:', { tipoDesejado, total: catalogoDaBiblioteca.length });


// TODO: substitua as três linhas acima usando filter e map, sem alterar o catálogo.
