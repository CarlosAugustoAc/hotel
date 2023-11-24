var menu = document.querySelector('#menu')

function abrir() {
    if(menu.style.width==='0') {

    }
    else {
        menu.style.width = '100%'
    }
}
function voltar() {
    if(menu.style.width==='100%') {
        menu.style.width = '0'
    }
}