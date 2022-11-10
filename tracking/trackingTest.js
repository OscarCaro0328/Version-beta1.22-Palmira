const documento = document.getElementsByClassName("u-body u-xl-mode");
let pagina = window.location.pathname;
const ONE_SECOND = 1000;
let totalTime = 0;
let fecha = new Date();

//snippet para evitar que no se genere error si no se ha definido la cookie de clicksTotal todavia.
if (getCookie("clicksTotal") == "undefined" || getCookie("clicksTotal") == "") {
  createCookie("clicksTotal", 0);
}

//snippet para crear cookie inicialmente
if (getCookie("clicksVideos") == "undefined" || getCookie("clicksVideos") == "") {
  createCookie("clicksVideos", 0);
}

//snippet para crear cookie inicialmente
if (getCookie("clicksMusica") == "undefined" || getCookie("clicksMusica") == "") {
  createCookie("clicksMusica", 0);
}

//snippet para crear cookie inicialmente
if (getCookie("clicksPeliculas") == "undefined" || getCookie("clicksPeliculas") == "") {
  createCookie("clicksPeliculas", 0);
}

//snippet para crear cookie inicialmente
if (getCookie("clicksJuegos") == "undefined" || getCookie("clicksJuegos") == "") {
  createCookie("clicksJuegos", 0);
}

//snippet para crear cookie inicialmente
if (getCookie("clicksRelajacion") == "undefined" || getCookie("clicksRelajacion") == "") {
  createCookie("clicksRelajacion", 0);
}

//snippet para crear cookie inicialmente
if (getCookie("clicksPodcast") == "undefined" || getCookie("clicksPodcast") == "") {
  createCookie("clicksPodcast", 0);
}

/*
const menuHamburguesa = document.getElementsByClassName("u-menu u-menu-hamburger u-offcanvas u-menu-1");
menuHamburguesa[1].addEventListener("click", conteoClicksVideos);
menuHamburguesa[2].addEventListener("click", conteoClicksMusica);
menuHamburguesa[3].addEventListener("click", conteoClicksPeliculas);
menuHamburguesa[4].addEventListener("click", conteoClicksJuegos);
menuHamburguesa[5].addEventListener("click", conteoClicksRelajacion);
menuHamburguesa[6].addEventListener("click", conteoClicksPodcast);
*/

//switch case para diferentes acciones en las diferentes pagina
switch (pagina) {
  case "/webapp/Inicio.html":
    createCookie("pagina", pagina);
    //Estos elementos solo estan disponibles en la pagina inicio, para evitar errores solo se llaman en la pagina inicio.
    const clicVideo = document.getElementsByClassName(
      "u-align-left u-container-style u-grey-80 u-list-item u-radius-5 u-repeater-item u-shape-round u-list-item-1"
    );
    const clicks = document.getElementsByClassName(
      "u-align-left-xs u-container-style u-grey-80 u-list-item u-radius-5 u-repeater-item u-shape-round"
    );
    //Adding an event listener to the video card
    clicVideo[0].addEventListener("click", conteoClicksVideos);
    clicks[0].addEventListener("click", conteoClicksMusica);
    clicks[1].addEventListener("click", conteoClicksPeliculas);
    clicks[2].addEventListener("click", conteoClicksJuegos);
    clicks[3].addEventListener("click", conteoClicksRelajacion);
    clicks[4].addEventListener("click", conteoClicksPodcast);
    break;
  case "/webapp/Videos.html":
    createCookie("pagina", pagina);
    break;
  case "/webapp/Musica.html":
    createCookie("pagina", pagina);
    break;
  case "/webapp/Peliculas.html":
    createCookie("pagina", pagina);
    break;
  case "/webapp/Juegos.html":
    createCookie("pagina", pagina);
    break;
  case "/webapp/Relajacion.html":
    createCookie("pagina", pagina);
    break;
  default:
    createCookie("pagina", pagina);
}


//Event listener y funcion para contar los clicks en todo el documento.
let clicksTotal = getCookie("clicksTotal");
documento[0].addEventListener("click", conteoClicksTotal);
function conteoClicksTotal() {
  clicksTotal++;
  createCookie("clicksTotal", clicksTotal);
  
}

//Funciones adicionales para rastreo de clicks en pagina inicio
let clicksVideos = getCookie("clicksVideos");

function conteoClicksVideos() {
  console.log('hamburguesa videos')
  clicksVideos ++;
  createCookie("clicksVideos", clicksVideos);
  fetch('http://192.168.1.1/webapp/tracking/track.php');

}

let clicksMusica = getCookie("clicksMusica");

function conteoClicksMusica() {
  console.log('hamburguesa musica')
  clicksMusica ++;
  createCookie("clicksMusica", clicksMusica);
  fetch('http://192.168.1.1/webapp/tracking/track.php');
}

let clicksPeliculas = getCookie("clicksPeliculas");
function conteoClicksPeliculas() {
  clicksPeliculas ++;
  createCookie("clicksPeliculas", clicksPeliculas);
  fetch('http://192.168.1.1/webapp/tracking/track.php');
}

let clicksJuegos = getCookie("clicksJuegos");
function conteoClicksJuegos() {
  clicksJuegos ++;
  createCookie("clicksJuegos", clicksJuegos);
  fetch('http://192.168.1.1/webapp/tracking/track.php');
}

let clicksRelajacion = getCookie("clicksRelajacion");
function conteoClicksRelajacion() {
  clicksRelajacion ++;
  createCookie("clicksRelajacion", clicksRelajacion);
  fetch('http://192.168.1.1/webapp/tracking/track.php');
}

let clicksPodcast = getCookie("clicksPodcast");
function conteoClicksPodcast() {
  clicksPodcast ++;
  createCookie("clicksPodcast", clicksPodcast);
  fetch('http://192.168.1.1/webapp/tracking/track.php');
}


//llamar la encuesta despues de 3 clicks en todo el documento
let encuesta = getCookie("encuesta");
if (clicksTotal >= 3 && !encuesta == 1) {
  location.href = "http://192.168.1.1/webapp/cierre.html";
  createCookie("encuesta", "1"); //flag para llamar encuesta solo 1 vez
}

//Funciones adicionales
function createCookie(name, value, days) {
  let expires;

  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie =
    encodeURIComponent(name) +
    "=" +
    encodeURIComponent(value) +
    expires +
    "; path=/";
}

//Funciones adicionales
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


/*
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

  //espacio para funcion a ser ejecutada cuando la pagina haya cargado completamente
});

*/