const mail = document.querySelector(".list-mail");
const destock = document.getElementById("desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productContainer = document.querySelector(".main-cointainer");
const iconoClose = document.querySelector(".icono-close");
const productDetail = document.querySelector(".container-product_detail");
const productCards = document.querySelector(".product-card");
const imgProductCards = document.querySelector(".product-img");
const navegacion = document.querySelector(".navegationBar");

mail.addEventListener("click", cambiarClase);
burgerMenu.addEventListener("click", cambiarClaseMobile);
function cambiarClase() {
  // ayuda a interar entre clase activado y desactivado
  destock.classList.toggle("inactive");
}
function cambiarClaseMobile() {
  // Cerramos el product Detall cuando abrimos el menu
  productDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}
// carrito de compras
const car = document.querySelector(".carShop");
const aside = document.querySelector(".main-asaide");

car.addEventListener("click", ocultarAside);
car.addEventListener("click", closeDetall);

function closeDetall() {
  if (!aside.classList.contains("inactive")) {
    productDetail.classList.add("inactive");
  }
}
function ocultarAside() {
  aside.classList.toggle("inactive");
}

//  creando elementos de html desde Js

// usamos un for of
const productList = [];
function agregarElementoArr(arr, name, value, img) {
  arr.push({
    nombre: name,
    value: value,
    img: img,
  });
}
agregarElementoArr(
  productList,
  "bike",
  200,
  "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=300"
);
agregarElementoArr(
  productList,
  "computador",
  400,
  "https://images.pexels.com/photos/11255396/pexels-photo-11255396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
agregarElementoArr(
  productList,
  "pantalla",
  300,
  "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);

for (const producto of productList) {
  const productCar = document.createElement("div");
  productCar.classList.add("product-card");

  const img = document.createElement("img");
  img.classList.add("product-img");
  img.setAttribute("alt", "producto en venta");
  img.setAttribute("src", producto.img);

  // agrego la funcion de apertura del menu al tocar la imagen creada en el html
  img.addEventListener("click", openMenu);
  img.addEventListener("click", closeMenu);

  function openMenu() {
    destock.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetail.classList.toggle("inactive");
  }
  // funcio que cierra el carrito de compras cuando se abre el menu de detalles
  function closeMenu() {
    if (!productDetail.classList.contains("inactive")) {
      aside.classList.add("inactive");
    }
  }

  const productInf = document.createElement("div");
  productInf.classList.add("info");

  const productInfP = document.createElement("div");
  productInfP.classList.add("p");

  const productName = document.createElement("p");
  productName.classList.add("name");
  productName.innerText = producto.nombre;

  const productValue = document.createElement("p");
  productValue.classList.add("info-value");
  productValue.innerText = " $ " + producto.value;

  const figure = document.createElement("figure");
  const figureImg = document.createElement("img");
  figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

  //maquetacion de herencia

  productCar.append(img, productInf);

  productInf.append(productInfP, figure);

  productInfP.append(productName, productValue);

  figure.appendChild(figureImg);

  productContainer.appendChild(productCar);
}

// cerrando el menu

iconoClose.addEventListener("click", CloseMenuProductDetal);
function CloseMenuProductDetal() {
  productDetail.classList.toggle("inactive");
}
// cerrando carrito si los detalles estan abiertos
