const menu = document.getElementById('menu');
const menuBag = document.getElementById('menu--bag');

const listaItens = document.getElementById('lista');
const listaItensBag = document.getElementById('lista--bag');

const sellProducts = document.querySelector('.swiper-wrapper');
const mascaras = document.querySelector('#mascaras');

const trendings = document.querySelector('#trendings');

let itensSell = []
let itensTrending = []

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
    link.innerHTML = `ADD TO BAG`


    slide.appendChild(ul)
    ul.appendChild(imgParent);
    ul.appendChild(name);
    ul.appendChild(value);
    ul.appendChild(linkParent);

    imgParent.appendChild(img);
    linkParent.appendChild(link);

    return slide
}

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

function createProducts(produtc) {
    const ul = document.createElement('ul');
    ul.classList.add('item__item');

    const liImg = document.createElement('li');
    liImg.classList.add('item__img');
    const img = document.createAttribute('img');
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
    bag.classList.add('add__bag');
    bag.innerHTML = `Add to bag`

    ul.appendChild(liImg);
    liImg.appendChild(img)
    ul.appendChild(name);
    ul.appendChild(info);
    info.appendChild(value);
    info.appendChild(bag);

    return ul;
}
