var product__Container = document.querySelector(".product__Container");
var men__Button = document.querySelector(".men__Button");
var women__Button = document.querySelector(".women__Button");
var accessories__Button = document.querySelector(".accessories__Button");
var search__Container__Img = document.querySelector(".search__Container__Img");
var search__Container__Input = document.querySelector(
  ".search__Container__Input"
);
let nav__cartAndMember__Container1080__Div = document.querySelector(
  ".nav__cartAndMember__Container1080__Div"
);
let cartAndMember__Container__Cart = document.querySelector(
  ".cartAndMember__Container__Cart"
);

switch (window.location.href.split("?")[1]) {
  case "men":
    productXMLRequest("products/men?", 0);
    break;
  case "women":
    productXMLRequest("products/women?", 0);
    break;
  case "accessories":
    productXMLRequest("products/accessories?", 0);
    break;
  default:
    if (window.location.href.split("?").length > 1) {
      productXMLRequest(
        `products/search?keyword=${decodeURI(
          window.location.href.split("?")[2].split("=")[1]
        )}`,
        0
      );
    } else {
      productXMLRequest("products/all?", 0);
    }
}
var logo__Img = document.querySelector(".logo__Img");

logo__Img.addEventListener("click", () => {
  window.location = "./index.html";
});

accessories__Button.addEventListener("click", () => {
  clearInnerHtml();
  productXMLRequest("products/accessories?", 0);
});

women__Button.addEventListener("click", () => {
  clearInnerHtml();
  productXMLRequest("products/women?", 0);
});

men__Button.addEventListener("click", () => {
  clearInnerHtml();
  productXMLRequest("products/men?", 0);
});

search__Container__Input.addEventListener("keypress", e => {
  var search__Text = search__Container__Input.value;
  if (search__Text) {
    if (e.keyCode === 13) {
      search__Container__Input.value = "";
      clearInnerHtml();
      productXMLRequest(`products/search?keyword=${search__Text}`, 0);
    }
  }
});

nav__cartAndMember__Container1080__Div.addEventListener("click", () => {
  window.location = "./cartPage.html";
});

cartAndMember__Container__Cart.addEventListener("click", () => {
  window.location = "./cartPage.html";
});

function productXMLRequest(cata, paging = 0) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      function callIAmNotAnonymous() {
        var product__Container__Rect = product__Container.getBoundingClientRect();
        if (
          document.readyState === "complete" &&
          product__Container__Rect.bottom < 1000 &&
          isLoad === false
        ) {
          productXMLRequest(cata, nextPage);
          isLoad = true;
        }
      }

      window.removeEventListener("scroll", callIAmNotAnonymous);
      creatElement(xhr.responseText);

      var nextPage = JSON.parse(responseText).paging;
      if (typeof nextPage === "number") {
        var isLoad = false;
        window.addEventListener("scroll", callIAmNotAnonymous);
      }

      var button = document.querySelectorAll(".button");
      button.forEach(element => {
        element.addEventListener("click", () => {
          window.removeEventListener("scroll", callIAmNotAnonymous);
        });
      });

      const node = document.querySelector(".search__Container__Input");
      node.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          window.removeEventListener("scroll", callIAmNotAnonymous);
        }
      });
    }
  };
  xhr.open(
    "GET",
    `https://api.appworks-school.tw/api/1.0/${cata}&paging=${paging}`
  );
  xhr.send();
}

function clearInnerHtml() {
  product__Container.innerHTML = "";
}

const creatElement = responseTextCreateElement => {
  if (JSON.parse(responseTextCreateElement)["data"].length === 0) {
    var notFound_createElement = document.createElement("h1");
    notFound_createElement.appendChild(
      document.createTextNode("Not Found Any")
    );
    product__Container.appendChild(notFound_createElement);
  } else {
    for (
      let i = 0;
      i < JSON.parse(responseTextCreateElement).data.length;
      i++
    ) {
      page = JSON.parse(responseTextCreateElement).paging;
      responseText = responseTextCreateElement;
      var items = JSON.parse(responseTextCreateElement).data[i];
      var imgURL = items.main_image;
      var colors = items["colors"];
      var colorsAmount = colors.length;
      var price = items.price;
      var title = items.title;

      var product__Container__Each__CreateElement = document.createElement(
        "div"
      );
      product__Container__Each__CreateElement.className =
        "product__Container__Each";

      var product__Container__Each__Image__CreateElement__A = document.createElement(
        "a"
      );
      product__Container__Each__Image__CreateElement__A.href = `./product.html?id=${
        items.id
      }`;
      var product__Container__Each__Image__CreateElement = document.createElement(
        "img"
      );
      product__Container__Each__Image__CreateElement.src = imgURL;
      product__Container__Each__Image__CreateElement.className =
        "product__Container__Each__Image";
      product__Container__Each__Image__CreateElement__A.appendChild(
        product__Container__Each__Image__CreateElement
      );

      var product__Container__Each__Title__CreateElement = document.createElement(
        "p"
      );
      product__Container__Each__Title__CreateElement.className =
        "product__Container__Each__Title";
      product__Container__Each__Title__CreateElement.appendChild(
        document.createTextNode(title)
      );

      var product__Container__Each__Price__CreateElement = document.createElement(
        "p"
      );
      product__Container__Each__Price__CreateElement.className =
        "product__Container__Each__Price";
      product__Container__Each__Price__CreateElement.appendChild(
        document.createTextNode(price)
      );

      product__Container__Each__CreateElement.appendChild(
        product__Container__Each__Image__CreateElement__A
      );

      var product__Container__Each__color__CreateElement = document.createElement(
        "div"
      );
      product__Container__Each__color__CreateElement.className =
        "product__Container__Each__color";
      for (let k = 0; k < colorsAmount; k++) {
        var product__Container__Each__color__CreateElement__Each = document.createElement(
          "img"
        );
        product__Container__Each__color__CreateElement__Each.style.backgroundColor = `#${
          colors[k].code
        }`;
        product__Container__Each__color__CreateElement.appendChild(
          product__Container__Each__color__CreateElement__Each
        );
      }

      product__Container__Each__CreateElement.appendChild(
        product__Container__Each__color__CreateElement
      );
      product__Container__Each__CreateElement.appendChild(
        product__Container__Each__Title__CreateElement
      );
      product__Container__Each__CreateElement.appendChild(
        product__Container__Each__Price__CreateElement
      );

      product__Container.appendChild(product__Container__Each__CreateElement);
    }
  }
};
