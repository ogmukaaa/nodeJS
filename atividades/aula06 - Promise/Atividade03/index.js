const codigoDoPedido = process.argv[2] || 'PED-104';

function consultarSituacao(codigo) {
  // TODO: devolva uma Promise que resolva ou rejeite depois de 60 ms.
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
        if (codigo == 'PED-104') { 
            resolve('PED-104'); 
        } else { 
            reject(new Error(`Invalido`)); 
        }
    }, 60); 
});
}

consultarSituacao(codigoDoPedido)
  .then((situacao) => console.log(situacao))
  .catch((erro) => {
    console.error(erro.message);
    process.exitCode = 1;
  });
