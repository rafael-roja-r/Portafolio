let dat ="";

fetch('https://github.com/rafaelrr1/Portafolio/tree/main/js')
.then(response =>{
    return response.json()   
})

.then(data =>{
    for(let i =0;i<data.length;i++){
        dat +=   `        
        <figure class="skills-img" id="skillsn">
        <div class="skills-img-contenedor">
        <img  class="skills-img-img" src="${data[i].img}" alt="">   
        </div>            
        <figcaption class="skills-detalles">${data[i].nombre} </figcaption>
        </figure>
        `
        document.getElementById("skills").innerHTML=dat;
    }
    
});

