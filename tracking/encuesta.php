<?php

$calificacionViaje=$_POST['calificacionViaje'];
$calificacionPersonal=$_POST['calificacionPersonal'];
$calificacionLimpieza=$_POST['calificacionLimpieza'];
$calificacionEntretenimiento=$_POST['calificacionEntretenimiento'];
$calificacionSugerencias=$_POST['sugerencias'];
$userID=$_COOKIE["userID"];
$pagina=$_COOKIE["pagina"];
$clicksTotal =$_COOKIE["clicksTotal"];

//   ../../../data/encuesta.txt
$fp = fopen('../../../data/encuesta.txt', 'a');
fwrite($fp,"Usuario: ".$userID.", calificacion viaje: ".$calificacionViaje.
        ", calificacion del personal: ".$calificacionPersonal.
        ", calificacion de aseo: ".$calificacionLimpieza.
        ", calificacion del entretenimiento: ".$calificacionEntretenimiento.
        ". Sugerencias: ".$calificacionSugerencias."\n"
        );
fclose($fp);

// This switch statement:

switch ($pagina) {
        case "/webapp/Inicio.html":
                echo "<script>window.location.href='../Inicio.html';</script>";
                break;
        case "/webapp/Videos.html":
                echo "<script>window.location.href='../Videos.html';</script>";
                break;
        case "/webapp/Musica.html":
                echo "<script>window.location.href='../Musica.html';</script>";
                break;
        case "/webapp/Peliculas.html":
                echo "<script>window.location.href='../Peliculas.html';</script>";
                break;
        case "/webapp/Juegos.html":
                echo "<script>window.location.href='../Juegos.html';</script>";
                break;
        case "/webapp/Relajacion.html":
                echo "<script>window.location.href='../Relajacion.html';</script>";
                break;
        default:
                echo "Equivocado";
}
