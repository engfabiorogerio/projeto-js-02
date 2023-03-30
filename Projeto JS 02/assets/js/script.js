var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){
    let vencedor = document.querySelector('.vencedor');
    if(playerOpt == "papel"){
        if(inimigoOpt == "papel"){
            vencedor.style.color="blue";
            vencedor.innerHTML="Empate";
        }else if(inimigoOpt == "tesoura"){
            vencedor.style.color="red";
            vencedor.innerHTML="Derrota";
        }else if(inimigoOpt == "pedra"){
            vencedor.style.color="green";
            vencedor.innerHTML="Vitória";
        }
    }    
    if(playerOpt == "pedra"){
        if(inimigoOpt == "papel"){
            vencedor.style.color="red";
            vencedor.innerHTML="Derrota";
        }else if(inimigoOpt == "tesoura"){
            vencedor.style.color="green";
            vencedor.innerHTML="Vitória";
        }else if(inimigoOpt == "pedra"){
            vencedor.style.color="blue";
            vencedor.innerHTML="Empate";
        }
    }    
    if(playerOpt == "tesoura"){
        if(inimigoOpt == "papel"){
            vencedor.style.color="green";
            vencedor.innerHTML="Vitória";
        }else if(inimigoOpt == "tesoura"){
            vencedor.style.color="blue";
            vencedor.innerHTML="Empate";
        }else if(inimigoOpt == "pedra"){
            vencedor.style.color="red";
            vencedor.innerHTML="Derrota";
        }
    }    
}

function resetInimigo() {
    const enemyOptions = document.querySelectorAll('.enemy-options div > img');
    for(var i = 0; i < enemyOptions.length; i++) {
        enemyOptions[i].style.opacity = 0.3;
    }
}


function inimigoJogar() {
    let rand = Math.floor(Math.random()*3);
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i=0; i < enemyOptions.length; i++) {
        if(i == rand) {
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();
   
}

function resetOpacityPlayer() {
    for(i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

       inimigoJogar();
    })
}

    