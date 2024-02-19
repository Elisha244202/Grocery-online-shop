const menu = document.querySelector(".fa-solid.fa-bars");

menu.onclick = () => {
  document.querySelector(".header .menu").classList.toggle("active");
  document.querySelector(".header .search").classList.remove("active");
  document.querySelector(".header .cart-container").classList.remove("active");
  document.querySelector(".header .login").classList.remove("active");
};

const search = document.querySelector(".fa-solid.fa-search");

search.onclick = () => {
  document.querySelector(".header .search").classList.toggle("active");
  document.querySelector(".header .menu").classList.remove("active");
  document.querySelector(".header .cart-container").classList.remove("active");
  document.querySelector(".header .login").classList.remove("active");
};


const cart = document.querySelector(".fa-solid.fa-cart-shopping");

cart.onclick = () => {
  document.querySelector(".header .cart-container").classList.toggle("active");
  document.querySelector(".header .menu").classList.remove("active");
  document.querySelector(".header .search").classList.remove("active");
  document.querySelector(".header .login").classList.remove("active");
};


const login = document.querySelector(".fa-solid.fa-user");

login.onclick = () => {
  document.querySelector(".header .login").classList.toggle("active");
  document.querySelector(".header .cart-container").classList.remove("active");
  document.querySelector(".header .menu").classList.remove("active");
  document.querySelector(".header .search").classList.remove("active");
};