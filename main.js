const menu = document.getElementById('menu');
const menuBag = document.getElementById('menu--bag');
const icon = document.querySelector('.icon');

const listaItens = document.getElementById('lista');
const listaItensBag = document.getElementById('lista--bag');

const sellProducts = document.querySelector('.swiper-wrapper');
const trendings = document.querySelector('#trendings');

let itensSell = []
let itensTrending = []

let bag = JSON.parse(localStorage.getItem('bag')) || [];

menu.addEventListener('click', (event) => {
    event.preventDefault();
    if (listaItens.style.display === "block") {
        listaItens.style.display = 'none';
    } else {
        listaItens.style.display = "block";
    }
})

function createElement(product) {

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.style.display = "flex";

    const ul = document.createElement('ul');
    ul.classList.add('container__sell--card');

    const imgParent = document.createElement('li');
    imgParent.classList.add('container__sell--card--img');

    const img = document.createElement('img');
    img.classList.add('container__sell--card--img');
    img.setAttribute('src', product.img);

    const name = document.createElement('li');
    name.classList.add('container__sell--card--name');
    name.innerHTML = `${product.name}`

    const value = document.createElement('li');
    value.classList.add('container__sell--card--value');
    value.innerHTML = `${product.value}`

    const linkParent = document.createElement('li');
    linkParent.classList.add('container__sell--card--link');

    const link = document.createElement('a');
    link.setAttribute('href', '#')
    link.classList.add('container__sell--card--item--link');
    link.innerHTML = `<ion-icon name="cart"></ion-icon>`
    link.onclick = (event) => {
        event.preventDefault()
        bag.push(product);
        reload(bag);
        updateIcon();
        popup();
    }
    const heart = document.createElement('a');
    heart.setAttribute('href', '#')
    heart.classList.add('container__sell--card--item--link');
    heart.innerHTML = `<ion-icon name="heart"></ion-icon>`


    slide.appendChild(ul)
    ul.appendChild(imgParent);
    ul.appendChild(name);
    ul.appendChild(value);
    ul.appendChild(linkParent);

    imgParent.appendChild(img);
    linkParent.appendChild(link);
    linkParent.appendChild(heart)

    return slide
}

function loading() {
    fetch('./products/products.json')
        .then((response) => response.json())
        .then((json) => {
            itensSell = json
            sellProducts.innerHTML = ""
            itensSell.forEach(element => {
                sellProducts.appendChild(createElement(element))
            });
        })

    fetch('./products/trendings.json')
        .then((response) => response.json())
        .then((json) => {
            itensTrending = json
            trendings.innerHTML = ""
            itensTrending.forEach((element) => {
                trendings.appendChild(createElement(element));
            })
        })
}



function reload(param) {
    localStorage.setItem('bag', JSON.stringify(param));
}

function updateIcon() {
    icon.innerHTML = `${bag.length}`

    if (icon.innerHTML > 9) {
        icon.style.transform = "translate(-140%, 60%)";
    } else {
        icon.style.transform = "translate(-220%, 60%)";
    }
}

updateIcon();

function popup() {
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    function showPopup() {
        popup.classList.remove('hidden');
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 3000);
    }

    closePopupButton.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    showPopup();

}

