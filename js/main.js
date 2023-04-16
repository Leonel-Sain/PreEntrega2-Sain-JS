const shop= document.querySelector("#shopContent")
const btnCarrito = document.querySelector("#btnC")
const precioProducto = document.querySelector("#precio")

let comprar



// INICIO DE CARRITO DE COMPRAS
//Array de productos con objetos
const productos=[
    {id: 1, nombre: "Secador de piso", precio: 450,img:"assets/imagenes/detergente-MF.jpg" },
    {id: 2, nombre: "Jabon Skip X 5l", precio: 650, img: "assets/imagenes/jabon-liquido-skip-MF.jpg" },
    {id: 3, nombre: "Jabon Ariel X 5l", precio: 500, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 4, nombre: "Jabon Skip X 1l", oferta: "Oferta!", precio: 120, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 5, nombre: "Jabon Ariel X 1l", oferta: "Oferta!",  precio: 150, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 6, nombre: "Suavizante Vivere X 1l", oferta: "Oferta!",  precio: 100, img:"assets/imagenes/suavizante-vivere-MF.jpg"},
    {id: 7, nombre: "Suavizante Confort X 1l", oferta: "Oferta!",  precio: 120, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 8, nombre: "Suavizante Vivere X 5l", precio: 550, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 9, nombre: "Suavizante Confort X 5l", precio: 600, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 10, nombre: "Suavizante Triple fragancia X 5l", precio: 600, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 11, nombre: "Lavandina X 5l", precio: 350, img:"assets/imagenes/lavandina-MF.jpg"},
    {id: 12, nombre: "Detergente X 1l", precio: 200, img:"assets/imagenes/detergente-MF.jpg" },
    {id: 13, nombre: "Desengrasante X 5l", precio: 400, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 14, nombre: "Perfumina X 1/2 L", precio: 350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 15, nombre: "Desodorante de piso Citronela X 5l", oferta: "Oferta!", precio: 250, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 16, nombre: "Desodorante de piso Espadol X 5l", precio:350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 17, nombre: "Desodorante de piso Procenex X 5l", oferta: "Oferta!", precio:250, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 18, nombre: "Desodorante de piso Bebe X 5l", precio:350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 19, nombre: "Desodorante de piso Lavanda X 5l", precio:350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 20, nombre: "Desodorante de piso Chicle X 5l", oferta: "Oferta!", precio:250, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 21, nombre: "Desodorante de piso Papaya X 5l", precio: 350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
    {id: 22, nombre: "Desodorante de piso Lysoform X 5l", precio:350 , img: "assets/imagenes/jabon-liquido-ariel-MF.jpg"},
];
let carrito = [];
/* let prodLimpieza = JSON.parse(localStorage.getItem("productos")) || productos;
 */
productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = ` 
    <img class"ph" src="${product.img}">
    <h5>${product.nombre}</h5>
    <h4 class="price" >${product.precio} $</h4>
    `;
     shop.append(content)

    comprar = document.createElement("button")
    comprar.innerText = "Añadir al carrito";
    comprar.className = "btn btn-outline-primary"
    content.append(comprar); 
})

//Declaracion de variables
//let nombreUser




let seleccion 
let producto 
let masProducto
let degrVariedad

let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$" );
let precio = 0
let unidades
let prodEncontrado
let oferta


//Funciones de búsqueda
/* function buscarServicio(arr, filtro) {
    const encontrado = arr.find((el) => {
      return el.nombre.includes(filtro);
    });
    return encontrado;
  }
  function filtrarServicio(arr, filtro) {
    const filtrado = arr.filter((el) => {
      return el.nombre.includes(filtro);
    });
    return filtrado;
  }
  const btnSearch = document.querySelector("#btnSearch");
  const inputs = document.querySelectorAll('input[type="text"]'); */
//Inicio de ingreso
/* function welcome(nombre){
    alert("Bienvenido/a" + " " + nombre);
}
nombreUser= prompt("Ingresa tu nombre ");
   welcome(nombreUser)
    alert("MF productos de limpieza te da la bienvenida");
    

//filtro de busqueda por precio (ofertas)
prodEncontrado = prompt("Ingrese un monto menor o igual a 300 para ver las oferta disponibles \ningrese no para ir al menu principal")

while(prodEncontrado >"300" && prodEncontrado != "no"){
        alert ("ingrese un monto menor o igual a 300 para ver las oferta disponibles \n ingrese no para ir al menu principal")
        prodEncontrado = prompt("ingrese un monto menor o igual a 300 para ver las oferta disponibles \n ingrese no para ir al menu principal")
    }        
    if (prodEncontrado <="300"){
        alert("Te presentamos nuestras ofertas!!.")
        const productOfert= productos.filter(productos => productos.precio <= prodEncontrado);
        console.log(productOfert)
        const mapDeOferta = productOfert.map ((prod) => prod.nombre + " " + prod.precio + "$" + " " + prod.oferta )
        alert(mapDeOferta.join("\n"))
        }
//Fin filtro de busqueda
//Inicio, lista de productos. 
seleccion= prompt("Hola! desea comprar algun producto de limpieza? ingrese si o no")

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
        "Seleccione el o los productos que desee añadir a su carritos de compras\n1 Secador de piso \n2 Jabon Skip X 5l \n3 Jabon Ariel X 5l\n4 Suavizante Vivere X 5l \n5 Suavizante Confort X 5l \n6 Suavizante Triple fragancia X 5l \nx Mas productos \n8 Lista de ofertas");    
    if(producto == "1" || producto == "2" || producto == "3" || producto == "4" || producto == "5" || producto == "6" || producto == "x" || producto == "8"){
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
                    if(masProducto == "1" || masProducto == "2" || masProducto == "3" ||masProducto == "4" || masProducto == "5" );{
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
                "Seleccione una fragancia de pisos \n1 Citronela X 5l \n2 Espadol X 5l \n3 Procenex X 5l\n4 Bebe X 5l\n5 Lavanda X 5l \n6 Chicle X 5l \n7 Papaya X 5l \n8 Lysoform X 5l ");            
                if(degrVariedad == "1" || degrVariedad == "2" || degrVariedad == "3" || degrVariedad == "4" || degrVariedad == "5" || degrVariedad == "6" || degrVariedad == "7" || degrVariedad == "8" );{
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
            case"8":
        oferta = prompt("Productos de limpieza en oferta! \n1 Jabon Skip X 1l \n2 Jabon Ariel X 1l \n3 Suavizante Vivere X 1l\n4 Suavizante Confort X 1l \n5 Desodorante de piso Citronela X 5l \n6 Desodorante de piso Procenex X 5l  \n7 Desodorante de piso Chicle X 5l ");
            if(oferta== "1" || oferta == "2" || oferta == "3" ||oferta == "4" || oferta == "5" || oferta == "6" || oferta == "7" );{
                switch(oferta){
                    case "1":
                        alert(precio = 120)
                        break;
                    case "2":
                        alert(precio = 150)
                        break;
                    case "3":
                        alert(precio = 100)
                        break;
                    case "4":
                        alert(precio = 120)
                        break;
                    case "5":
                        alert(precio = 250)
                        break;
                    case "6":
                        alert(precio = 250)
                        break;
                    case "7":
                        alert(precio = 250)
                        break;
                        default:
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
 */

/* const jabonSkip = document.querySelector("#jabonSkip")

jabonSkip.innerText ="Ariel"
console.log(jabonSkip); */