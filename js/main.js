function welcome(nombre){
    alert("Bienvenido/a" + " " + nombre);
}
let nombreUser= prompt("Ingresa tu nombre ");
   welcome(nombreUser)
    alert("MF productos de limpieza");
//inicio de menu de productos principal
    let opcion = prompt(
        "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
    while (opcion !="7"){
        switch (opcion) {
//inicio de jabon para la ropa
        case "1":
            alert("Seleccionaste Jabón para lavar ropa");
            let jabon = prompt("Seleccione el tipo de Jabón \n1 Ariel \n2 Skip \n7- Salir");
            switch (jabon ) {
                case "1":
                    alert("Ariel x 5L = $600");
                break;
                case "2":
                    alert("Skip x 5L = $650");
                break;
                default:
                    alert ("opcion no valida")
                break;
            }
//fin de jabon para la ropa
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
              break;
//inicio  de suavizantes
              case "2":
                alert("Seleccionaste Suavizantes");
                let suavizante = prompt("Seleccione el tipo de suavizante \n1 Vivere \n2 Confort \n3 Triple fragancia \n7- Salir");
            switch(suavizante){
                case "1":
                    alert("Vivere x 5L = $550");
                    break;
                case "2":
                    alert("Confort x 5L = $600");
                    break;
                case "3":
                    alert("Triple fragancia x 5L = $600");
                    break;
                default:
                    alert ("opcion no valida")
                    break;
            }
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
              break;
        case "3":
            alert("Seleccionaste Lavandina x 5L = $350")
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
            break;
//inicio de perfuminas
        case "4":
            alert("Seleccionaste Perfuminas")
            let perfumina = prompt("seleccione el tipo de perfumina\n1 Cherry \n2 Limón \n3 Lavanda \n4 Rosedales \n7- Salir");
            switch(perfumina){
            case "1":
                alert("Cherry x 1/2L = $350");
                break;
            case "2":
                alert("Limón x 1/2L = $350");
                break;
            case "3":
                alert("Lavanda x 1/2L = $350");
                break;
            case "4":
                alert("Rosedales x 1/2L = $350")
                break;
            default:
                alert ("opcion no valida")
                break;
            }
//fin de perfuminas
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
                break;
//incio de desodorantes de pisos
            case "5":
            alert("Seleccionaste Desodorante de pisos")
        let desodorante = prompt("Seleccione el tipo de desodorante para piso \n1 Lysoform \n2 Citronela \n3 Espadol \n4 Procenex \n5 Bebe  \n6 Chicle \n7- Salir")
                switch(desodorante){
            case "1":
                alert("Lysoform x 5L = $350")
                break;
            case "2":
                alert("Citronela x 5L = $350")
                break;
            case "3":
                alert("Espadol x 5L = $350")
                break;
            case "4":
                alert("Procenex x 5L = $350")
            case "5":
                alert("Bebe x 5L = $350")
                break;
            case "6":
                alert("Chicle x 5L = $350")
                break;
            default:
                alert ("opcion no valida")
                break;
            }
//fin de desodorante de pisos
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
                break;
//incio de mas productos
            case "6":
        let masProductos=prompt(
            "Mas productos de limpieza \n1 Desengrasante \n2 Detergente \n3 Secador de piso \n7- Salir");
            switch (masProductos) {
            case "1":
                alert("Seleccionaste Desengrasante x 5L = $400");
                break;
            case "2":
                alert("Seleccionaste Detergente x 5L = $650")
                break;
            case "3":
                alert("Seleccionaste Secador de piso x 1 unidad = $450")
                break;
            default:
                alert("Opción no válida");
            break;
            }
//fin  de mas productos 
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
        break;
      default:
        alert("Opción no válida");
        break;
    }
  }