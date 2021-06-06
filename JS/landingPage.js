window.addEventListener("scroll",function(){
    const landing = document.querySelector('.landing');
    const orgInfoPage = document.querySelector('.orgInfoPage');
    landing.classList.toggle('sticky',window.scrollY > 0)
    if (window.scrollY > 0) {
        orgInfoPage.style.marginTop = '30vh';
    }
    else {
        orgInfoPage.style.marginTop = '100vh';
    }
})

window.addEventListener("load",function(){
    const landing = document.querySelector('.landing');
    const orgInfoPage = document.querySelector('.orgInfoPage');
    landing.classList.toggle('sticky',window.scrollY > 0)
    if (window.scrollY > 0) {
        orgInfoPage.style.marginTop = '30vh';
    }
    else {
        orgInfoPage.style.marginTop = '100vh';
    }
})


function scrollToTop(){
    console.log(-document.body.scrollHeight);
    window.scrollBy(0,-document.body.scrollHeight);
}

function scrollDown(){
    window.scrollBy(0,10)
}

const nav = document.querySelector(".landing nav");
const toggleIcon = document.querySelector(".landing nav .toggleIcon");
toggleIcon.addEventListener('click', function() {
  nav.classList.toggle('active');
})