if (window.innerWidth <= 768) {
    const cards = document.querySelectorAll('.teamPage .card');
    cards.forEach(card => {
        var imgFront = card.querySelectorAll('img')[0];
        var imgBack = card.querySelectorAll('img')[1];
        card.addEventListener('click', function() {
            if (window.getComputedStyle(imgFront).opacity==1) {
                imgFront.style.opacity = 0;
            }
            else if (window.getComputedStyle(imgFront).opacity==0) {
                imgFront.style.opacity = 1
            }    
            if (window.getComputedStyle(imgBack).opacity==1) {
                imgBack.style.opacity = 0;
            }
            else if (window.getComputedStyle(imgBack).opacity==0) {
                imgBack.style.opacity = 1
            }    
        });
    })
}