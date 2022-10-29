
    let cantidad = parseInt(prompt("Cantidad de empleados a ingresar"));
    for(let i= 0; i < cantidad; i++ )
    {
        let hora = parseInt(prompt("ingrese la cantidad de horas trabajadas del empleado: "));
        let sueldo = hora * 500;
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

 let precioAlgodon= calcularIva(100);
    console.log(precioAlgodon);
    function calcularIva(precio){
        return (precio * 1.21);
    }

   
    




