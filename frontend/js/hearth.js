const favorites = document.getElementById('favorites');
const empty = document.querySelector('.empty__heart');

let hearth = JSON.parse(localStorage.getItem('hearth')) || [];

hearth.forEach(element => {
    favorites.appendChild(createPro(element));
});

function createPro(produtc) {
    const ul = document.createElement('ul');
    ul.classList.add('itens__bag--item');

    const liImg = document.createElement('li');
    liImg.classList.add('item__img');
    const img = document.createElement('img');
    img.classList.add('item__img');
    img.setAttribute('src', `.${produtc.img}`)

    const name = document.createElement('li');
    name.classList.add('name');
    name.innerHTML = `${produtc.name}`

    const info = document.createElement('li');
    info.classList.add('bag__info');
    const value = document.createElement('p');
    value.classList.add('value');
    value.innerHTML = `${produtc.value}`

    const bag = document.createElement('a');
    bag.setAttribute('href', '#');
    bag.classList.add('bag__remove');
    bag.innerHTML = `Remove`


    ul.appendChild(liImg);
    liImg.appendChild(img)
    ul.appendChild(name);
    ul.appendChild(info);
    info.appendChild(value);
    info.appendChild(bag);

    bag.onclick = (event) => {
        event.preventDefault();

        produtc.remove = true;
        ul.remove();
        removeItem();
        updateHearthBag();
        console.log(hearth.length)
    }

    return ul;
}

function removeItem() {
    hearth = hearth.filter((item) => {
        return !item.remove == true
    })
    reload(hearth);
}

function updateHearthBag() {
    if (hearth.length === 0) {
        hearthIcon.innerHTML = `<ion-icon name="heart-outline"></ion-icon>`
        hearthIcon.style.color = "lightpink";
    } else {
        hearthIcon.innerHTML = `<ion-icon name="heart"></ion-icon>`
        hearthIcon.style.color = "lightpink";
    }
}

function reload(param) {
    localStorage.setItem('hearth', JSON.stringify(param));
}

if (hearth.length === 0) {
    empty.innerHTML = `You haven't added any items to your favorites yet!`
} else {
    empty.style.display = "none";
}