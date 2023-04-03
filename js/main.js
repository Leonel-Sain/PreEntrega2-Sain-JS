/* function welcome(nombre){
    alert("Bienvenido/a" + " " + nombre);
}
let nombreUser= prompt("Ingresa tu nombre ");
   welcome(nombreUser)
    alert("MF productos de limpieza");

    let opcion = prompt(
        "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
    while (opcion !="7"){
        switch (opcion) {
//inicio de jabon para la ropa
        case "1":
            alert("Seleccionaste Jabón para lavar ropa");
            let jabon = prompt("Seleccione el tipo de Jabón \n1 Ariel \n2 Skip \n7- Salir");
            while (jabon !="7"){
            switch (jabon) {
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
            break;}
//fin de jabon para la ropa
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
              break;
//inicio  de suavizantes
              case "2":
                alert("Seleccionaste Suavizantes");
                let suavizante = prompt("Seleccione el tipo de suavizante \n1 Vivere \n2 Confort \n3 Triple fragancia \n7- Salir");
                while (suavizante !="7"){
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
            } break;}
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
            while(perfumina !="7"){
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
            } break;}
//fin de perfuminas
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
                break;
//incio de desodorantes de pisos
            case "5":
            alert("Seleccionaste Desodorante de pisos")
        let desodorante = prompt("Seleccione el tipo de desodorante para piso \n1 Lysoform \n2 Citronela \n3 Espadol \n4 Procenex \n5 Bebe  \n6 Chicle \n7- Salir")
        while (desodorante !="7"){      
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
            } break;}  
//fin de desodorante de pisos
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
                break;
//incio de mas productos
            case "6":
        let masProductos=prompt(
            "Mas productos de limpieza \n1 Desengrasante \n2 Detergente \n3 Secador de piso \n7- Salir");
            while (masProductos != "7"){
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
            } break;}
//fin  de mas productos 
            opcion = prompt(
                "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
        break;
      default:
        alert("Opción no válida");
        break;
    }
    opcion = prompt(
        "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
  } */

//   const productos =[
//     {id: 1, nombre: "jabon", precio: 350 },
//     {id: 2, nombre: "desengrasante", precio: 650 },
//     {id: 3, nombre: "lavandina", precio: 550 },
//     {id: 4, nombre: "perfuminas", precio: 333 },
//     {id: 5, nombre: "jabon", precio: 350 },
//     {id: 6, nombre: "jabon", precio: 350 },
//     {id: 7, nombre: "jabon", precio: 350 },

//   ];

//   const carrito=[];

//   const encontrado= productos.find((el)=>{
//     return el.nombre == prompt("ingresar producto");
//   })
//   alert.push (encontrado)
//     alert(encontrado)
// alert(carrito)
/* const cajonCubiertos=prompt(["\n1 cuchillos $", "\n2 tenedores", "\n3Cucharas"])
//console.log(arrayNumeros[0]);
alert(cajonCubiertos)
const carrito=[];*/



// INICIO DE CARRITO DE COMPRAS
const productos=[
    {nombre: "Secador de piso", precio: 450},
    {nombre: "Jabon Skip X 5l", precio: 650},
    {nombre: "Jabon Ariel X 5l", precio: 500},
    {nombre: "Suavizante Vivere X 5l", precio: 550},
    {nombre: "Suavizante Confort X 5l", precio: 600},
    {nombre: "Suavizante Triple fragancia X 5l", precio: 600},
    {nombre: "Lavandina X 5l", precio: 350},
    {nombre: "Detergente X 5l", precio: 650},
    {nombre: "Desengrasante X 5l", precio: 400},
    {nombre: "Perfumina X 1/2 L", precio: 350},
    {nombre: "Desodorante de piso Citronela X 5l", precio: 350},
    {nombre: "Desodorante de piso Espadol X 5l", precio:350},
    {nombre: "Desodorante de piso Procenex X 5l", precio:350},
    {nombre: "Desodorante de piso Bebe X 5l", precio:350},
    {nombre: "Desodorante de piso Lavanda X 5l", precio:350},
    {nombre: "Desodorante de piso Chicle X 5l", precio:350},
    {nombre: "Desodorante de piso Papaya X 5l", precio: 350},
    {nombre: "Desodorante de piso Lysoform X 5l", precio:350 },
];
let carrito = [];
let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$" );
let precio = 0
function welcome(nombre){
    alert("Bienvenido/a" + " " + nombre);
}
let nombreUser= prompt("Ingresa tu nombre ");
   welcome(nombreUser)
    alert("MF productos de limpieza te da la bienvenida");

