let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    navbar.classList.remove('active');
};

let body = document.body;

let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
    account.classList.add('active');
};

document.querySelector('#close-account span').onclick = () => {
    account.classList.remove('active');
};

let myorders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () => {
    myorders.classList.add('active');
    body.style.overflow = 'hidden';
};

document.querySelector('#close-orders span').onclick = () => {
    myorders.classList.remove('active');
};

let shopping_cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shopping_cart.classList.add('active');
};

document.querySelector('#close-cart span').onclick = () => {
    shopping_cart.classList.remove('active');
};


let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index=0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 5000)

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acce => {
    acce.onclick = () => {
        acce.classList.toggle('active');
    }
})
