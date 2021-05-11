window.addEventListener("scroll",function(){
    const landing = document.querySelector('.citiesPage');
    if (window.scrollY > 0){
        landing.style.top = "100px";
    }
    else{
        landing.style.top = "100vh";
    }
})

window.addEventListener("load",function(){
    const landing = document.querySelector('.citiesPage');
    if (window.scrollY > 0){
        landing.style.top = "100px";
    }
    else{
        landing.style.top = "100vh";
    }
})