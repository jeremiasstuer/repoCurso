 
    let contador= 0;
    const botonU = 1;
    const botonD = 5;
    const botonT = 10;
    const botonC = -1;
    const botonCi = -5;
    const botonS = -10;
    
function accion(numero){
    const sound = new Audio("./musica/kirby-victory.mp3")
    contador+= numero
    document.getElementById("contClick").innerText = contador;
    if(contador === 50){
        document.getElementById("contClick").innerText = "Llegaste a la mitad del juego";
    } else if(contador === 100){
        document.getElementById("contClick").innerText = "Ganaste el juego llegaste a 100" ;
        sound.play();
    }else if(contador >= 101){
        contador=0
        document.getElementById("contClick").innerText = "Te pasaste volve a intentar";
    };
 };