<?php

$galletaNombre = $_COOKIE["userID"];
$galletaFechaIngreso = $_COOKIE["fechaIngreso"];
$galletaClicksTotal= $_COOKIE["clicksTotal"];
$galletaclicksVideos = $_COOKIE["clicksVideos"];
$galletaclicksMusica = $_COOKIE["clicksMusica"];
$galletaclicksPeliculas = $_COOKIE["clicksPeliculas"];
$galletaclicksJuegos = $_COOKIE["clicksJuegos"];
$galletaclicksRelajacion = $_COOKIE["clicksRelajacion"];
$galletaclicksPodcast = $_COOKIE["clicksPodcast"];


$fp = fopen("../../../data/track.txt", 'a');
fwrite(
    $fp,
    $galletaNombre .",".$galletaClicksTotal. ",  " . $galletaclicksVideos . ", "
     . $galletaclicksMusica . ", " . $galletaclicksPeliculas
     . ", " . $galletaclicksJuegos . ", " . $galletaclicksRelajacion
     . ", " . $galletaclicksPodcast . "\n"
);

fclose($fp);


$archivo = file_get_contents("../../../data/track.txt");
$archivoFilas = explode("\n", $archivo);
for ($i = 0; $i < count($archivoFilas); $i++) {
    $archivoCeldas[$i] = explode(",", $archivoFilas[$i]);
}

//echo $archivoCeldas[0][4]; //[usuario][datos]


//datos:    userID[0], clicksTotal[1],   clicksVideos[2], clicksMusica[3], clicksPeliculas[4], clicksJuegos[5],
//clicksRellajacion[6], clicksPodcast[7];
