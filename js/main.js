// INICIO DE CARRITO DE COMPRAS
//Array de productos con objetos 
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
//Declaracion de variables
let nombreUser
let seleccion 
let producto 
let masProducto
let degrVariedad
let carrito = [];
let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$" );
let precio = 0
let unidades

//Inicio de ingreso
function welcome(nombre){
    alert("Bienvenido/a" + " " + nombre);
}
nombreUser= prompt("Ingresa tu nombre ");
   welcome(nombreUser)
    alert("MF productos de limpieza te da la bienvenida");
    
    //filtro de busqueda, prueba
 /*const result =productos.find(elemento => elemento.precio > 30)
    console.log(result);
 
 const result = productos.filter(function (productosNombre){
        if (productosNombre.nombre == "jabon" || "suavizante" || "lavandina"||
        "detergente"|| "desengrasante"|| "perfumina" || "desodorante de piso" || "secador de piso" ){
        return true}
        }) */
/*         alert("Usted busco:" + " " + result)
        result = prompt("Desea agregarlo a su carrito de compras ? escriba si o no")
        
        while(result!= "si" && result!="no"){
            alert ("Por favor ingresa si o no")
            result = prompt("Desea agregarlo a su carrito de compras ? escriba si o no")
        }
        if (result=="si"){
            unidades =parseInt(prompt("cuantas unidades desea llevar ?"))
            carrito.push({producto, masProducto, degrVariedad, unidades, precio})
            }else if(result == "no"){
                alert("no tenemos ese producto")
            } */
//fin filtro de prueba, busqueda

seleccion = prompt("Desea comprar algun producto de limpieza? ingrese si o no")


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

//Inicio de productos y while, para evaluar los casos
while(seleccion!= "no"){
     producto = prompt(
        "Seleccione el o los productos que desee añadir a su carritos de compras\n1 Secador de piso \n2 Jabon Skip X 5l \n3 Jabon Ariel X 5l\n4 Suavizante Vivere X 5l \n5 Suavizante Confort X 5l \n6 Suavizante Triple fragancia X 5l \nx mas productos ");    
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
            masProducto = prompt(
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
            degrVariedad= prompt(
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
                    break;
                            }
                        }  
                    }  
                } 
            }
    unidades =parseInt(prompt("cuantas unidades desea llevar ?"))
    carrito.push({producto, masProducto, degrVariedad, unidades, precio})
    }
    else{alert("no tenemos ese producto")
} 
seleccion= prompt("Desea seguir comprando? ingrese: si o no ?")
//Finalizando compra y devolviendo los precios de los productos.
while(seleccion === "no"){
    alert("gracias por su compra, hasta pronto! ")
    carrito.forEach((carritoFinal)=> {
    alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}
    ,total a pagar por producto ${ carritoFinal.unidades * carritoFinal.precio} `)
    })
break;
} 
}
//Final compra, devolucion total de todos los productos.
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
alert (`El total a pagar por su compra es: ${total}`)

/* const encontrado= productos.find((prod)=>{
    return prod.nombre=productos || prod.precio>100
})
prompt(encontrado("desea agregarlo al carrito de compras ?")) */
