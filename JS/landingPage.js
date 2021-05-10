window.addEventListener("scroll",function(){
    const landing = document.querySelector('.landing');
    landing.classList.toggle('sticky',window.scrollY > 0)
})

window.addEventListener("load",function(){
    const landing = document.querySelector('.landing');
    landing.classList.toggle('sticky',window.scrollY > 0)
})


function scrollToTop(){
    window.scrollBy(0,-document.body.scrollHeight);
}

function scrollDown(){
    window.scrollBy(0,10)
}