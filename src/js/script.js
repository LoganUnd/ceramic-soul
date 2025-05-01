import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css"

import "/src/sass/style.scss";

try {
  new Swiper('.works__slider', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      1920: {
        spaceBetween: 35,
      }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".icon-left-open",
        prevEl: ".icon-right-open",
      },

    modules: [Navigation, Pagination],
  });


console.log("Hello world")

} catch (e) {}