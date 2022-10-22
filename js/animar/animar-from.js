window.addEventListener('scroll',function(){
    let animacion = document.getElementById('skillsn');
    let posiobj = animacion.getBoundingClientRect().top;
       let tamañoDepantalla = window.innerHeight/1;

    if (posiobj<tamañoDepantalla){
        animacion.style.animation = 'mover 1s ease-out '
    }

})