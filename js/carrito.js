/* TIENDA ******************************************************************************/

const contenedorProducto = document.getElementById("contenedorProducto");
const selector = document.getElementById("selector")
const botonesAgregarAlCarrito = document.getElementsByClassName("producto__carrito--btn");
const carrito = document.querySelector(".elCarrito");
const botonComprar = document.querySelector(".btnComprar");
const botonVaciarCarrito = document.querySelector(".btnVaciar");

mostrarProductos(productos)

function mostrarProductos(x) {
  contenedorProducto.innerHTML = "";
  x.forEach(producto => {
    let div = document.createElement("div");
    div.innerHTML += `
                    <div class="producto">
                      <h2 class="producto__nombre">${producto.nombre}</h2>
                      <a class="producto__link" href="producto.html">
                        <img class="producto__imagen" src="../../img/cuadrosTienda/${producto.id}.jpg" alt="${producto.nombre}">
                      </a>
                        <div class="producto__informacion">
                          
                          <p class="producto__descripcion">${producto.descripcion}</p>
                          <p class="producto__precio">€${producto.precio}</p>
                          <button id="${producto.id}" class="producto__carrito--btn" type="button">Agregar al carrito</button>
                        </div>
    
                    </div>
    `
    contenedorProducto.appendChild(div);
  })
}

selector.addEventListener("change", () => {

  if (selector.value == "todos") {
    mostrarProductos(productos)

  }else if (selector.value == "menorPrecio") {
    mostrarProductos(productos.sort((a,b) => {
      if (a.precio > b.precio) {
        return 1;
    } else if (a.precio < b.precio) {
        return -1
    }else{
        return 0;
    }
    }));
  }else if (selector.value == "mayorPrecio") {
    mostrarProductos(productos.sort((a,b) => {
      if (b.precio > a.precio) {
        return 1;
    } else if (b.precio < a.precio) {
        return -1;
    }else{
        return 0;
    }
    }));
  }else if (selector.value == "cuadrosChicos"){
    mostrarProductos(productos.filter(e=> e.medidas == "small"));
}else if (selector.value == "cuadrosMedianos") {
    mostrarProductos(productos.filter(e=> e.medidas == "medium"))
}else{
    mostrarProductos(productos.filter(e=> e.medidas == "big"));
  }
})





for (const botonAgregar of botonesAgregarAlCarrito){
  botonAgregar.addEventListener("click", agregarAlCarritoClick);
};


function agregarAlCarritoClick(e){
  const boton = e.target
  const producto = boton.closest(".producto");

  const tituloProducto = producto.querySelector(".producto__nombre").textContent;
  const precioProducto = producto.querySelector(".producto__precio").textContent;
  const imgProducto = producto.querySelector(".producto__imagen").src;
  const descripcionProducto = producto.querySelector(".producto__descripcion").textContent;
  
  agregarAlCarrito (tituloProducto, precioProducto, imgProducto, descripcionProducto)
}

function agregarAlCarrito (tituloProducto, precioProducto, imgProducto, descripcionProducto) {

  const titulo = carrito.getElementsByClassName("tituloProducto");
  for (let i = 0; i < titulo.length; i++) {
    if (titulo[i].innerHTML === tituloProducto){
      let cantidadElemento = titulo[i].parentElement.parentElement.parentElement.querySelector(".cantidadItemCarrito");
      cantidadElemento.value++;
      actualizarCarrito()
      return;
    }
  }

  const carritoFlotante = document.createElement("div");
  const carritoFlotanteContenido = `
  <div class="card rounded-3 mb-4 productoCarrito">
              <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src="${imgProducto}"
                      class="img-fluid rounded-3" alt="#">
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2 tituloProducto">${tituloProducto}</p>
                    <p><span class="">${descripcionProducto}</span></p>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button class="btn btn-link px-2 botonMenos"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fas fa-minus"></i>
                    </button>
    
                    <input id="form1" min="0" name="quantity" value="1" type="number"
                      class="form-control form-control-sm cantidadItemCarrito text-center" />
    
                    <button class="btn btn-link px-2 botonMas"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 class="mb-0 totalRealPrecio">${precioProducto}</h5>
                  </div>
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg borrarItemCarrito"></i></a>
                  </div>
                </div>
              </div>
            </div>
  `

  carritoFlotante.innerHTML += carritoFlotanteContenido
  carrito.append(carritoFlotante)
  

  carritoFlotante.querySelector(".borrarItemCarrito").addEventListener("click", eliminarItemCarrito);
  
  carritoFlotante.querySelector(".cantidadItemCarrito").addEventListener("change", cantidadItemCarrito);

  carritoFlotante.querySelector(".botonMas").addEventListener("click", subeCantidad);

  carritoFlotante.querySelector(".botonMenos").addEventListener("click", bajaCantidad);

  actualizarCarrito()

}
 

function actualizarCarrito() {
  let total = 0;

  const totalCarrito = document.querySelector(".total");
  const itemsCarrito = document.querySelectorAll(".productoCarrito");

  itemsCarrito.forEach((item) => {
    const precioItemCarritoElemento = item.querySelector(".totalRealPrecio");
    const precioItemCarrito = Number(precioItemCarritoElemento.textContent.replace(`€`, ""));
    const cantidadItemCarritoElemento = item.querySelector(".cantidadItemCarrito")
    const cantidadItemCarrito = Number(cantidadItemCarritoElemento.value);
    total = total + precioItemCarrito * cantidadItemCarrito;
    if (total == 0){
      carrito.innerHTML = ""
    }
  });

  totalCarrito.innerHTML = `€${total.toFixed(2)}`;
}

function eliminarItemCarrito(e){
  const boton = e.target;
  boton.closest(".productoCarrito").remove();
  actualizarCarrito();
}

function cantidadItemCarrito(e){
  e.target;
  actualizarCarrito();
}

function subeCantidad(e){
  e.target;
  actualizarCarrito();
}

function bajaCantidad(e){
  e.target;
  actualizarCarrito();
}


botonComprar.addEventListener("click", botonComprarClick)

function botonComprarClick() {
  alert("Gracias por su compra =)")
  carrito.innerHTML = "";
  actualizarCarrito();
}

botonVaciarCarrito.addEventListener("click", () => {
  carrito.innerHTML = "";
  actualizarCarrito()})

