function obtenerAlmacenamientoLocal(llave) {
  const datos = JSON.parse(localStorage.getItem(llave));
  return datos;
}
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
  localStorage.setItem(llave, JSON.stringify(valor_a_guardar));
}

function listarProductos(sealizoPedido = false) {
  if (productos.length == 0) {
      productContainer.innerHTML = "<div class='mensaje-carrito'><h2>EL CARRITO ESTA VACIO</h2></div>";
      if(sealizoPedido) productContainer.innerHTML = "<h2>PEDIDO REALIZADO, EL VENDEDOR SE PONDRA EN CONTACTO CONTINGO</h2>"
    buttonProductos.classList.add('display-none')
    return;
  }

  for (let i = 0; i < productos.length; i++) {
    buttonProductos.classList.remove('display-none')

    productContainer.innerHTML += `
            <div class="product-content">
                <div class="product"> 
                    <img src="${productos[i].img}" alt="">
                    <div class="product-txt">
                        <h3>${productos[i].nombre}</h3>
                        <p class="precio">$${productos[i].precio}.00</p>
                        <i>Cantidad: ${productos[i].cantidad}</i>
                    </div>
                </div>
            </div>
        `;
  }
}

function realizarPedido() {
    productos = [];
    guardarAlmacenamientoLocal('productos', productos);
    listarProductos(true);
}

var productContainer = document.querySelector(".prodshow");
var buttonProductos = document.querySelector(".button_pedir-productos");
var productos = obtenerAlmacenamientoLocal("productos") || [];

listarProductos();
