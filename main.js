const menu = document.getElementById('menu');
const listaItens = document.getElementById('lista');

menu.addEventListener('click', (event) => {
    event.preventDefault();
    if (listaItens.style.display === "block") {
        listaItens.style.display = 'none';
    } else {
        listaItens.style.display = "block";
    }
})