function obtenerAlmacenamientoLocal(llave) {
    const datos = JSON.parse(localStorage.getItem(llave))
    return datos
}
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}

function addToCart(nombre, img, precio) {
    let cantidad = 1;
    let productoExists = false;
    for(let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == nombre) {
            productos[i].cantidad++;
            productos[i].precio = precio * productos[i].cantidad;
            productoExists = true;
            break;
        }
    }

    if (!productoExists) {
        productos.push({
            nombre,
            img,
            precio,
            cantidad
        });
    }
    
    guardarAlmacenamientoLocal('productos', productos);
}

var productos = obtenerAlmacenamientoLocal('productos') || [];






