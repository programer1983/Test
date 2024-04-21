const burgerMenu = document.querySelector(".header__burger")
const menuList  = document.querySelector(".header__list-menu")
const html  = document.querySelector("html")


burgerMenu.addEventListener('click', openMenu)

function openMenu(){
  menuList.classList.toggle('open')
  burgerMenu.classList.toggle('active')
  html.classList.toggle('html-hidden')
}

 /* =================================================================================== */

 menuList.querySelectorAll(".header_link-menu").forEach(link => {
  link.addEventListener("click", () => {
      burgerMenu.classList.remove("active")
      menuList.classList.remove("open")
      html.classList.remove("html-hidden")
  })
})


/* =================================================================================== */

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  });


  /* =================================================================================== */

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  }

  ScrollReveal().reveal('.top__content-subtitle', {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal('.top__content-title', {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal('.top__content-text', {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal('.top__content-buttons', {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal('.about__image', {
    ...scrollRevealOption,
    delay: 500,
    origin: "left",
  });
  ScrollReveal().reveal('.about__title', {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal('.about__text', {
    ...scrollRevealOption,
    delay: '500',
  });
  ScrollReveal().reveal('.about__scils', {
    ...scrollRevealOption,
    delay: "1000",
  });

  ScrollReveal().reveal('.service__item', {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal('.blog__item', {
    ...scrollRevealOption,
    interval: 500,
  });


  /* =========================================================================================  */
 
  const animItems = document.querySelectorAll('.resume__item')

  if (animItems.length > 0){
      window.addEventListener('scroll', animOnScroll)
      function animOnScroll(){
          for (let index = 0; index < animItems.length; index++){
              const animItem = animItems[index]
              const animItemHeight = animItem.offsetHeight
              const animItemOffset = offset(animItem).top
              const animStart = 4
  
              let animItemPoint = window.innerHeight - animItemHeight / animStart
  
              if (animItemHeight > window.innerHeight){
                  animItemPoint = window.innerHeight - window.innerHeight  / animStart
              }
  
              if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                  animItem.classList.add('active')
              }else{
                  if (!animItem.classList.contains('anim-no-haight')){
                      animItem.classList.remove('active')
                  }
              }
          }
      }
      function offset(el){
          const rect = el.getBoundingClientRect()
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
          scrollTop = window.pageYOffset || document.documentElement.scrollTop
          return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
      }
      setTimeout(() => {
          animOnScroll()
      }, 300)
  }

  /* ==================================================================================  */

  const anchors = document.querySelectorAll('[href*="#"]');

  anchors.forEach(anchor => {
      anchor.addEventListener("click", (event) => {
          event.preventDefault()

          const blockID = anchor.getAttribute("href").substring(1)
          document.getElementById(blockID).scrollIntoView({
              behavior: "smooth",
              block: "start",
          })
      })
  })


  