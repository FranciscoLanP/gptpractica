// Sección 1: Teoría (20 puntos)
// Explica la diferencia entre:

// 
// **** let, const y var.

// let y var: son elementos que pueden cambiar en cualquier parte del codigo.actualmente se recomienda usar let
// const: es un elemento que siempre sera del mismo valor hasta el final.


// **** null y undefined.

// null cuando intencional mente no quieres que se asigne un valor.
// undefined cuando no asignaste un valor.


//**** */ Explica la diferencia entre una Promise y async/await.

// Promise: realiza una accion que puede estar pendiente o completada
// async: devuelve una promesa
// await: se utiliza para esperar a que la promesa se resuleva


// punto 2
const arregloNumeros: number[] = [1, 2, 3, 4, 5];

function mezclarArreglo<Pepe>(arreglo: Pepe[]): Pepe[] {
    return arreglo.sort(() => Math.random() - 0.5);
}
console.log(mezclarArreglo(arregloNumeros));


// punto 3
const usuarios = [
    { id: 1, nombre: "Juan", edad: 25, isactivo: true },
    { id: 2, nombre: "Ana", edad: 30, isactivo: false },
    { id: 3, nombre: "Pedro", edad: 28, isactivo: true }
];

const usuariosActivos = usuarios.filter(usuario => usuario.isactivo).map(usuario => usuario.nombre);
console.log(usuariosActivos);

// punto 4
const usuario =[
    { id: 1, nombre: "Juan", edad: 25, isactivo: true },
    { id: 2, nombre: "Ana", edad: 30, isactivo: false },
    { id: 3, nombre: "Pedro", edad: 28, isactivo: true }
]



function fetchData(id: number): Promise<string[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([`Data for ID ${usuario[id].id}`]);
        }, 1000);
    });
}

console.log(fetchData);


// punto 5

interface Product {
    id: number;
    name: string;
    price: number;
    tags: string[];
}

function calculateTotal(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

