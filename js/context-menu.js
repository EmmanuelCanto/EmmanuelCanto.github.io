const contextMenu = document.querySelector(".wrapper"),
shareMenu = contextMenu.querySelector(".share-menu");

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth,
    cmHeight = contextMenu.offsetHeight;

    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();

        if(contextMenu.classList.contains('show')) {
            contextMenu.classList.remove('show');
        } else {
            contextMenu.style.top = e.offsetY + 'px';
            contextMenu.style.left = e.offsetX + 'px';
            contextMenu.classList.add('show');
        }
    })

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
    
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => contextMenu.style.visibility = "hidden");

window.onload = () => {
    setTimeout(() => {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    }, )
}

function refrescarPagina() {
    location.reload();
}
