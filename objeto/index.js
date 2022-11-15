function Persona (nombrePer, apellidoPer, edadPer) {
    this.nombre = nombrePer;
    this.apellido = apellidoPer;
    this.edad = edadPer;
};

let persona1 = new Persona ("Florencia", "Espeche", 29);
console.log(persona1)
console.log(persona1.apellido);

class AlimentoPerro {
    constructor(marca, precio, kilos){
        this.marca = marca;
        this.precio = precio;
        this.kilos = kilos;

    }
};

let alperro = new AlimentoPerro("pedigree", 1000,15)
console.log(alperro);