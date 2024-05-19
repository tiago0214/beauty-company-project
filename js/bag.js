const bagHere = document.querySelector('.itens__bag');
const itensElement = document.querySelector('.itens__value')
const valueDocument = document.querySelector('.total__value')
const bagEmpty = document.querySelector('.empty');

let bagy = JSON.parse(localStorage.getItem('bag')) || [];

if (bagy.length === 0) {
    bagEmpty.innerHTML = `Your bag is empty!`
} else {
    bagEmpty.style.display = "none";
}

let totalValue = 0;
let totalItens = bagy.length;
let selectObject = 0;


bagy.forEach(element => {
    totalValue += Number(element.value.substring(2));
})

bagy.forEach(element => {
    bagHere.appendChild(createPro(element))
});


function createPro(produtc) {
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
    bag.innerHTML = `Remove`


    ul.appendChild(liImg);
    liImg.appendChild(img)
    ul.appendChild(name);
    ul.appendChild(info);
    info.appendChild(value);
    info.appendChild(bag);

    bag.onclick = (event) => {
        event.preventDefault();
        selectObject = Number(produtc.value.substring(2));

        produtc.remove = true;
        ul.remove();
        removeItem();
        updateValue();


    }

    return ul;
}

function updateValue() {
    totalValue -= selectObject

    itensElement.innerHTML = `${bagy.length}`
    valueDocument.innerHTML = `R$ ${totalValue}`
}


function removeItem() {
    bagy = bagy.filter((item) => {
        return !item.remove == true
    })
    reload(bagy);
}

function reload(param) {
    localStorage.setItem('bag', JSON.stringify(param));
}

updateValue();