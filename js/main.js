//DECLARACION DE VARIABLES E ID
const busqueda = document.querySelector("#search")
const shopBusqueda = document.querySelector("#shopBusqueda")
const buttonBusqueda = document.querySelector ("#btnSearch")
const shop= document.querySelector("#shopContent");
const btnCarrito = document.querySelector("#btnC");
const precioProducto = document.querySelector("#precio");
const verCarrito = document.querySelector ("#verCarrito");
const modalContainer = document.querySelector ("#modalContainer");
const cantidadCarrito = document.querySelector ("#cantidadCarrito");
const formulario = document.querySelector("#formulario");
let content 
let comprar
let carritoContent
let prodEncontrado
let restar
let sumar
let eliminar
let product
//get item = obtenemos lo que guardamos con el set item
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* const productos=[
    {id: 1, nombre: "Secador de piso", precio: 450,img: "assets/imagenes/detergente-MF.jpg", cantidad: 1, },
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
 */
/* fetch ("./data/datos.json")
.then ((resp) => resp.json())
.then ((data) =>{
    console.log (data);
}) */

// INICIO DE CARRITO DE COMPRAS

//INTENTO DE BARRA DE BUSQUEDA, por consola busca, pero no pinta la card

/* const buscador = () => {
    let inputTexto = document.getElementById("formulario");
    inputTexto.addEventListener('change', () => {
      let guardado = inputTexto.value;
      console.log(buscador);
      prodEncontrado= products.filter((productos) =>
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
formulario.addEventListener("keyup", filtrar)

    buscador ();  */

   /*      const filtrar = () => {
            shopBusqueda.innerHTML = ""; 
        const texto = formulario.value.toLowerCase();
        for ( data of products){
            let nombre = product.nombre.toLowerCase();
            if (nombre.indexOf (texto) !== -1){
           shopBusqueda.innerHTML += ` 
           <img class"ph" src="${product.img}">
           <h5>${product.nombre}</h5>
           <h4 class="price" >${product.precio} $</h4>
           `;
            }
        }
        if(shopBusqueda.innerHTML===""){
            shopBusqueda.innerHTML +=` 
            <h4 Producto no encontrado...</h4>
            `;
        }
     }
    formulario.addEventListener("keyup", filtrar)
     filtrar()
 */



//CREACION DE DIV + CARD

const products = async () =>{
const response = await fetch("./data/datos.json");
const data = await response.json();

data.forEach((product)=>{
    content = document.createElement("div");
    content.className = "card";
    content.innerHTML = ` 
    <img class"ph" src="${product.img}">
    <h5>${product.nombre.toUpperCase()}</h5>
    <h4 class="price" >${product.precio} $</h4>
    `;
     shop.append(content)

    comprar = document.createElement("button")
    comprar.innerText = "Añadir al carrito";
    comprar.className = "btn btn-outline-primary"
    content.append(comprar); 
/* libreria, button */
    comprar.addEventListener("click",() =>{
        Toastify({
            text: "Su producto fue agregado con exito",
            duration: 3000,
            close: true,
            gravity: "bottom", 
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, rgba(34, 52, 151, 0.021), rgb(128, 215, 203)))",
            },
            onClick: function(){} 
          }).showToast();
 /* agregado al carrito */
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
(repeat)? carrito.map((prod) => {
    if(prod.id === product.id){
            prod.cantidad++;
                }
            })
: carrito.push({ id: product.id,img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    
    carritoCounter();
    saveLocal();
    });
});
};
products();

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

/* CARRITO DE COMPRAS */
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
                <span class="delete-product"> ✖ </span>
                `;

        modalContainer.append(carritoContent);
        restar = carritoContent.querySelector(".restar")
        restar.addEventListener("click", () =>{
            if(product.cantidad !== 1){
            product.cantidad--;
        }
            saveLocal();
            pintarCarrito();
        });

        sumar = carritoContent.querySelector (".sumar")
        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        });
         eliminar = carritoContent.querySelector(".delete-product")
         eliminar.addEventListener("click", () => {
            eliminarProductos(product.id);
            /* libreria, button */
            Toastify({
                text: "Eliminado correctamente",
                duration: 3000,
                close: true,
                gravity: "top", 
                position: "left", 
                stopOnFocus: true, 
                style: {
                  background: "linear-gradient(to right, rgba(34, 52, 151, 0.021), rgb(128, 215, 203)))",
                },
                onClick: function(){} 
              }).showToast();
         })
    });

/* PRECIO FINAL DE LOS PRODUCTOS (el total)*/
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "totalContent"
    totalBuying.innerHTML =  `
    total a pagar: ${total} $
    <button id="botoncito" class="btn btn-outline-primary">Realizar compra: </button>
    `;
    modalContainer.append(totalBuying);

    let realiarCompra = document.querySelector("#botoncito")
    realiarCompra.addEventListener("click", () => {
       /* libreria, button */
       const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Realizar compra',
        text: "Desea comprar todos estos productos?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'si, comprar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Compra realizada con exito !',
            'Muchas gracias por su compra !',
            'success'
          )
        carrito.splice(0, carrito.length)
        localStorage.setItem("carrito", carrito)
        pintarCarrito();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'No pudimos realizar la compra',
            'Intentelo mas tarde muchas gracias ! :)',
            'error'
          )
        }
      })
    })
};

//ELIMINAR PRODUCTOS AGREGADOS AL CARRITO DE COMPRAS
verCarrito.addEventListener("click",pintarCarrito)

const eliminarProductos = (id) => {
    const foundId = carrito.find ((element) => element.id === id);
    carrito = carrito.filter ((carritoId) => {
        return carritoId !== foundId;
    })
    carritoCounter();
    saveLocal();
    pintarCarrito();
};
//CONTADOR
const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();
//set item = para setiar a localstorage mandar informacion
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

