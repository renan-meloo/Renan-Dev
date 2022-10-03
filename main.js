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

  // Scroll Reveal - Geral
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000
  })

  scrollReveal.reveal(
    `.logo, #home .text-3, #home .text-1, #home .text-2,
    #about .title, #about .column,
    section#skills, #skills .title, #skills .cards,
    section#portfolio, #portfolio .title, #portfolio .portfolio-content, #portfolio .cards-portfolio,
    #footer #title-footer, #footer #text-footer, #footer .social-links
  `,
    { interval: 125 }
  )
})
