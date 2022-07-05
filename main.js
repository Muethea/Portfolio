const nav = document.querySelector('#header nav')

const toggle = document.querySelectorAll('nav .toggle')

for (const elemnt of toggle) {
  elemnt.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const header = document.querySelector('#header')

const navHeight = header.offsetHeight
window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/*ScroolReveal*/

ScrollReveal({
  origin: 'top',
  reset: true,
  distance: '20px',
  duration: 700
})

ScrollReveal().reveal(
  `.code, .social-midia, #about h1, #about .name, #about #btnAbt, #service header, #service .card, #projects header, #projects .card, #skills header, .skills1 i, .skills2 i, #contact header, #contact a, #contact p, #footer .logo, #footer p, .social-midia2 i`,
  { interval: 120 }
)

/*Voltar para topo*/

const backTopBtn = document.querySelector('.back-to-top')

window.addEventListener('scroll', function(){
  if(this.window.scrollY>= 560){
    backTopBtn.classList.add('show')
  }else{
    backTopBtn.classList.remove('show')
  }
})
