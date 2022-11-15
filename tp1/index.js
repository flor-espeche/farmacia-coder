
    let cantidad = parseInt(prompt("Cantidad de empleados a ingresar"));

    // ciclo for para calcular el sueldo de la cantidad de empleados que el usuario ingresa
    
    for(let i= 0; i < cantidad; i++ )
    {
        let hora = parseInt(prompt("ingrese la cantidad de horas trabajadas del empleado: "));
        let sueldo = hora * 500;

        // si trabajo mas de 40 horas se incrementa el sueldo en un 15%

        if(hora>40)
        {
            let sueldoTotal = sueldo + (sueldo * 1.5);
            let mensaje = `El sueldo del trabajador ${i} es: ${sueldoTotal}`;
            alert(mensaje);
        }
        else
        {
            let mensaje2 = `El sueldo del trabajador ${i} es: ${sueldo}`;
            alert(mensaje2);
        }
    }

    //calcular el precio total de un producto con iva

    function calcularIva(precio){
        return (precio + (precio * 1.21));
    }

   
    let precioAlgodon= calcularIva(100);
    console.log(precioAlgodon);




