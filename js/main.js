const busqueda = document.querySelector("#search")
const shopBusqueda = document.querySelector("#shopBusqueda")
const buttonBusqueda = document.querySelector ("#btnSearch")
const shop= document.querySelector("#shopContent");
const btnCarrito = document.querySelector("#btnC");
const precioProducto = document.querySelector("#precio");
const verCarrito = document.querySelector ("#verCarrito");
const modalContainer = document.querySelector ("#modalContainer");
const cantidadCarrito = document.querySelector ("#cantidadCarrito");
let content 
let comprar
let carritoContent
let prodEncontrado
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// INICIO DE CARRITO DE COMPRAS
//Array de productos con objetos
const productos=[
    {id: 1, nombre: "Secador de piso", precio: 450,img:"assets/imagenes/detergente-MF.jpg", cantidad: 1, },
    {id: 2, nombre: "Jabon Skip X 5l", precio: 650, img: "assets/imagenes/jabon-liquido-skip-MF.jpg",cantidad: 1,},
    {id: 3, nombre: "Jabon Ariel X 5l", precio: 500, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 4, nombre: "Jabon Skip X 1l", precio: 120, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 5, nombre: "Jabon Ariel X 1l",  precio: 150, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 6, nombre: "Suavizante Vivere X 1l",  precio: 100, img:"assets/imagenes/suavizante-vivere-MF.jpg",cantidad: 1,},
    {id: 7, nombre: "Suavizante Confort X 1l",  precio: 120, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 8, nombre: "Suavizante Vivere X 5l", precio: 550, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 9, nombre: "Suavizante Confort X 5l", precio: 600, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 10, nombre: "Suavizante Triple fragancia X 5l", precio: 600, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 11, nombre: "Lavandina X 5l", precio: 350, img:"assets/imagenes/lavandina-MF.jpg",cantidad: 1,},
    {id: 12, nombre: "Detergente X 1l", precio: 200, img:"assets/imagenes/detergente-MF.jpg" ,cantidad: 1,},
    {id: 13, nombre: "Desengrasante X 5l", precio: 400, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 14, nombre: "Perfumina X 1/2 L", precio: 350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 15, nombre: "Desodorante de piso Citronela X 5l", oferta: "Oferta!", precio: 250, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 16, nombre: "Desodorante de piso Espadol X 5l", precio:350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 17, nombre: "Desodorante de piso Procenex X 5l", precio:250, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 18, nombre: "Desodorante de piso Bebe X 5l", precio:350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 19, nombre: "Desodorante de piso Lavanda X 5l", precio:350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 20, nombre: "Desodorante de piso Chicle X 5l", precio:250, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 21, nombre: "Desodorante de piso Papaya X 5l", precio: 350, img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
    {id: 22, nombre: "Desodorante de piso Lysoform X 5l", precio:350 , img: "assets/imagenes/jabon-liquido-ariel-MF.jpg",cantidad: 1,},
];

/* let prodLimpieza = JSON.parse(localStorage.getItem("productos")) || productos;
 */
////////////////////////METODO DE FILTRADO NO SOLUCIONADO//////////////////////////////////////////////////////////////
/* const filtrarProductos = () =>{
    console.log(busqueda.value);
    const texto = filtrarProductos.value.toLowerCase();
    for(prodEncontrado of productos){
        let nombre = prodEncontrado.nombre.toLowerCase();
        if(nombre)
    }
} 
buttonBusqueda.addEventListener("click", filtrarProductos)*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* CARD PRODUCT */

const buscador = () => {
    let inputTexto = document.getElementById('search');
    inputTexto.addEventListener('change', () => {
      let buscador = inputTexto.value;
      console.log(buscador);
      prodEncontrado= productos.filter((productos) =>
        productos.nombre.includes(buscador.toUpperCase())
      );

      shopBusqueda.innerHTML = '';

      prodEncontrado.forEach((productos) => {
        content = document.createElement("div");
        content.className = "card";
        let { id, nombre, precio, img, } = productos;
  
        content.innerHTML = ` 
        <img class"ph" src="${product.img}">
        <h5>${product.nombre}</h5>
        <h4 class="price" >${product.precio} $</h4>
        `;
        shop.append(content)

        comprar = document.createElement("button")
        comprar.innerText = "Añadir al carrito";
        comprar.className = "btn btn-outline-primary"
        prodEncontrado.innerHTML = content;
        prodEncontrado
          .addEventListener('click', () => carrito(productos));
        content.append(comprar);
      });
    });
  };
    buscador ();

//Listeners de búsqueda
/* search.addEventListener("input", () => {
    let nuevoFiltro = filtrar(productos, search.value, "search");
    crearHtml(nuevoFiltro);
  }); */
  
productos.forEach((product)=>{
    content = document.createElement("div");
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

    comprar.addEventListener("click",() =>{

        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if(repeat){
            carrito.map((prod) => {
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    }
    console.log(carrito);
    carritoCounter();
    saveLocal();
    });
});
/* HEADER CONTENT CARRITO */
const pintarCarrito = () => {
    modalContainer.innerHTML= "";
    modalContainer.style.display= "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className= "modal-header"
    modalHeader.innerHTML = ` 
    <h1 class= "modal-header-title">Carrito de compras.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton= document.createElement ("h3");
    modalButton.innerText = "X";
    modalButton.className = "modalHeaderButton";

    modalButton.addEventListener ("click",() => {
        modalContainer.style.display = "none";
    })
    modalHeader.append(modalButton);
/* carrito de compras */
    carrito.forEach((product) => {
        carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = ` 
                <img  src="${product.img}">
                <h3>${product.nombre}</h3>
                <h4>${product.precio} $</h4>
                <span class="restar"> - </span>
                <h5>Cantidad: ${product.cantidad}</h5>
                <span class="sumar"> + </span>
                <h5>Total: ${product.cantidad * product.precio}</h5>
                `;

        modalContainer.append(carritoContent);
        let restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () =>{
            if(product.cantidad !== 1){
            product.cantidad--;
        }
            saveLocal();
            pintarCarrito();
        });

        let sumar = carritoContent.querySelector (".sumar")
        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        });

        let eliminar = document.createElement("span");
        eliminar.innerText= "✖";
        eliminar.className= "delete-product";
        carritoContent.append(eliminar)
        eliminar.addEventListener("click", eliminarProductos);
    });
    /*  precio final de productos  (el total)*/
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "totalContent"
    totalBuying.innerHTML =  `
    total a pagar: ${total} $`;
    modalContainer.append(totalBuying);

};
verCarrito.addEventListener("click",pintarCarrito)
const eliminarProductos = () => {
    const foundId = carrito.find ((element) => element.id);
    carrito = carrito.filter ((carritoId) => {
        return carritoId !== foundId;
    })
    carritoCounter();
    saveLocal();
    pintarCarrito();
};
//contador
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};
carritoCounter();

//set item = para setiar a localstorage mandar informacion
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify (carrito));
};
//get item = obtenemos lo que guardamos con el set item





//Declaracion de variables
//let nombreUser





/* 
let seleccion 
let producto 
let masProducto
let degrVariedad

let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$" );
let precio = 0
let unidades
let prodEncontrado
let oferta */


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