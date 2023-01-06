const contenedor1 = document.getElementById('cont-img');
const contenedor2 = document.getElementById('cont-img2');
const contenedor3 = document.getElementById('cont-img3');
const contenedor4 = document.getElementById('cont-img4');
const element = document.getElementById('element');
const element2 = document.getElementById('element2');
const element3 = document.getElementById('element3');
const element4 = document.getElementById('element4');


// -------------------------CONTENEDOR 1------------------------

contenedor1.addEventListener('mouseenter', () => {
    contenedor1.style.backgroundImage = "url(../img/chihiro.png)";
    contenedor1.style.backgroundSize = "100%";
    contenedor1.style.transition='all 200ms ease';
    contenedor1.style.backgroundRepeat="no-repeat"
    contenedor1.style.backgroundPosition="0em -2em"

    element.style.display = "none";

})

contenedor1.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    
    contenedor1.style.transformOrigin = `${x}px ${y}px`;
    contenedor1.style.transform="scale(1.1)"
})

contenedor1.addEventListener('mouseleave', () => {
    contenedor1.style.backgroundImage = "url('  ')";
    contenedor1.style.transformOrigin='center'
    contenedor1.style.transform='scale(1)'
    element.style.display = "block";

})

// -------------------------CONTENEDOR 2------------------------
contenedor2.addEventListener('mouseenter', () => {
    contenedor2.style.backgroundImage = "url(../img/howl.png)";
    contenedor2.style.backgroundSize = "100%";
    contenedor2.style.transition='all 200ms ease';
    contenedor2.style.backgroundRepeat="no-repeat"
    contenedor2.style.backgroundPosition="0em 2em"
    element2.style.display = "none";

})

contenedor2.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    
    contenedor2.style.transformOrigin = `${x}px ${y}px`;
    contenedor2.style.transform="scale(2)"
})

contenedor2.addEventListener('mouseleave', () => {
    contenedor2.style.backgroundImage = "url('  ')";
    contenedor2.style.transformOrigin='center'
    contenedor2.style.transform='scale(1)'
    element2.style.display = "block";

})

// -------------------------CONTENEDOR 3------------------------
contenedor3.addEventListener('mouseenter', () => {
    contenedor3.style.backgroundImage = "url(../img/eva.png)";
    contenedor3.style.backgroundSize = "100%";
    contenedor3.style.transition='all 200ms ease';
    contenedor3.style.backgroundRepeat="no-repeat"
    contenedor3.style.backgroundPosition="0em 1em"

    element3.style.display = "none";

})

contenedor3.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    
    contenedor3.style.transformOrigin = `${x}px ${y}px`;
    contenedor3.style.transform="scale(1.5)"
})

contenedor3.addEventListener('mouseleave', () => {
    contenedor3.style.backgroundImage = "url('  ')";
    contenedor3.style.transformOrigin='center'
    contenedor3.style.transform='scale(1)'
    element3.style.display = "block";

})

// -------------------------CONTENEDOR 4------------------------

contenedor4.addEventListener('mouseenter', () => {
    contenedor4.style.backgroundImage = "url(../img/sunny.png)";
    contenedor4.style.backgroundSize = "100%";
    contenedor4.style.backgroundPosition="0em -5em"
    contenedor4.style.transition='all 200ms ease';

    element4.style.display = "none";

})

contenedor4.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    
    contenedor4.style.transformOrigin = `${x}px ${y}px`;
    contenedor4.style.transform="scale(1.1)"
})

contenedor4.addEventListener('mouseleave', () => {
    contenedor4.style.backgroundImage = "url('  ')";
    contenedor4.style.transformOrigin='center'
    contenedor4.style.transform='scale(1)'
    element4.style.display = "block";

})