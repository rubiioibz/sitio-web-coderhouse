const contenedorProducto2 = document.querySelector('.contenedorProducto2');

function mostrarProducto (array){
    contenedorProducto2.innerHTML = "";

    const [{nombre}, {precio}, {img}, {descripcion}] = productos
    console.log(nombre);
    
    let div = document.createElement('div');
        div.innerHTML = `
                        <h1 class="text-center m-2">${nombre}</h1>

                        <div class="gridProducto">

                            <img class="imgCuadro img-fluid" src="${img}" alt="imagen rubiio posca">

                            <div class="contenedorProducto">

                                <form class="formProducto">
                                <input class="formCampoProducto" type="number" placeholder="Cantidad" min="1">
                                <input class="formSubmit" type="submit" value="Agregar al carrito">
                                </form>

                                <h3>Precio : ${precio}</h3>
                                
                                <p class="text-center m-4">${descripcion}</p>
                            </div>
                        </div>`

    contenedorProducto2.appendChild(div)
}

mostrarProducto(productos)