const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

if (!nomeInformado || !turmaInformada) {
    console.error('PENDENTE: valide nome e turma antes de confirmar a inscrição.');
    process.exitCode = 1;
} else {
    console.log('Entrada recebida:', { nomeInformado, turmaInformada });
}





// TODO: substitua as três linhas acima pela validação e pela confirmação pedidas.
