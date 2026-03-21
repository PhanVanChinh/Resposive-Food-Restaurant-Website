//tooogle menu mobile
let navbar = document.querySelector('.header .navbar')
let menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

// swiper slider 
var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// swiper food
var swiper = new Swiper(".food-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// swiper menu 
var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swiper blogs 
var swiper = new Swiper(".blogs-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// food preview
let previewContainer = document.querySelector('.food-preview-container')
let previewBox = document.querySelectorAll('.food-preview-container .food-preview')

document.querySelectorAll('.food .slide').forEach(food => {
  food.onclick = () => {
    previewContainer.style.display = 'flex'
    let name = food.getAttribute('data-name')
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target')
      if(name === target) {
        preview.classList.add('active')
      }
    })
  }
})

previewContainer.querySelector('#close-preview').onclick = () => {
  previewContainer.style.display = 'none'
  previewBox.forEach(preview => {
    preview.classList.remove('active')
  })
}