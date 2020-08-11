/*
* Notas:
* sound = sonido
*/

/*
* document.getElementsByName("body")[0].innerHTML = "txt";
* Para que juncione body tiene que tener un mame="body"
*/


/*
* MiAudio: acsede al id="Audio"
* MiAudio.src: al elemento <audio> le incertamos una ruta o direción de un archivo de
* musica (en este caso un pequeño sonido).
* Sonido(): Función que con un click activa y desactiva el audio.
* MiAudio.loop = true : indica que el audio va a ser reproducido de forma constante.
*/

let sound = true;

let MiAudio = document.getElementById("Audio-2");

function ChangeImgOn(){
	document.querySelector(".Musi-Off").src="icono/No_Music.svg";
}

/*-------------------------------------------------------------------*/
//Cambia el icono de volumen cuando termina de reproducirse el audio.//
/*-------------------------------------------------------------------*/
MiAudio.addEventListener('ended', ChangeImgOn);
/*-----------------------------------------------------*/
//Otra forma de cambiar el icono, al terminar el audio.//
/*-----------------------------------------------------*/
/*
MiAudio.addEventListener('ended', (event) => {
	document.querySelector(".Musi-Off").src="icono/No_Music.svg";
})
*/

function Sonido(){
	if(sound){
		document.querySelector(".Musi-Off").src="icono/Si_Music.svg";
		MiAudio.src="Sonido/haha.ogg";	
		MiAudio.volume = 0.7;
		MiAudio.play();	
	}

}

