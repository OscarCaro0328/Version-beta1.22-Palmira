createCookie("clicksTotal",0);
const INITIAL_WAIT = 2000;
const ONE_SECOND = 1000;
const formatoDatos = document.forms[0];
let fecha = new Date();
const botonSubmitForm = document.getElementsByClassName(
  "u-border-none u-btn u-btn-submit u-button-style u-palette-4-base u-btn-1"
);
document.getElementById("fechaIngreso").value = fecha; //modificar fecha de ingreso en el DOM para enviarla en form de ingreso
botonSubmitForm[0].addEventListener("click", setCookieName);

function setCookieName() {
  if (formatoDatos.name.value == "") {
  } else {
    userID = formatoDatos.name.value;
    createCookie("userID", userID, "100");
    createCookie("fechaIngreso", fecha, "100");
  }
}

// Function to create the cookie
function createCookie(name, value, days) {
  let expires;
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

/*
setInterval(function () {
  if (!document.hidden && startTime <= endTime) {
    startTime = Date.now();
    totalTime += ONE_SECOND;
    //document.getElementById("timer").innerHTML = formatTime(totalTime);
  }
}, ONE_SECOND);

function formatTime(ms) {
    return Math.floor(ms / 1000);
  }
  */