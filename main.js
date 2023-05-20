const mail = document.querySelector(".list-mail");
const destock = document.getElementById("desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productContainer = document.querySelector(".main-cointainer")

mail.addEventListener("click", cambiarClase);
burgerMenu.addEventListener("click", cambiarClaseMobile);
function cambiarClase() {
  // ayuda a interar entre clase activado y desactivado
  destock.classList.toggle("inactive");
}
function cambiarClaseMobile() {
  mobileMenu.classList.toggle("inactive");
}
// carrito de compras
const car = document.querySelector(".carShop");
const aside = document.querySelector('.main-asaide')

car.addEventListener('click',ocultarAside);

function ocultarAside() {
  aside.classList.toggle("inactive");
}

//  creando elementos de html desde Js 

// usamos un for of 
const productList = [];
function agregarElementoArr(arr,name,value,img) {
  arr.push({
    nombre: name,
    value: value,
    img: img,
  })
};
agregarElementoArr(productList,'bike',200,"https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=300");
agregarElementoArr(productList,'computador',400,"https://images.pexels.com/photos/11255396/pexels-photo-11255396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
agregarElementoArr(productList,'pantalla',300,"https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");



// { <div class="card-container">
//         <div class="product-card">
//                 <img src= "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=300" class="product-img" alt="producto en venta">
//             <div class="info">
//                     <div class="p">
//                        <p class="name">Bike</p>
//                        <p class="info-value">$120,000</p>
//                     </div>
//                     <figure>
//                         <img src="./icons/bt_add_to_cart.svg" alt="">
//                     </figure>
//                 </div>
//             </div>

//     </div> }
for (const producto of productList) {

  const productCar = document.createElement('div');
  productCar.classList.add('product-card')

  const img = document.createElement('img');
  img.classList.add('product-img');
  img.setAttribute('alt','producto en venta');
  img.setAttribute('src',producto.img);

  const productInf = document.createElement('div');
  productInf.classList.add('info');


  const productInfP = document.createElement('div');
  productInf.classList.add('p')

  
  const productName = document.createElement('p');
  productName.classList.add('name');
  productName.innerText = 'Articulo' + producto.nombre;

 
  const productValue = document.createElement('p');
  productValue.classList.add('info-value');
  productValue.innerText =' $ ' + producto.value;

  const figure = document.createElement('figure')
  const figureImg = document.createElement('img')
  figureImg.setAttribute('src','./icons/bt_add_to_cart.svg');

  //maquetacion de herencia 
  

  productCar.append(img,productInf)

  productInf.append(productInfP,figure);


  productInfP.append(productName,productValue)

  figure.appendChild(figureImg);


  productContainer.appendChild(productCar);

}
