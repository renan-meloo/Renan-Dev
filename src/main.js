import './css/index.css'

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
  })

  // ABRIR E FECHAR MENU
  $('.toggle').click(function () {
    $('.navbar .menu').toggleClass('show'), $('.toggle').toggleClass('show')
  })

  $('.menu').click(function () {
    $('.navbar .menu').removeClass('show'), $('.toggle').removeClass('show')
  })

  // Botão de ir para o Topo
  $(window).scroll(function () {
    if (this.scrollY > 800) {
      $('.back-to-top').addClass('show')
    } else {
      $('.back-to-top').removeClass('show')
    }
  })

  // Dinamismo (Projetos Portfólio)
  function createProject(name, base, description){
    return `
    <div class="box">
  <div class="cover">
    <a href="https://${name}-${base}.vercel.app/" target="_blank">
      <img src="assets/sites/capa-${name}.png" alt="Imagem do projeto ${name}">
      <p class="details">${name}</p>
      <span class="details-site">${description}
      </span>
    </a>
    </div>
</div>
    `
  }

  document.querySelector("#portfolio").innerHTML = `
  <div class="title">
  <h2>PORTFOLIO</h2>
</div>

<div class="portfolio-content">
  <p>Aqui está uma galeria com alguns sites que desenvolvi ao longo do tempo, com todo o percurso
    do meu
    desenvolvimento, colocando em prática o meu aprendizado.
  </p>

  <div class="cards-portfolio">
  ${createProject("Rocketpay", "lime", "O RocketPay é um componente que simula o formulário de preenchimento decartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via JavaScript DOM.")}

  ${createProject("Getkcal", "one", "O Getkcal é um projeto em que desenvolvi para aprimorar meu JavaScript. A ideia dele é ajudar o usuário a ver seu metabolismo basal, de acordo com suas características.")}

  ${createProject("Beautysalon", "psi", "A Beauty Salon é uma landing page mobile-first, na qual pude colocar em prática os conceitos fundamentais de HTML5, CSS3 e JavaScript.")}

  ${createProject("Dev-Finances", "phi", "A ideia do site é a implementação de um serviço de controle financeiro pessoal, com entradas e saídas monetárias. No projeto, aprendi a trabalhar com números em Javascript!")}

  </div>
      </div>
  `
  // Dinamismo (Projetos Portfólio)

    // TypedJS - Digitação - Home
  var typed = new Typed('.typing', {
    strings: ['', 'Desenvolvedor', 'Designer', 'Programador'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  })

  // Scroll Reveal - Geral
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000
  })

  scrollReveal.reveal(
    `.logo, #home .text-3, #home .text-1, #home .text-2, #home .button-cv,
    #about .title, #about .column,
    section#skills, #skills .title, #skills .cards,
    section#portfolio, #portfolio .title, #portfolio .portfolio-content, #portfolio .cards-portfolio,
    #footer #title-footer, #footer #text-footer, #footer .social-links
  `,
    { interval: 125 }
  )
})
