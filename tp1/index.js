const productos = [
    {
        id: 1, 
        nombre: "Boss", 
        img: "./img/perfumehugo.png", 
        categoria: { nombre: "bossPerfume" , id: "perfumeria" }, 
        precio: 3600, 
        descripcion: "Femme Intense Edp x90 ml"},

    {
        id: 2, 
        nombre: "Revlon", 
        img: "./img/pinturarevlon.webp", 
        categoria: { nombre: "revlonMaquillaje" , id: "maquillaje" }, 
        precio: 750, 
        descripcion: "Pintura de uñas"},

    {
        id: 3, 
        nombre: "Maybelline", 
        img: "./img/Maybelline-Waterproof_img1.png", 
        categoria: { nombre: "mascaraMaquillaje" , id: "maquillaje" }, 
        precio: 3520, 
        descripcion: "Mascara de pestañas"},

    {
        id: 4, 
        nombre: "Dermaglos", 
        img: "./img/Dermaglos.png", 
        categoria: { nombre: "lecheCuidadoFacial" , id: "cuidadoFacial" }, 
        precio: 1863, 
        descripcion: "Leche de limpieza facial"},

    {
        id: 5, 
        nombre: "Dermaglos", 
        img: "./img/Dermaglos-Corporal.png", 
        categoria: { nombre: "cremaCuidadoCorporal" , id: "cuidadoCorporal" }, 
        precio: 2500, 
        descripcion: "Crema corporal"},

    {
        id: 6, 
        nombre: "Maybelline", 
        img: "./img/delineadorcejas.jpg", 
        categoria: { nombre: "delineadorMaquillaje" , id: "maquillaje" }, 
        precio: 3000, 
        descripcion: "Delineador de cejas"},

    {
        id: 7, 
        nombre: "Colgate", 
        img: "./img/pastadedients.png", 
        categoria: { nombre: "pastaCuidadoFacial" , id: "cuidadoFacial" }, 
        precio: 1000, 
        descripcion: "Pasta de dientes"},

    {
        id: 8, 
        nombre: "Gum", 
        img: "./img/Gum-Cepillo.png", 
        categoria: { nombre: "cepilloCuidadoFacial" , id: "cuidadoFacial" }, 
        precio: 500, 
        descripcion: "Cepillo dental"}
];

localStorage.setItem("productos",  JSON.stringify(productos));
const productoLS = JSON.parse(localStorage.getItem("productos"));
console.log(productoLS);

const contenedorProductos = document.getElementById("contenedorProductos");
const botonesCategoria = document.querySelectorAll(".categoria-boton");
const tituloPrincipal = document.getElementById("tituloPrincipal");

function cargarProductos (productosTodos) {

    contenedorProductos.innerHTML = "";

    productosTodos.forEach(producto => {

        const div=document.createElement("div");
        div.classList.add("productos-card");
        div.innerHTML = `
        <div class="card  m-2 shadow">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="fw-bold">$${producto.precio}</p>
                <a href="#"> <button class="boton-card w-100 p-2" id="${producto.id}">Agregar</button> </a>
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
    })
})