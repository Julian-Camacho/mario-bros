
function presentacion() {
    //agrego un promt que pida un nombre al usuario
    //guardo el nombre en una variable.toLowerCase
    let nombre = prompt("¿Quién se presenta hoy?").toLowerCase();
    const span = document.getElementById("presentado");
    let anterior = "";
    //comparo el nombre con un switch
    switch (nombre) {
        //modifico el html para que aparezca el nombre completo segun el nombre que el usuario ingreso
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
    };
    //eliminar el attributo title del resto de cajas
    let personaje = document.getElementById(nombre);
    //modifico las cajas para que cambien el valor y se presente el personaje con .setAttribute("title", "Presentado");
    personaje.setAttribute("title", "Presentado");
    let cajas = document.getElementById("cajas").children;
    for (let i = 0; i < cajas.length; i++) {
        if (cajas[i].id !== nombre){
            cajas[i].removeAttribute("title");
        };
    };
};