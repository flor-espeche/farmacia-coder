const productos = [
    {
        id: 1, 
        nombre: "Boss", 
        img: "./img/perfumehugo.png", 
        categoria: { nombre: "bossPerfume" , id: "perfumeria" }, 
        precio: 3600, 
        cantidad: 1,
        descripcion: "Femme Intense Edp x90 ml"},

    {
        id: 2, 
        nombre: "Revlon", 
        img: "./img/pinturarevlon.webp", 
        categoria: { nombre: "revlonMaquillaje" , id: "maquillaje" }, 
        precio: 750, 
        cantidad: 1,
        descripcion: "Pintura de uñas"},

    {
        id: 3, 
        nombre: "Maybelline", 
        img: "./img/Maybelline-Waterproof_img1.png", 
        categoria: { nombre: "mascaraMaquillaje" , id: "maquillaje" }, 
        precio: 3520, 
        cantidad: 1,
        descripcion: "Mascara de pestañas"},

    {
        id: 4, 
        nombre: "Dermaglos", 
        img: "./img/Dermaglos.png", 
        categoria: { nombre: "lecheCuidadoFacial" , id: "cuidadoFacial" }, 
        precio: 1863, 
        cantidad: 1,
        descripcion: "Leche de limpieza facial"},

    {
        id: 5, 
        nombre: "Dermaglos", 
        img: "./img/Dermaglos-Corporal.png", 
        categoria: { nombre: "cremaCuidadoCorporal" , id: "cuidadoCorporal" }, 
        precio: 2500, 
        cantidad: 1,
        descripcion: "Crema corporal"},

    {
        id: 6, 
        nombre: "Maybelline", 
        img: "./img/delineadorcejas.jpg", 
        categoria: { nombre: "delineadorMaquillaje" , id: "maquillaje" }, 
        precio: 3000, 
        cantidad: 1,
        descripcion: "Delineador de cejas"},

    {
        id: 7, 
        nombre: "Colgate", 
        img: "./img/pastadedients.png", 
        categoria: { nombre: "pastaCuidadoFacial" , id: "cuidadoFacial" }, 
        precio: 1000, 
        cantidad: 1,
        descripcion: "Pasta de dientes"},

    {
        id: 8, 
        nombre: "Gum", 
        img: "./img/Gum-Cepillo.png", 
        categoria: { nombre: "cepilloCuidadoFacial" , id: "cuidadoFacial" }, 
        precio: 500, 
        cantidad: 1,
        descripcion: "Cepillo dental"}
];


let carrito = [];

document.addEventListener("DOMContentLoaded", ()=> {
    carrito = JSON.parse(localStorage.getItem("carrito"))  || [];
    mostrarCarrito();
})

const contenedorProductos = document.getElementById("contenedorProductos");
const botonesCategoria = document.querySelectorAll(".categoria-boton");
const tituloPrincipal = document.getElementById("tituloPrincipal");
const carritoContenedor = document.getElementById("carritoContenedor");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const precioTotal = document.getElementById("precioTotal");
const finalizarCompra = document.getElementById("finalizarCompra")




function cargarProductos (productosTodos) {

    contenedorProductos.innerHTML = "";

    productosTodos.forEach(producto => {

        const {id, nombre, img, categoria, precio, cantidad, descripcion} = producto;
        const div=document.createElement("div");
        div.classList.add("productos-card");
        div.innerHTML = `
        <div class="card  m-2 shadow">
        <img src="${img}" class="card-img-top" alt="${nombre}">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <p class="fw-bold">$${precio}</p>
                <a href="#"> <button class="boton-card w-100 p-2" onclick="agregarProducto(${id})">Agregar</button> </a>
              </div>
              </div>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {

        if (e.currentTarget.id != "todos") {
           const botonCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(botonCategoria); 
        }
        else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

        switch (e.currentTarget.id) {
            case "Todos":
                tituloPrincipal.innerText = "Todos los productos";
              break;
            case "maquillaje":
                tituloPrincipal.innerText = "Maquillaje";
              break;
            case "perfumeria":
                tituloPrincipal.innerText = "Perfumeria";
              break;
            case "cuidadoFacial":
                tituloPrincipal.innerText = "Cuidado facial";
              break;
            case "cuidadoCorporal":
                tituloPrincipal.innerText = "Cuidado corporal";
              break;
            case "bebes":
                tituloPrincipal.innerText = "Bebes";
              break;
            default:
              
              break;
          }
        
    })
})

function agregarProducto(id){

    const existe = carrito.some(prod => prod.id === id)

    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === id){
                prod.cantidad++
            }
        })
    } else {
    const item = productos.find((prod) => prod.id === id)
    carrito.push(item);
    }
    
    mostrarCarrito();
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");
    modalBody.innerHTML="";
    carrito.forEach((prod) => {
        const {id, nombre, img, descripcion, cantidad, precio} = prod;
        modalBody.innerHTML+= ` 
        <div class="modal-contenedor">
          <div>
            <img class="img-fluid img-carrito" src="${img}" alt="">
          </div>

          <div>
            <p>Producto: ${nombre}</p>
            <p>Precio: $${precio}</p>
            <p>Cantidad: ${cantidad}</p>

            <button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar</button>
          </div>
        </div>
        `
    })

    if(carrito.length === 0){
        modalBody.innerHTML=`
        <p class="text-center">¡Aun no agregaste nada!</p>
        `
    }

    carritoContenedor.textContent = carrito.length;
    precioTotal.innerText = carrito.reduce((acu, prod) => acu + prod.cantidad * prod.precio, 0);
    guardarStorage();
}

vaciarCarrito.addEventListener("click", () => {
    carrito.length = [];
    mostrarCarrito();
})

function eliminarProducto(id) {
    const eliminarId = id;
    carrito = carrito.filter((eliminar) => eliminar.id !== eliminarId);
    mostrarCarrito();
}

function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
finalizarCompra.addEventListener("click", () => {
    if(carrito.length === 0){
        console.log("hola");
        swal({
            title: "¡Tu carrito está vacio!",
            text: "Compra algo para continuar la compra",
            icon: "error",
            confirmbuttonText: "Aceptar",
          });
    } else {

    }
})