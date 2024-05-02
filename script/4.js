// Открыть форму входа
function openLoginForm() {
  document.getElementById("loginForm").style.display = "block";
}

// Закрыть форму входа
function closeLoginForm() {
  document.getElementById("loginForm").style.display = "none";
}

// Открыть форму регистрации
function openRegistrationForm() {
  document.getElementById("registrationForm").style.display = "block";
}

// Закрыть форму регистрации
function closeRegistrationForm() {
  document.getElementById("registrationForm").style.display = "none";
}

// JavaScript (script.js)

// Объединение двух скриптов для работы с корзиной товаров

let i = 0;
let images = ["10", "1.1", "1.2"];
let files = ["produkt10.html", "produkt11.html", "produkt12.html"];
let prices = [2500, 2100, 1000];
let cart = [];

// Открыть корзину
function openCart() {
  document.getElementById("cart").style.display = "block";
}

// Закрыть корзину
function closeCart() {
  document.getElementById("cart").style.display = "none";
}

// Переключение на предыдущее изображение
function previousImage() {
  if (i === 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  document.getElementById("image").src = "images/" + images[i] + ".jpg";
}

// Переключение на следующее изображение
function nextImage() {
  if (i === images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  document.getElementById("image").src = "images/" + images[i] + ".jpg";
}

// Открыть файл продукта
function openFile() {
  window.location.href = files[i];
}

// Добавить товар в корзину
function addToCart() {
  let item = {
    image: "images/" + images[i] + ".jpg",
    price: prices[i],
  };
  cart.push(item);
  updateCart();
}

// Удалить товар из корзины
function removeItem(index) {
  cart.splice(index, 1); // Удаляем товар из массива cart
  updateCart();
}

// Обновить содержимое корзины
function updateCart() {
  let cartElement = document.getElementById("cartList");
  let totalElement = document.getElementById("totalAmount");
  cartElement.innerHTML = "";

  let total = 0;

  for (let j = 0; j < cart.length; j++) {
    let item = cart[j];
    let listItem = document.createElement("li");
    listItem.className = "cart-item";
    let imageElement = document.createElement("img");
    imageElement.src = item.image;
    imageElement.className = "cart-item-image";
    listItem.appendChild(imageElement);

    let priceElement = document.createElement("span");
    priceElement.innerHTML = "Цена: " + item.price;
    listItem.appendChild(priceElement);

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Удалить";
    removeButton.className = "button-remove";
    removeButton.onclick = function () {
      removeItem(j); // Вызываем функцию removeItem() с индексом товара
    };
    listItem.appendChild(removeButton);

    cartElement.appendChild(listItem);

    total += item.price;
  }

  totalElement.innerHTML = "Общая сумма: " + total + " руб.";
}
