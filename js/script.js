const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

// Selecionar o elemento pelo ID
const elementoNomeAno = document.getElementById("nomeAnoElement");

// Atualizar o conteúdo do elemento com o valor do ano atual
elementoNomeAno.textContent = `Adriano Albuquerqure ${anoAtual}`;