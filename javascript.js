//ejercicio if/else

let helado = 30; 
let topping;
let precio;
let precioFinal;

topping = "oreo";


if (topping === "oreo") {
    precio = 10;
} else if (topping === "kitkat") {
    precio = 15;
} else if (topping === "kinder") {
    precio = 25;
} else {
    precio = 0;
    console.log("No tenemos este topping");
}

precioFinal = helado + precio;

console.log("El helado cuesta $" + precioFinal);

