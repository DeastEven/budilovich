const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__menu');
const body = document.querySelector('.body');
const openModBtn = document.querySelectorAll('.open-modal__btn');
const closeModBtn = document.querySelectorAll('.modal__close');
const modal = document.getElementById('modal');
const programmItem = document.querySelectorAll('.programm__item');
const answerItem = document.querySelectorAll('.answer__item');
const burgerMenuLink = document.querySelectorAll('.bg-menu__link');
const modal2 = document.getElementById('modal-2');
const reviewBtn = document.getElementById('review-btn');
const modalThank = document.getElementById('modal-thank');

const sendRevBtn = document.getElementById('send-rev-btn').addEventListener('click', (item) => {
    item.preventDefault();
    modalThank.classList.add('active');
    modal2.classList.remove('active');

})


reviewBtn.addEventListener('click', () => {
    modal2.classList.add('active');
    body.classList.add('hidden');

})



burgerMenuLink.forEach(item => {
    item.addEventListener('click', () => {
        burgerMenu.classList.remove('active')
        burger.classList.remove('active');
        body.classList.remove('hidden');
    })
})


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            top: "start"
        })
    })
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('hidden');

})
openModBtn.forEach(item => {
    item.addEventListener('click', () => {
        modal.classList.add('active');
        body.classList.add('hidden');

    })
})

closeModBtn.forEach(item => {
    item.addEventListener('click', () => {
        modalThank.classList.remove('active');
        modal2.classList.remove('active');
        modal.classList.remove('active');
        body.classList.remove('hidden');

    })
})

programmItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')

    })
})
answerItem.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')

    })
})


new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 90,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centerdSlides: true,
});