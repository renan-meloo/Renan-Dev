$(document).ready(function () {
  // BARRA AZUL NO MENU AO DESCER
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky')
    } else {
      $('.navbar').removeClass('sticky')
    }
  })

  const dataProjects = [
    {
      title: 'God Of War',
      date: 'Novembro de 2022',
      description: `Uma landing page, baseada no game "God of War" que reúne os principais conceitos do Front-end. Além de ser totalmente responsiva para diferentes tamanhos de tela.<br><br>
      Esse projeto foi desenvolvido com as seguintes ferramentas: <br>

      • HTML5 & SASS; <br>
      • Vanilla JavaScript; <br>
      • Node e NPM; <br>
      • Swiper JS;`,
      imgSrc: 'assets/sites/capa-god-of-war.png',
      repository: 'https://github.com/renan-meloo/god-of-war',
      site: 'https://god-of-war-two.vercel.app/'

    },
    {
      title: 'RocketPay',
      date: 'Outubro de 2022',
      description: `O RocketPay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM. <br><br>
      Esse projeto foi desenvolvido com as seguintes ferramentas: <br>

      • HTML5 & CSS3; <br>
      • Vanilla JavaScript; <br>
      • Node e NPM; <br>
      • ViteJS e iMask;`,
      imgSrc: 'assets/sites/capa-rocketpay.png',
      repository: 'https://github.com/renan-meloo/rocketpays',
      site: 'https://rocketpay-lime.vercel.app/'

    },
    {
      title: 'Getkcal',
      date: 'Setembro de 2022',
      description: `O Getkcal é um projeto em que desenvolvi para aprimorar meu JavaScript. A ideia dele é ajudar o usuário a ver seu metabolismo basal, de acordo com suas características. <br><br>
      Esse projeto foi desenvolvido com as seguintes ferramentas: <br><br>

      • HTML5; <br>
      • Vanilla JavaScript; <br>
      • CSS3; <br>`,
      imgSrc: 'assets/sites/capa-getkcal.png',
      repository: 'https://github.com/renan-meloo/getkcal',
      site: 'https://getkcal-one.vercel.app/'

    },
    {
      title: 'BeautySalon',
      date: 'Fevereiro de 2022',
      description: `A Beauty Salon é uma landing page mobile-first que reúne os conceitos fundamentais de HTML5, CSS3 e JavaScript. Ela possui animações para fazer surgir gradualmente cada section no decorrer do scroll.<br><br>Além de ser totalmente responsiva para diferentes tamanhos de tela, é uma página facilmente customizável, pois todas as cores utilizadas estão armazenadas em variáveis dentro do CSS.`,
      imgSrc: 'assets/sites/capa-beautysalon.png',
      repository: 'https://github.com/renan-meloo/beautysalon',
      site: 'https://beautysalon-psi.vercel.app/'

    },
    {
      title: 'Dev-Finances',
      date: 'Dezembro de 2020',
      description: `A ideia do site é a implementação de um serviço de controle financeiro
      pessoal, com entradas e saídas monetárias. No projeto, aprendi a trabalhar com números em Javascript!`,
      imgSrc: 'assets/sites/capa-dev-finances.png',
      repository: 'https://github.com/renan-meloo/dev-finances',
      site: 'https://dev-finances-phi.vercel.app/'

    },
  ]

  // Criação do Box de Projeto - Portfolio
  function createProject(title, date, imgSrc){
    return `
    <div class="box" id="project-${title}">
    <div class="cover">

    <img src="${imgSrc}" alt="Imagem do projeto ${title}">
    <div class="name-project">
    <p>${title}</p>
    </div>

    <div class="description">
    <p>${date}</p>
    <a>Ver mais</a>
    </div>
    </div>
    </div>
    `
  }

  const layoutProject = `
  <div class="container">
  <div class="title">
  <h2>PORTFOLIO</h2>
  </div>

  <div class="portfolio-content">
  <p>Aqui está uma galeria com alguns sites que desenvolvi ao longo do tempo, com todo o percurso
  do meu
  desenvolvimento, colocando em prática o meu aprendizado.
  </p>

  <div class="cards-portfolio">
  ${createProject(dataProjects[0].title, dataProjects[0].date, dataProjects[0].imgSrc)}

  ${createProject(dataProjects[1].title, dataProjects[1].date, dataProjects[1].imgSrc)}

  ${createProject(dataProjects[2].title, dataProjects[2].date, dataProjects[2].imgSrc)}

  ${createProject(dataProjects[3].title, dataProjects[3].date, dataProjects[3].imgSrc)}

  ${createProject(dataProjects[4].title, dataProjects[4].date, dataProjects[4].imgSrc)}

  </div>
  </div>
  </div>
  `

  const portfolio = document.getElementById('portfolio');

  portfolio.innerHTML = layoutProject;

  // Criação do Modal do projeto

  function createModal(title, date, description, imgSrc, repository, site){
    return `
    <div class="box-modal">
    <div class="top">
    <div class="image-site">
    <img src="${imgSrc}" alt="Capa do projeto ${title}">
    </div>
    <div class="info">
    <div class="title-project">
    <h2>${title}</h2>
    <i class="menu-cards">
    <ion-icon name="close-outline"></ion-icon>
    </i>
    </div>
    <p>${description}</p>
    <span>${date}</span>
    </div>
    </div>
    <div class="links">
    <a href="${site}" target="_blank" class="link-project">Acessar projeto</a>
    <a href="${repository}" target="_blank" class="link-repository">Acessar repositório</a>
    </div>
    </div>
    `}

    const modalCreate = document.querySelector('.modal');

    const box = document.querySelectorAll('.cards-portfolio .box')

    box.forEach((item, index) => {

      const addData = () => {

        const modalLayout = `
        ${createModal(
          dataProjects[index].title,
          dataProjects[index].date,
          dataProjects[index].description,
          dataProjects[index].imgSrc,
          dataProjects[index].repository,
          dataProjects[index].site)}
          `

          modalCreate.innerHTML = modalLayout;

          $('.menu-cards').click(function () {
            $('.modal').toggleClass('hidden')
          })
        }

        item.addEventListener('click', addData)
      })


      // ABRIR E FECHAR MENU
      $('.toggle').click(function () {
        $('.navbar .menu').toggleClass('show'), $('.toggle').toggleClass('show')
      })

      $('.menu').click(function () {
        $('.navbar .menu').removeClass('show'), $('.toggle').removeClass('show')
      })

      // MENU MODAL
      $('.cover').click(function () {
        $('.modal').removeClass('hidden')
      })

      // Botão de ir para o Topo
      $(window).scroll(function () {
        this.scrollY > 800
        ? $('.back-to-top').addClass('show')
        : $('.back-to-top').removeClass('show')

      })

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