let seleccion = prompt("Desea comprar algun producto de limpieza? ingrese si o no")


while(seleccion!= "si" && seleccion !="no"){
    alert ("Por favor ingresa si o no")
    seleccion= prompt("Hola! desea comprar algun producto de limpieza? ingrese si o no")
    }
if (seleccion=="si"){
    alert("Te presentamos nuestra lista de productos.")
    alert(todosLosProductos.join("\n"))
    }else if(seleccion == "no"){
    alert("Gracias por venir, hasta pronto!!")
    }

while(seleccion!= "no"){
    let producto = prompt(
        "Seleccione el o los productos que desee añadir a su carritos de compras\n1 Secador de piso \n2 Jabon Skip X 5l \n3 Jabon Ariel X 5l\n4 Suavizante Vivere X 5l \n5 Suavizante Confort X 5l \n6 Suavizante Triple fragancia X 5l \nx mas productos ");    
    /* let precio = 0 */
    if(producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || 
    producto == "6" || producto == "x" ){
        switch (producto) {
            case "1":
                alert(precio = 450)
                break;
            case "2":
                alert(precio = 650)
                break;
            case "3":
                alert(precio = 500)
                break;
            case "4":
                alert(precio = 450)
                break;
            case "5":
                alert(precio = 650)
                break;
            case "6":
                alert(precio = 500)
                break;
                default:
        
            case"x":
            let masProducto = prompt(
                "Mas productos de limpieza \n1 Lavandina X 5l \n2 Detergente X 5l \n3 Desengrasante X 5l\n4 Perfumina X 1/2 L \n5 Desodorantes de piso ");
                    if(masProducto == "1" || masProducto == "2" || masProducto == "3" ||masProducto == "4" || masProducto == "5");{
            switch(masProducto){
                case "1":
                    alert(precio = 350)
                    break;
                case "2":
                    alert(precio = 650)
                    break;
                case "3":
                    alert(precio = 400)
                    break;
                case "4":
                    alert(precio = 350)
                    break;
                    default:

                case "5":
            let degrVariedad= prompt(
                "Seleccione una fragancia de pisos \n1 Citronela X 5l \n2 Espadol X 5l \n3 Procenex X 5l\n4 Bebe X 5l\n5 Lavanda X 5l \n6 Chicle X 5l \n7 Papaya X 5l \n8 Lysoform X 5l");            
                if(degrVariedad == "1" || degrVariedad == "2" || degrVariedad == "3" || degrVariedad == "4" || degrVariedad == "5" || degrVariedad == "6" || degrVariedad == "7" || degrVariedad == "8");{
            switch(degrVariedad){
                case "1":
                    alert(precio = 350)
                    break;
                case "2":
                    alert(precio = 350)
                    break;
                case "3":
                    alert(precio = 350)
                    break;
                case "4":
                    alert(precio = 350)
                    break;
                case "5":
                    alert(precio = 350)
                    break;
                case "6":
                    alert(precio = 350)
                    break;
                case "7":
                    alert(precio = 350)
                    break;
                case "8":
                    alert(precio = 350)
                    break;
                    default:
                            }
                        }  
                    }  
                } 
        }
 
    }
    else{alert("no tenemos ese producto")
} 
seleccion= prompt("Desea seguir comprando? ingrese: si o no ?")

while(seleccion === "no"){
    alert("gracias por su compra, hasta pronto! ")
    carrito.forEach((carritoFinal)=> {
    alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}
    ,total a pagar por producto ${ carritoFinal.unidades * carritoFinal.precio} `)
    })
break;
} 
}

const total = carrito.reduce((ecc, el) => acc + el.precio * el.unidades, 0)
alert (`El total a pagar por su compra es: ${total}`)


/*   let opcion = prompt(
    "Seleccione un producto de limpieza \n1 Jabón para lavar ropa \n2 Suavizantes \n3 Lavandina \n4 Perfuminas \n5 Desodorante de pisos \n6 Mas productos \n7- Salir ");
    if (producto,masProducto,degrVariedad== "1"||producto,masProducto,degrVariedad== "2"||producto,masProducto,degrVariedad== "3"||producto,masProducto,degrVariedad== "4"||producto,masProducto,degrVariedad== "5"||producto,masProducto,degrVariedad== "6"||producto,masProducto,degrVariedad== "7"||
producto,masProducto,degrVariedad== "8" && producto,masProducto,degrVariedad !="x"||producto,masProducto,degrVariedad != "z"){
    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))
    carrito.push({producto, masProducto,degrVariedad, unidades, precio})
    alert(carrito)}
    
    */