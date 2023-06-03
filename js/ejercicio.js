//let opcionPuntaje = '';
//const intento = document.getElementById('intento');
//const document.getElementById('correcto');
//const document.getElementById('incorrecto');
const correcto= () =>{

    document.getElementById('mensaje').innerHTML =' Felicitaciones, has seleccionado la opcion correcta' ;
    document.getElementById('imagenInicial').src = './img/pcolor.jpg';
    document.getElementById('puntaje').innerHTML= '5';
    document.getElementById('intento').innerHTML= '1';

}







const incorrecto = () => {

    document.getElementById('mensaje').innerHTML = 'Pokémon incorrecto, intentelo nuevamente';
    document.getElementById('imagenInicial').src = './img/pcolor.jpg';
    document.getElementById('puntaje').innerHTML= '3';
    document.getElementById('intento').innerHTML= '2';


}

const reiniciar = () => {
    
    document.getElementById('mensaje').innerHTML = '';
    document.getElementById('imagenInicial').src = './img/pnegro.jpg';
    document.getElementById('intento').innerHTML = '0';
    document.getElementById('puntaje').innerHTML = '0';
}

