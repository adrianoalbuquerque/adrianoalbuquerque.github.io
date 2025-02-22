const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

// Selecionar o elemento pelo ID
const elementoNomeAno = document.getElementById("nomeAnoElement");

// Atualizar o conteúdo do elemento com o valor do ano atual
elementoNomeAno.textContent = `Adriano Albuquerque ${anoAtual}`;

// Função para rolar suavemente de volta ao topo
function voltarAoTopo() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para a maioria dos navegadores
}

// Mostrar o botão quando o usuário rolar a página
window.onscroll = function () { mostrarOcultarBotao() };

function mostrarOcultarBotao() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("voltarAoTopo").style.display = "block";
    } else {
        document.getElementById("voltarAoTopo").style.display = "none";
    }
}