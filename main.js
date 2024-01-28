const navItems = document.querySelector('#nav-items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');


openNavBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
})


const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav)

// Testimonials Section (Swipe.js)//

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //Responsive Breakpoints
    breakpoints: {
        // When window width is >= 100px
      
        100: {
            slidesPerView: 1
        },
  // When window width is >= 600px
        600: {
            slidesPerView: 2
        },


        // When window width is >= 1024px

        1024: {
            slidesPerView: 3
        }
    }




});