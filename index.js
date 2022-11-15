
const productos = [
    {id: 1, nombre: "Boss", precio: 3600, descripcion: "Femme Intense Edp x90 ml"},
    {id: 2, nombre: "Revlon", precio: 750, descripcion: "Pintura de uñas"},
    {id: 3, nombre: "Maybelline", precio: 3520, descripcion: "Mascara de pestañas"},
    {id: 4, nombre: "Dermaglos", precio: 1863, descripcion: "Leche de limpieza facial"},
    {id: 5, nombre: "Dermaglos", precio: 2500, descripcion: "Crema corporal"},
    {id: 6, nombre: "Maybelline", precio: 3000, descripcion: "Delineador de cejas"},
    {id: 7, nombre: "Colgate", precio: 1000, descripcion: "Pasta de dientes"},
    {id: 8, nombre: "Gum", precio: 500, descripcion: "Cepillo dental"}
];

productos.forEach((producto) =>
{
    console.log(producto.nombre)
});

let nombre = prompt("ingrese el producto que busca");
const encontrar = productos.find(i=> i.nombre === nombre);

if(encontrar){
    let mensaje = `
    id: ${encontrar.id}
    nombre: ${encontrar.nombre}
    precio: ${encontrar.precio}
    descripcion: ${encontrar.descripcion}`;
    alert(mensaje);
}
else{alert("Producto no disponible")}


const modificarPrecio = productos.map (item => {
    return{
        nombre: item.nombre,
        precio: item.precio + 100,
        descripcion: item.descripcion
    };
});
console.log(modificarPrecio);


