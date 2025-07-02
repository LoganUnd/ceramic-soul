import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css"

import "/src/sass/style.scss";
import JustValidate from 'just-validate';

const burger = document.querySelector(".burger"),
	close = document.querySelector(".header__menu-close"),
	menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
	menu.classList.add("header__menu-active");
	document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
	menu.classList.remove("header__menu-active");
	document.body.style.overflow = "";
});

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

try {
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content-item, .catalog__content-item-3");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Remove active class from all tabs
			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			
			// Hide all content sections
			contents.forEach((c) => {
				c.style.display = "none";
			});

			// Add active class to clicked tab
			tab.classList.add("catalog__tab_active");
			
			// Show corresponding content
			if (contents[index]) {
				contents[index].style.display = "flex";
			}
		});
	});

	// Show first content on page load
	contents.forEach((c, i) => {
		c.style.display = i === 0 ? "flex" : "none";
	});
} catch (e) {
	console.error("Error in tab switching:", e);
}

// Обратите внимание, что значение block (в двух местах) можно спокойно

try {
  const validator = new JustValidate('#basic_form', {
    submitFormAutomatically: true 
  });

  validator
    .addField('#name', [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "more big please",
      }
    ])

    .addField('#email', [
      {
        rule: 'required',
      },
      {
        rule: 'email',
        errorMessage: "it's not email its bullshit"
      }
    ])

    .addField('#question', [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 5,
      },
    ], {
      errorsContainer : document.querySelector ('#question').parentElement.querySelector ('.error-message'),
    }
    )


    .addField('#checkbox', [ 
      {
        rule: 'required', 
      }
    ],
    {
    errorsContainer: document
      .querySelector ("#checkbox")
      .parentElement.parentElement.querySelector(".checkbox-error-message"),
    
    }
  )
  .onSuccess((event) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    console.log("Form submitted successfully!");
    console.log("Form data:", Object.fromEntries(formData));

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success", data);
        form.reset();
      });
  });

  } catch (e) {}


  

try {
  const footerValidator = new JustValidate('#footer_scripts', {
    submitFormAutomatically: true
  });

  footerValidator.addField('#footer_email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
      errorMessage: "it's not email its bullshit",
    }
  ]);

  footerValidator.addField('#footer_checkbox', [ 
    {
      rule: 'required',
      errorMessage: "you must to accept this terms", 
    }
  ]);

  footerValidator.onSuccess((event) => {
    const form = event.currentTarget;
    const formData = new FormData(form);

    console.log("Footer form submitted successfully!");
    console.log("Footer form data:", Object.fromEntries(formData));

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Footer form success", data);
        form.reset();
      })
      .catch((error) => {
        console.error("Error submitting footer form:", error);
      });
  });

} catch (e) {
  console.error("Error setting up footer form validation:", e);
}
