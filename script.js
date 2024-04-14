//agrego un promt que pida un nombre al usuario
//guardo el nombre en una variable.toLowerCase
let nombre= prompt("¿Quién se presenta hoy?").toLowerCase();
console.log(nombre);
const span = document.getElementById("presentado");
console.log(span);
//comparo el nombre con un switch
switch (nombre) {
    case "mario":
        span.innerHTML = "Mario";
        break;
    case "luigi":
        span.innerHTML = "Luigi";
        break;
    case "bowser":
        span.innerHTML = "Bowser Morton Koopa";
        break;
    case "peach":
        span.innerHTML = "Princesa Peach Toadstool";
        break;
    case "yoshi":
        span.innerHTML = "T. Yoshisaur Munchakoopas";
        break;
    case "toad":
        span.innerHTML = "Toad";
        break;
    case "toadette":
        span.innerHTML = "Toadette";
        break;
    case "daisy":
        span.innerHTML = "Princesa Daisy";
        break;
    default:
        span.innerHTML = "(desconocido)";
        break;
}
//modifico el html para que aparezca el nombre completo segun el nombre que el usuario ingreso
//modifico las cajas para que cambien el valor y se presente el personaje con title="Presentado"
document.getElementById(nombre).setAttribute("title", "Presentado");