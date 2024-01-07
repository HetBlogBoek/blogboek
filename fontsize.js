let isMobile = window.matchMedia("(max-width: 1000px)")
let bigFontDesktop = '1.8rem';
let mediumFontDesktop = '1.4rem';
let smallFontDesktop = '1rem';
let bigFontMobile = '3.3rem';
let mediumFontMobile = '2.8rem';
let smallFontMobile = '2.0rem';

document.getElementById('fontBig').addEventListener('click', function() {
    if(isMobile.matches){
        document.body.style.fontSize = bigFontMobile;
    }else{
        console.log("aub")
        document.body.style.fontSize = bigFontDesktop;
    }
});

document.getElementById('fontMedium').addEventListener('click', function() {
    if(isMobile.matches){
        document.body.style.fontSize = mediumFontMobile;
    }else{
        document.body.style.fontSize = mediumFontDesktop;
    }
});

document.getElementById('fontSmall').addEventListener('click', function() {
    if(isMobile.matches){
        document.body.style.fontSize = smallFontMobile;
    }else{
        document.body.style.fontSize = smallFontDesktop;
    }
});
