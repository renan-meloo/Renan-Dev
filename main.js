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
})
