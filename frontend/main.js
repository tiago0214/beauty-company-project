const menu = document.getElementById('menu');
const menuBag = document.getElementById('menu--bag');
const icon = document.querySelector('.icon');
const hearthIcon = document.querySelector('.hearth');

const listaItens = document.getElementById('lista');
const listaItensBag = document.getElementById('lista--bag');

const sellProducts = document.querySelector('.swiper-wrapper');
const trendings = document.querySelector('#trendings');

fetch('./assets/products/mascaras.json')
    .then(response => response.json())
    .then((jsonList) => {
        sellProducts.innerHTML = ""
        jsonList.forEach(element => {
            sellProducts.appendChild(createElement(element))
        })
    })

fetch('./assets/products/trendigs.json')
    .then(response => response.json())
    .then((jsonList) => {
        trendings.innerHTML = ""
        jsonList.forEach(element => {
            trendings.appendChild(createElement(element))
        })
    })


let bag = JSON.parse(localStorage.getItem('bag')) || [];
let hearthBag = JSON.parse(localStorage.getItem('hearth')) || [];

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
    const hearth = document.createElement('a');
    hearth.setAttribute('href', '#')
    hearth.classList.add('container__sell--card--item--link');
    hearth.innerHTML = `<ion-icon name="heart"></ion-icon>`;
    hearth.onclick = (event) => {
        event.preventDefault()
        hearthBag.push(product)
        reloadHearth(hearthBag)
        updateHearth();
        popup();
    }

    slide.appendChild(ul)
    ul.appendChild(imgParent);
    ul.appendChild(name);
    ul.appendChild(value);
    ul.appendChild(linkParent);

    imgParent.appendChild(img);
    linkParent.appendChild(link);
    linkParent.appendChild(hearth)

    return slide
}


function reload(param) {
    localStorage.setItem('bag', JSON.stringify(param));
}

function reloadHearth(param) {
    localStorage.setItem('hearth', JSON.stringify(param));
}

function updateIcon() {
    icon.innerHTML = `${bag.length}`

    if (icon.innerHTML > 9) {
        icon.style.transform = "translate(-140%, 60%)";
    } else {
        icon.style.transform = "translate(-220%, 60%)";
    }
}
function updateHearth() {
    if (hearthBag.length === 0) {
        hearthIcon.innerHTML = `<ion-icon name="heart-outline"></ion-icon>`
        hearthIcon.style.color = "lightpink";
    } else {
        hearthIcon.innerHTML = `<ion-icon name="heart"></ion-icon>`
        hearthIcon.style.color = "lightpink";
    }
}

updateIcon();
updateHearth();

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

