var discoRecomendado, valueInstrumento, idInstrumento, idNacimiento, valueNacimiento;
var codigoYoutube;

function recomendarDisco() {

    var idInstrumento = document.getElementById("instrumento");
    var valueInstrumento = idInstrumento.options[idInstrumento.selectedIndex].value;

    var idNacimiento = document.getElementById("nacimiento");
    var valueNacimiento = idNacimiento.options[idNacimiento.selectedIndex].value;

    console.log(valueInstrumento);
    console.log(valueNacimiento);

    if (valueInstrumento == "piano") {

        if (valueNacimiento == "enero") {
            discoRecomendado = '"Standards Live"';
            artistaRecomendado = "Keith Jarrett";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/dn1630_qhGs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "febrero") {
            discoRecomendado = '"Sunday at the Village Vanguard"';
            artistaRecomendado = "Bill Evans";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/6yH2s-ZBgMU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "marzo") {
            discoRecomendado = '"Solo Monk"';
            artistaRecomendado = "Thelonious Monk"
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/PRzIgAbxlsg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "abril") {
            discoRecomendado = '"And I Love Her"';
            artistaRecomendado = "Marc Copland";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/ID1P62SwStU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "mayo") {
            discoRecomendado = '"Wanton Spirit"';
            artistaRecomendado = "Kenny Barron";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/Rq0-0FcmQME?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "junio") {
            discoRecomendado = '"Tierra improvisada"';
            artistaRecomendado = "El Terceto";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/34JjrjLzXJw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "julio") {
            discoRecomendado = '"Prog"';
            artistaRecomendado = "The Bad Plus";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/gqMy4h9ESG4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "agosto") {
            discoRecomendado = '"Light Blue"';
            artistaRecomendado = "Ernesto Jodos";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/K1CY4iZ0IXE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "septiembre") {
            discoRecomendado = '"Our Delight"';
            artistaRecomendado = "Paula Shocron";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/1AijnKzLBFE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "octubre") {
            discoRecomendado = '"House On Hill"';
            artistaRecomendado = "Brad Mehldau";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/NB9Pn_r15F4?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "noviembre") {
            discoRecomendado = '"Triangle"';
            artistaRecomendado = "Masabumi Kikuchi";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/gIcw49djX3A?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            discoRecomendado = '"This Love"';
            artistaRecomendado = "Kaja Draksler";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/JhmzuIHLYEk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }

    } else if (valueInstrumento == "guitarra") {

        if (valueNacimiento == "enero") {
            discoRecomendado = '"Live"';
            artistaRecomendado = "Bill Frisell";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/KSEZvLYWTis?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "febrero") {
            discoRecomendado = '"Strands"';
            artistaRecomendado = "Jakob Bro";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/wOq8yWK5BNM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "marzo") {
            discoRecomendado = '"Viento Divino"';
            artistaRecomendado = "Lucio Balduini";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/j_S6zEWMOYc?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "abril") {
            discoRecomendado = '"All Of Me/Todo de mi"';
            artistaRecomendado = "Walter Malosetti";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/BcJV0Bdtsh0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "mayo") {
            discoRecomendado = '"Love Hurts"';
            artistaRecomendado = "Julian Lage";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/oOtlL3tjZ0A?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "junio") {
            discoRecomendado = '"Lovers"';
            artistaRecomendado = "Nels Cline";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/sqZbPRGSpJw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "julio") {
            discoRecomendado = '"Away With You"';
            artistaRecomendado = "Mary Halvorson";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/dYAEvuqI1Mg?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "agosto") {
            discoRecomendado = '"Standards Vol. 1"';
            artistaRecomendado = "Pasquale Grasso";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/pmmlFWWXDpE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "septiembre") {
            discoRecomendado = '"Solo Guitar"';
            artistaRecomendado = "Ted Greene";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/7mDcnW97XAs?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "octubre") {
            discoRecomendado = '"Homes"';
            artistaRecomendado = "Gilad Hekselman";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/F26X79_xlIU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "noviembre") {
            discoRecomendado = '"Live at the Jazz Standard"';
            artistaRecomendado = "Wolfgang Muthspiel & Mick Goodrick";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/mZuZy-wClyQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else {
            discoRecomendado = '"Reflections"';
            artistaRecomendado = "Kurt Rosenwinkel";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/Zu30e4OrRAk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }

    } else if (valueInstrumento == "saxo" ) {

        if (valueNacimiento == "enero") {
            discoRecomendado = '"My Favourite Things"';
            artistaRecomendado = "John Coltrane";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/rqpriUFsMQQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "febrero") {
            discoRecomendado = '"Sound Of Love"';
            artistaRecomendado = "Paul Motian";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/jHeTJWffiVc?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "marzo") {
            discoRecomendado = '"The Sea, the Storm and the Full Moon"';
            artistaRecomendado = "Ada Rave";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/896FZ4-Xrbc?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "abril") {
            discoRecomendado = '"Presencia"';
            artistaRecomendado = "Rodrigo Dominguez";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/l3sxFp_-zks?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "mayo") {
            discoRecomendado = '"Wish"';
            artistaRecomendado = "Joshua Redman";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/2KvF6nYIOvA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "junio") {
            discoRecomendado = '"The Bridge"';
            artistaRecomendado = "Sonny Rollins";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/sbfY465lgUY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "julio") {
            discoRecomendado = '"De este lado"';
            artistaRecomendado="Camila Nebbia";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/d_8R4AqF9HA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "agosto") {
            discoRecomendado = '"News for Lulu"';
            artistaRecomendado = "John Zorn";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/smgEUwHoGt0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "septiembre") {
            discoRecomendado = '"The Shape of Jazz To Come"';
            artistaRecomendado = "Ornette Coleman";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/OIIyCOAByDU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "octubre") {
            discoRecomendado = '"Screen Off"';
            artistaRecomendado = "Ken Vandermark";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/4QSJVhr-lek?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        } else if (valueNacimiento == "noviembre") {
            discoRecomendado = '"Sonidos desde el campo para los animales y la vida salvaje"';
            artistaRecomendado = "Hernán Samá";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/gty-1ml2v_M?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  ';
        } else {
            discoRecomendado = '"Alone Together"';
            artistaRecomendado = "Lee Konitz";
            codigoYoutube = '<iframe width="60%" height="230" src="https://www.youtube.com/embed/P5PJKT9J8GE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }

    } else {

    }

    console.log(discoRecomendado);
    console.log(artistaRecomendado);

    document.getElementById("discoYoutube").innerHTML=(codigoYoutube);
    document.getElementById("presentacionDisco").innerHTML=("El disco recomendado para vos es:");
    document.getElementById("infoDisco").innerHTML=(discoRecomendado + " de " + artistaRecomendado);
}