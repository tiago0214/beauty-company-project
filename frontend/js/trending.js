// import createProducts from "./mascaras.js";
const icon = document.querySelector('.icon');
const trending = document.querySelector('#trend');
let itens = []

let trendingBag = JSON.parse(localStorage.getItem('bag')) || [];
// let hearthBagTrendings = JSON.parse(localStorage.getItem('hearth')) || [];

const server = 'https://beauty-company-project-backend-euk8xevgx.vercel.app'

fetch(`${server}/trendings`)
    .then(response => response.json())
    .then(json => {
        itens = json
        itens.forEach(element => {
            trending.appendChild(createTrend(element))
        });
    })

function createTrend(produtc) {
    const ul = document.createElement('ul');
    ul.classList.add('item__item');

    const liImg = document.createElement('li');
    liImg.classList.add('item__img');
    const img = document.createElement('img');
    img.classList.add('item__img');
    img.setAttribute('src', produtc.img)

    const name = document.createElement('li');
    name.classList.add('name');
    name.innerHTML = `${produtc.name}`

    const info = document.createElement('li');
    info.classList.add('info');
    const value = document.createElement('p');
    value.classList.add('value');
    value.innerHTML = `${produtc.value}`

    const bag = document.createElement('a');
    bag.setAttribute('href', '#');
    bag.classList.add('add__bag');
    bag.innerHTML = `<ion-icon name="cart"></ion-icon>`
    bag.onclick = (event) => {
        event.preventDefault()
        trendingBag.push(produtc);
        reload(trendingBag);
        updateIcon();
        popup();
    }

    const bagHearth = document.createElement('a');
    bagHearth.setAttribute('href', '#')
    bagHearth.classList.add('add__bag');
    bagHearth.innerHTML = `<ion-icon name="heart"></ion-icon>`
    bagHearth.onclick = (event) => {
        event.preventDefault()
        hearthBag.push(produtc)
        reloadHearth(hearthBag)
        updateHearth();
        popup();
    }

    ul.appendChild(liImg);
    liImg.appendChild(img)
    ul.appendChild(name);
    ul.appendChild(value);
    ul.appendChild(info);
    info.appendChild(bag);
    info.appendChild(bagHearth);

    return ul;
}

function reload(param) {
    localStorage.setItem('bag', JSON.stringify(param));
}

function reloadHearth(param) {
    localStorage.setItem('hearth', JSON.stringify(param));
}

function updateIcon() {
    icon.innerHTML = `${trendingBag.length}`

    if (icon.innerHTML > 9) {
        icon.style.transform = "translate(-140%, 60%)";
    } else {
        icon.style.transform = "translate(-220%, 60%)";
    }
}

updateIcon();