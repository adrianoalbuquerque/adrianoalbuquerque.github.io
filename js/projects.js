const projects = [
  {
    title: "Instagram Clone",
    description: `Clone funcional da interface do Instagram, construído com 
        <b>Angular 8+</b> (via Angular CLI) e conectado ao Firebase para toda a lógica de backend.
        A aplicação utiliza <b>Angular CLI</b> para gerar componentes, configurar o ambiente, compilar e executar.
        No backend, o <b>Firebase</b> gerencia autenticação, banco de dados (Firestore ou Realtime Database),
        armazenamento de mídia (Storage) e lógica de tempo real — eliminando a necessidade de uma API intermediária
        ou servidor customizado.`,
    image: "assets/instagram_clone.png",
    link: "http://adriano-albuquerque-instagram.s3-website-sa-east-1.amazonaws.com/"
  },
  {
    title: "Jogo da Velha",
    description: `Implementação do clássico jogo da velha utilizando <b>Angular 10</b> com <b></b>TypeScript</b>, 
        <b>HTML5</b> e <b>SCSS</b>. A lógica do jogo é gerenciada diretamente no frontend, sem dependência de backend. 
        A aplicação utiliza <b>Angular CLI</b> para organização de componentes e execução. A interação do usuário é 
        tratada por meio de eventos e <b></b>manipulação do DOM</b>, atualizando dinamicamente o estado do tabuleiro. 
        A detecção de vitória ou empate é realizada por meio de verificações lógicas nas combinações possíveis de linhas, 
        colunas e diagonais.`,
    image: "assets/jogo_da_velha.png",
    link: "http://adriano-albuquerque-jogo-da-velha.s3-website.us-east-2.amazonaws.com/#"
  },
  {
    title: "Gerenciador Financeiro",
    description: `Construído com o <b>Angular 11</b>, utilizando uma arquitetura Master/Detail que
        envolve a geração de componentes para reutilização de código.`,
    image: "assets/gerenciador_financeiro.png",
    link: "http://adriano-albuquerque-finansys.s3-website-sa-east-1.amazonaws.com/reports"
  },
  {
    title: "50 Projetos em 50 Dias",
    description: `Resultado do curso que foca na criação de 50 mini projetos em <b>HTML</b>, <b>CSS</b> e 
        <b>JavaScript</b>. Abordando conceitos como manipulação do DOM, eventos, métodos de array, requisições HTTP,
        layouts responsivos, animações e transições.`,
    image: "assets/img/img1.png",
    link: "https://adrianoalbuquerque.github.io/challenge.html"
  },
  {
    title: "Marvel Tic-tac-toe",
    description: `Aplicação interativa baseada no jogo da velha com temática Marvel. Desenvolvida em 
        <b>Angular 14</b> com <b>TypeScript</b>, <b>HTML5</b> e <b>SCSS</b>. Estruturada com <b>Angular CLI</b>, integra
        <b>Node.js</b> e <b>npm/yarn</b>. Testes unitários com <b>Jasmine</b> e <b>Karma</b> asseguram a qualidade.`,
    image: "assets/marvel_tic_tac_toe.png",
    link: "https://marvel-tic-tac-toe.vercel.app/"
  },
  {
    title: "Webpack – Projeto de Micro-Frontends",
    description: "Aplicação desenvolvida em <b>React</b> com configuração completa do <b>Webpack</b>, explorando loaders, plugins e ambientes de desenvolvimento e produção. O projeto demonstra <b>code splitting</b>, <b>otimização de performance</b> e uso do <b>Module Federation</b> para arquitetura de <b>Micro-frontends</b>. Resultado de um estudo prático sobre empacotamento e modularização de aplicações web modernas.",
    image: "assets/webpack_advanced.png",
    link: "http://app-webpack.s3-website-sa-east-1.amazonaws.com/"
  },
  {
    title: "Gupta AI Assistant",
    description: `Aplicação web que simula um assistente de IA voltado ao <b>OpenText Team Developer (Gupta)</b>. 
    Desenvolvida com <b>HTML5</b>, <b>CSS3</b> e <b>JavaScript (ES6)</b>, utiliza <b>Webpack</b> para empacotamento e organização de módulos. 
    A interface oferece suporte a <b>Markdown</b>, alternância de tema claro/escuro e animação de digitação, proporcionando uma experiência fluida e imersiva. 
    Projetada para integração com modelos de linguagem via <b>API REST</b> (ex.: Google Gemini), permitindo respostas inteligentes, explicações de código SAL e sugestões de boas práticas.`,
    image: "assets/gupta_gpt.png",
    link: "http://guptagpt.s3-website-sa-east-1.amazonaws.com/"
  }


];

function renderProjects() {
  const container = document.getElementById("projects-container");

  projects.forEach(proj => {
    const card = document.createElement("a");
    card.className = "card overflow-hidden shadow rounded-4 border-0 mb-5 text-decoration-none text-dark d-block";
    card.href = proj.link;
    card.target = "_blank";

    card.innerHTML = `
        <div class="card-body p-2">
          <div class="grid-container">
            <div class="p-5">
              <h2 class="fw-bolder">${proj.title}</h2>
              <p>${proj.description}</p>
            </div>
            <div class="d-flex align-items-center justify-content-center p-3">
              <img class="img-fluid" src="${proj.image}" alt="${proj.title}" style="border-radius: 4px" />
            </div>
          </div>
        </div>
      `;

    container.appendChild(card);
  });
}

// Renderiza os cards ao carregar a página
document.addEventListener("DOMContentLoaded", renderProjects);