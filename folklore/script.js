var discoRecomendado, valueComida, idComida, idBebida, valueBebida;
var codigoYoutube;

function recomendarDisco() {

    var idComida = document.getElementById("comida");
    var valueComida = idComida.options[idComida.selectedIndex].value;

    var idBebida = document.getElementById("bebida");
    var valueBebida = idBebida.options[idBebida.selectedIndex].value;

    console.log(valueComida);
    console.log(valueBebida);

    if (valueComida == "empanadas") {

        if (valueBebida == "vinotinto") {
            discoRecomendado = '"Coronación del folklore vol. 1"';
            artistaRecomendado = "Eduardo Falú, Los Fronterizos y Ariel Ramirez";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/ITLcCXdM6Sk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "fernet") {
            discoRecomendado = '"Dueño no tengo"';
            artistaRecomendado = "Don Olimpio"
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/4jgQUTRJEIA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "cerveza") {
            discoRecomendado = '"Cosechero"';
            artistaRecomendado = "Ramón Ayala";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/58mUyVurFEQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "gaseosa") {
            discoRecomendado = '"Ayer, hoy y mañana"';
            artistaRecomendado = "Los andariegos";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/S04867gWwwU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            discoRecomendado = '"Paladines de la música de cuyo"';
            artistaRecomendado = "Alfonso y Zabala";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/rmlgl_ssiaQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    } else if (valueComida == "locro") {

        if (valueBebida == "vinotinto") {
            discoRecomendado = '"Con sabor a Mercedes Sosa"';
            artistaRecomendado = "Mercedes Sosa";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/O_C-aU11Zfo?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "fernet") {
            discoRecomendado = '"Imposible"';
            artistaRecomendado = "Liliana Herrero";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/rZDu2DVPVvs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "cerveza") {
            discoRecomendado = '"Por seguir"';
            artistaRecomendado = "Quinteto Bataraz";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/ZVwHTVpgHFU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "gaseosa") {
            discoRecomendado = '"Agitando pañuelos"';
            artistaRecomendado = "Los Hermanos Ábalos";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/nef23Pq3mqU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            discoRecomendado = '"El tiempo del Tushka Trío"';
            artistaRecomendado = "Tushka Trío";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/BXDOHLSwm0s?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }

    } else if (valueComida == "tamal" ) {

        if (valueBebida == "vinotinto") {
            discoRecomendado = '"Luna Monti y Juan Quintero"';
            artistaRecomendado = "El matecito de las siete";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/8-liB8arZWk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "fernet") {
            discoRecomendado = '"Canta Jose Larralde"';
            artistaRecomendado = "Jose Larralde";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/rbgjRYqjv7A?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "cerveza") {
            discoRecomendado = '"Canta Zitarrosa"';
            artistaRecomendado = "Alfredo Zitarrosa";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/wSSwlyNzVuw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "gaseosa") {
            discoRecomendado = '"Homenaje a Atahualpa Yupanqui"';
            artistaRecomendado = "Suma Paz";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/P8taYIcyg_E?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            discoRecomendado = '"Sobre Valladares"';
            artistaRecomendado = "Pedro Rossi";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/BwDkI4IH4mk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    } else if (valueComida == "choripan" ) {

        if (valueBebida == "vinotinto") {
            discoRecomendado = '"Leda y María"';
            artistaRecomendado = "Entre valles y quebradas";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/OzLIPMEQGN8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "fernet") {
            discoRecomendado = '"Silvia Iriondo"';
            artistaRecomendado = "Tierra que anda";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/hQR4AkaLzMY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "cerveza") {
            discoRecomendado = '"El canto de Salta"';
            artistaRecomendado = "Dúo Salteño y Cuchi Leguizamón";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/ES-jpK5V31U?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "gaseosa") {
            discoRecomendado = '"Suna Rocha y Raúl Carnota"';
            artistaRecomendado = "Suna Rocha y Raúl Carnota";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/j672B4DSBXE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            discoRecomendado = '"Los Núñez"';
            artistaRecomendado = "3Fronteras";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/5tsnkJce_0o?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    } else {

        if (valueBebida == "vinotinto") {
            discoRecomendado = '"Hernán Ríos y Chacho Echenique"';
            artistaRecomendado = "De estar estando";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/j6cBJGs5czw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "fernet") {
            discoRecomendado = '"Juan Falú & Marcelo Moguilevsky"';
            artistaRecomendado = "Ayer es siempre";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/8YeYPayWIPo?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "cerveza") {
            discoRecomendado = '"Por cielos lejanos"';
            artistaRecomendado = "Rudi y Niní Flores";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/XUEhTo6ZmJE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueBebida == "gaseosa") {
            discoRecomendado = '"Omar Moreno Palacios"';
            artistaRecomendado = "Te dije la verdad";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/JJld_kiG3NQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            discoRecomendado = '"Condomí, Snajer, Guevara"';
            artistaRecomendado = "De los tres";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/qPWGYGgLtkI?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
    }

    console.log(discoRecomendado);
    console.log(artistaRecomendado);

    document.getElementById("discoYoutube").innerHTML=(codigoYoutube);
    document.getElementById("presentacionDisco").innerHTML=("El disco recomendado para vos es:");
    document.getElementById("infoDisco").innerHTML=(discoRecomendado + " de " + artistaRecomendado);
}