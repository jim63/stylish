let men__Button = document.querySelector(".men__Button");
let women__Button = document.querySelector(".women__Button");
let accessories__Button = document.querySelector(".accessories__Button");
let search__Container__Input = document.querySelector(
  ".search__Container__Input"
);
let logo__Img = document.querySelector(".logo__Img");
let cartAndMember__Container__Cart = document.querySelector(
  ".cartAndMember__Container__Cart"
);
let nav__cartAndMember__Container1080__Div = document.querySelector(
  ".nav__cartAndMember__Container1080__Div"
);

men__Button.addEventListener("click", () => {
  window.location = "./index.html?men";
});

women__Button.addEventListener("click", () => {
  window.location = "./index.html?women";
});

accessories__Button.addEventListener("click", () => {
  window.location = "./index.html?accessories";
});

search__Container__Input.addEventListener("keypress", e => {
  var search__Text = search__Container__Input.value;
  if (search__Text) {
    if (e.keyCode === 13) {
      search__Container__Input.value = "";
      window.location = `./index.html?search?keyword=${search__Text}`;
    }
  }
});

nav__cartAndMember__Container1080__Div.addEventListener("click", () => {
  window.location = "./cartPage.html";
});

cartAndMember__Container__Cart.addEventListener("click", () => {
  window.location = "./cartPage.html";
});

logo__Img.addEventListener("click", () => {
  window.location = "./index.html";
});
