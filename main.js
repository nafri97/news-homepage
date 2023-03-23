const HIGHLIGHT = document.getElementById('highlight')
const NEW = document.getElementById('new')
const CONTAINER = document.getElementById('container')
const MENUOPEN = document.getElementById('openMenu')
const MENUCLOSE = document.getElementById('closeMenu')
const NAVBAR = document.getElementById('navbar')



function newnew(){
    CONTAINER.style.display= 'none'
    HIGHLIGHT.style.display= 'none'
    NEW.style.display= 'block'
    if (window.innerWidth <= 768) {
        NAVBAR.style.display = 'none';
        MENUOPEN.style.display = "block";
        MENUCLOSE.style.display = "none";
      }
}

function poppop(){
    CONTAINER.style.display= 'none'
    HIGHLIGHT.style.display= 'block'
    NEW.style.display= 'none'
    if (window.innerWidth <= 768) {
        NAVBAR.style.display = 'none';
        MENUOPEN.style.display = "block";
        MENUCLOSE.style.display = "none";
      }
}

function tretre(){
    CONTAINER.style.display= 'flex'
    HIGHLIGHT.style.display= 'none'
    NEW.style.display= 'none'
    if (window.innerWidth <= 768) {
        NAVBAR.style.display = 'none';
        MENUOPEN.style.display = "block";
        MENUCLOSE.style.display = "none";
      }
}


function openMenu() {
   NAVBAR.style.display = "block";
   MENUOPEN.style.display = "none";
   MENUCLOSE.style.display = "block";
   
}
   
function closeMenu() {
   NAVBAR.style.display = "none";
   MENUOPEN.style.display = "block";
   MENUCLOSE.style.display = "none";
}

if (window.innerWidth <= 768){
    const categoriesBtn = document.querySelector('.cats > a');
    const dropdown = document.querySelector('.dropdown');
    let clickCount = 0;
    categoriesBtn.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 2 !== 0) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
    });
}
