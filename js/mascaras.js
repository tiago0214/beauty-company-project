const mascaras = document.querySelector('#mascaras');

let itens = []

let mascarasBag = JSON.parse(localStorage.getItem('bag')) || [];

fetch('../products/products.json')
    .then(response => response.json())
    .then(json => {
        itens = json
        itens.forEach(element => {
            mascaras.appendChild(createProducts(element))
        });
    })


export default function createProducts(produtc) {
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
    bag.innerHTML = `Add to bag`
    bag.onclick = (event) => {
        event.preventDefault()
        mascarasBag.push(produtc);
        reload(mascarasBag);
    }

    ul.appendChild(liImg);
    liImg.appendChild(img)
    ul.appendChild(name);
    ul.appendChild(info);
    info.appendChild(value);
    info.appendChild(bag);

    return ul;
}

function reload(param) {
    localStorage.setItem('bag', JSON.stringify(param));
}