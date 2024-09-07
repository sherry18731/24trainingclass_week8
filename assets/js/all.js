// 使用：index-banner md
const swiper1 = new Swiper(".simpleSwiper", {
  // slidesPerView: 1.1,
  // spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 使用：index-banner mobile
const swiper2 = new Swiper(".SpaceBetweenSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
});

// 使用：index-募資課程
const swiper3 = new Swiper(".rowSwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row"
      }
    }
  }
});

// 使用：index-大家都買了
const swiper4 = new Swiper(".perSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      996: {
        slidesPerView: 4,/*(一次呈現幾張)*/
        spaceBetween: 24 ,
      },
    },
});

// 使用：index-想學什麼
const swiper5 = new Swiper(".rowSwiper-sm", {
  slidesPerView: 1.2,
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  },
  grid: {
    fill:"row",
    rows: 2,
  },
  spaceBetween: 24,
  breakpoints: {
    992: {      
      grid: { 
        rows: 4,
      },
      slidesPerView: 2,
    }
  }
});