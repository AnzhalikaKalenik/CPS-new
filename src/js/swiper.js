import Swiper from 'swiper/bundle';

new Swiper('.content-swiper', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // slidesPerView: 1,
    spaceBetween: 16,
    // watchOverflow: true,
});

//brands 
const readMore = document.querySelector('.read-more');
const tablets = document.querySelectorAll('.tablet'); 
const desktops = document.querySelectorAll('.desktop');

readMore.addEventListener('click', function() {
    this.classList.toggle('open');

    if(window.innerWidth > 767) {

        for (let i=0; i<tablets.length; i++) {
            let tablet=tablets[i];
            tablet.classList.toggle('open');
        };
        for (let i=0; i<desktops.length; i++) {
            let desktop=desktops[i];
            desktop.classList.toggle('open');
        }
    }

    else if(window.innerWidth > 1119) {

        for (let i=0; i<desktops.length; i++) {
            let desktop=desktops[i];
            desktop.classList.toggle('open');
        }
    }
})


//technics-version
const readMoreTechnics = document.querySelector('.read-more-technics');
const tabletsTechnics = document.querySelectorAll('.tablet-technics'); 
const desktopsTechnics = document.querySelectorAll('.desktop-technics');

readMoreTechnics.addEventListener('click', function() {
    this.classList.toggle('open');

    if(window.innerWidth > 767) {

        for (let i=0; i<tabletsTechnics.length; i++) {
            let tabletTechnics=tabletsTechnics[i];
            tabletTechnics.classList.toggle('open');
        };
        for (let i=0; i<desktopsTechnics.length; i++) {
            let desktopTechnics=desktopsTechnics[i];
            desktopTechnics.classList.toggle('open');
        }
    }

    else if(window.innerWidth > 1119) {

        for (let i=0; i<desktopsTechnics.length; i++) {
            let desktopTechnics=desktopsTechnics[i];
            desktopTechnics.classList.toggle('open');
        }
    }
})