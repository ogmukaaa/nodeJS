import express from 'express';

const produtos = [
  { id: 1, nome: 'Teclado', preco: 120 },
  { id: 2, nome: 'Mouse', preco: 80 }
];



export function criarAplicacao() {

  const app = express();
  
  app.use(express.json);

  app.get('/api/produtos', (req, res)=> {
    res.status(200).json({status: 'ok'});
  });
  return app;
}

const app = criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));
