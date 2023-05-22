// contenedores de variables del doom, son para mover elementos.
const mail = document.querySelector(".list-mail");
const destock = document.getElementById("desktop-menu");
const burgerMenu = document.querySelector(".menu");
// esta es la del menu mobile.
const mobileMenu = document.querySelector(".mobile-menu");
//contenedor  principal

const productContainer = document.querySelector(".main-cointainer");
const iconoClose = document.querySelector(".icono-close");
const productDetail = document.querySelector(".container-product_detail");
const productCards = document.querySelector(".product-card");
const imgProductCards = document.querySelector(".product-img");
const navegacion = document.querySelector(".navegationBar");

// fondo del contenedor del menu
const containerAsideMenu = document.querySelector(".container-aside");
const sinArticulosImg = document.querySelector(".empity-h4");
const empityImg = document.querySelector(".empity-img");


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
  destock.classList.add("inactive");
  aside.classList.toggle("inactive");
}

//  creando elementos de html desde Js

// usamos un for of
const productList = [];

// funcion para comprobar si el array esta vacio

// function IsEmpyty(list) {
//   const list = [];
//      if (list.leng === 0 ) {
//     containerAsideMenu.classList.add('container-E')
//   }
//  };

// Funcion para agregar elementos
function agregarElementoArr(arr,id=1, name, value, img) {
  arr.push({
    id: id++,
    nombre: name,
    value: value,
    img: img,
  });
}
agregarElementoArr(
  productList,
  1,
  "bike",
  200,
  "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=300"
);
agregarElementoArr(
  productList,
  2,
  "computador",
  400,
  "https://images.pexels.com/photos/11255396/pexels-photo-11255396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
agregarElementoArr(
  productList,
  3,
  "pantalla",
  300,
  "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);

agregarElementoArr(
  productList,
  4,
  "gafas",
  40,
  "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
agregarElementoArr(
  productList,
  7,
  "PS4",
  1200,
  "https://images.pexels.com/photos/14824332/pexels-photo-14824332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
agregarElementoArr(
  productList,
  5,
  "tv retro",
  500,
  "https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
agregarElementoArr(
  productList,
  1,
  "camisa",
  600,
  "https://images.pexels.com/photos/11985575/pexels-photo-11985575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);

// crea un div con la clase info o cualquier otro elemento html
function upElement(element = "div", className = "none") {
  const newElement = document.createElement(element);
  newElement.classList.add(className);

  return newElement;
}
// Funcion Para crear un parrafo

function upParrafo(claseName, textIner) {
  const parrafo = upElement("p", claseName);
  parrafo.innerText = textIner;
  return parrafo;
}

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

  const productInf = upElement("div", "info");

  const productInfP = upElement("div", "p");

  const productName = upElement("p", "name");

  productName.innerText = producto.nombre;
  const productValue = upElement("p", "info-value");

  productValue.innerText = " $ " + producto.value;

  const figure = upElement("figure");
  const figureImg = upElement("img");

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

// fucion para crear articulos del carrito de compras
function getArticules(Listarticules) {
  for (const articule of Listarticules) {

  const containerArticule = upElement("div", "container-article");
 // imagen 
 const imgArticule = upElement("img");
 const imagenArtule = articule.img
 imgArticule.setAttribute('src',imagenArtule)
 imgArticule.setAttribute("alt", "articule");
 //name 
 const name = articule.nombre; 
 const NameArticule = upParrafo('description',name)
// valor
 const values =  " $ " + articule.value ;
 const valueArticule = upParrafo("value",values);
// Img close
 const imgClose = upElement("img",'close');
 imgClose.getAttribute('alt','close');
 imgClose.getAttribute('src','./icons/icon_close.png');
 
 containerArticule.append(imgArticule,NameArticule,valueArticule,imgClose)
 
 containerAsideMenu.appendChild(containerArticule);
  }
 }

getArticules(productList);

