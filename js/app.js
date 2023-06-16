let header = document.querySelector ('.header');
let navToggle = document.querySelector ('.navToggle');
let nav = document.querySelector ('.header__nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('header__show');
})

window.addEventListener('scroll', function() {
  let showMeScroll = scrollY;

  if (showMeScroll > 900) {
    header.classList.add ('header__shadow');
  } else {
    header.classList.remove ('header__shadow');
  }

  console.log (showMeScroll);
})

const anchors = document.querySelectorAll('a[href*="#"]');
 
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

const swiper = new Swiper(".swiper", {
  pagination: {
      el: ".swiper-pagination",
  },

  autoplay: {
      delay: 55000,
      disableOnInteraction: false,
    },
});
