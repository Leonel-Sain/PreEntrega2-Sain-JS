//DECLARACION DE VARIABLES E ID
const shop = document.querySelector("#shopContent");
const precioProducto = document.querySelector("#precio");
const verCarrito = document.querySelector("#verCarrito");
const modalContainer = document.querySelector("#modalContainer");
const cantidadCarrito = document.querySelector("#cantidadCarrito");
const inputBusqueda = document.getElementById("formulario")

let content
let comprar
let carritoContent
let restar
let sumar
let eliminar
let product
let realiarCompra
//get item = obtenemos lo que guardamos con el set item
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// INICIO DE CARRITO DE COMPRAS
//CREACION DE DIV + CARD
const renderProducts = (array) => {
    shop.innerHTML = "";

    array.forEach((product) => {
        content = document.createElement("div");
        content.className = "card";
        content.innerHTML = ` 
    <img class"ph" src="${product.img}">
    <h5>${product.nombre.toLowerCase()}</h5>
    <h4 class="price" >${product.precio} $</h4>
    `;
        shop.append(content)

        comprar = document.createElement("button")
        comprar.innerText = "Añadir al carrito";
        comprar.className = "btn btn-outline-primary"
        content.append(comprar);
        /* libreria, button */
        comprar.addEventListener("click", () => {
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
                onClick: function () { }
            }).showToast();
            /* agregado al carrito */
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

            (repeat) ? carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad++;
                }
            })
                : carrito.push({
                    id: product.id, img: product.img,
                    nombre: product.nombre,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
            carritoCounter();
            saveLocal();
        });
    });
}
//BARRA DE BUSQUEDA

inputBusqueda.addEventListener("keyup", async (e) => {
    const entrada = e.target.value.toLowerCase()
    console.log(entrada);
    const response = await fetch("./data/datos.json");
    const data = await response.json();

    const productosFiltrados = await data.filter(p => p.nombre.toLowerCase().includes(entrada))
    console.log(productosFiltrados);
    renderProducts(productosFiltrados);
})

//CREACION DE DIV + CARD

const products = async () => {
    const response = await fetch("./data/datos.json");
    const data = await response.json();

    renderProducts(data)

};
products();

/* HEADER CONTENT CARRITO */
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = ` 
    <h1 class= "modal-header-title">Carrito de compras.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h3");
    modalButton.innerText = "X";
    modalButton.className = "modalHeaderButton";

    modalButton.addEventListener("click", () => {
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
        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        sumar = carritoContent.querySelector(".sumar")
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
                onClick: function () { }
            }).showToast();
        })
    });

    /* PRECIO FINAL DE LOS PRODUCTOS (el total)*/
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "totalContent"
    totalBuying.innerHTML = `
    total a pagar: ${total} $
    <button id="botoncito" class="btn btn-outline-primary">Realizar compra: </button>
    `;
    modalContainer.append(totalBuying);

    realiarCompra = document.querySelector("#botoncito")
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
                Swal.fire({
                    title: '<strong>Realizar compra </strong>',
                    icon: 'info',
                    html:
                    '<div class="contenedor credit-card" id="realizarCompra">'+
                    '<h3>Finalizar Compra</h3>'+
                    ' <form action="" id="credit-card">'+
                    ' <div class="form-control">'+
                    ' <label for="card-number">Nombre del titular</label>'+
                    ' <input type="text" placeholder="Max Power" id="titular" required />'+
                    ' </div>'+
                    ' <div class="form-control">'+
                    ' <label for="card-number">Número de tarjeta</label>'+
                    ' <input type="text" placeholder="0000 000 000 0000" id="card-number" required />'+
                    ' </div>'+
                    ' <div class="form-control">'+
                    '  <label for="ccv">Código de seguridad</label>'+
                    '  <input type="text" id="ccv" placeholder="000" maxlength="3" required />'+
                    ' </div>'+
                    '<div class="form-control">'+
                    ' <div class="icons">'+
                    ' <i class="fa-brands fa-cc-visa"></i>'+
                    '<i class="fa-brands fa-cc-amex"></i>'+
                    ' <i class="fa-brands fa-cc-diners-club"></i>'+
                    '  <i class="fa-brands fa-cc-mastercard"></i>'+
                    ' </div>'+
                    '  </div>',

                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i>Realizar compra',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText:
                      '<i class="fa fa-thumbs-down"></i> Cancelar compra',
                    cancelButtonAriaLabel: 'Thumbs down'
                  })
                carrito.splice(0, carrito.length)
                localStorage.setItem("carrito", JSON.stringify(carrito))
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
verCarrito.addEventListener("click", pintarCarrito)

const eliminarProductos = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    carrito = carrito.filter((carritoId) => {
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

