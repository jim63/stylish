console.log(window.location.href);
var id = window.location.href.split("?")[1];

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var responseText__JSON = JSON.parse(xhr.responseText)["data"];
    productPageCreateElement(responseText__JSON);
    shoppingCartLocalStorage(responseText__JSON);
  }
};
xhr.open(
  "GET",
  `https://api.appworks-school.tw/api/1.0/products/details?${id}`
);
xhr.send();

const productPageCreateElement = responseText__JSON => {
  var productPage__Container__Sub__Img = document.querySelector(
    ".productPage__Container__Sub__Img img"
  );
  productPage__Container__Sub__Img.src = responseText__JSON["main_image"];

  var productPage__Container__Sub__Sub__Info__Name = document.querySelector(
    ".productPage__Container__Sub__Sub__Info__Name"
  );
  var productPage__Container__Sub__Sub__Info__Name__T = document.createTextNode(
    responseText__JSON["title"]
  );
  productPage__Container__Sub__Sub__Info__Name.appendChild(
    productPage__Container__Sub__Sub__Info__Name__T
  );

  var productPage__Container__Sub__Sub__Info__ID = document.querySelector(
    ".productPage__Container__Sub__Sub__Info__ID"
  );
  var productPage__Container__Sub__Sub__Info__ID__T = document.createTextNode(
    responseText__JSON["id"]
  );
  productPage__Container__Sub__Sub__Info__ID.appendChild(
    productPage__Container__Sub__Sub__Info__ID__T
  );

  var productPage__Container__Sub__Sub__Info__Price = document.querySelector(
    ".productPage__Container__Sub__Sub__Info__Price"
  );
  var productPage__Container__Sub__Sub__Info__Price__T = document.createTextNode(
    `TWD.${responseText__JSON["price"]}`
  );
  productPage__Container__Sub__Sub__Info__Price.appendChild(
    productPage__Container__Sub__Sub__Info__Price__T
  );

  var productPage__Container__Sub__Info__Color = document.querySelector(
    ".productPage__Container__Sub__Info__Color"
  );
  for (let color = 0; color < responseText__JSON["colors"].length; color++) {
    var productPage__Container__Sub__Info__Color__block = document.createElement(
      "div"
    );
    productPage__Container__Sub__Info__Color__block.className +=
      "productPage__Container__Sub__Info__Color__block";
    var productPage__Container__Sub__Info__Color__block__Img = document.createElement(
      "img"
    );
    productPage__Container__Sub__Info__Color__block__Img.style.backgroundColor = `#${
      responseText__JSON["colors"][color]["code"]
    }`;
    productPage__Container__Sub__Info__Color__block.appendChild(
      productPage__Container__Sub__Info__Color__block__Img
    );
    productPage__Container__Sub__Info__Color.appendChild(
      productPage__Container__Sub__Info__Color__block
    );
  }

  var productPage__Container__Sub__Info__Size = document.querySelector(
    ".productPage__Container__Sub__Info__Size"
  );
  for (let size = 0; size < responseText__JSON["sizes"].length; size++) {
    var productPage__Container__Sub__Info__Size__Size__Block = document.createElement(
      "div"
    );
    productPage__Container__Sub__Info__Size__Size__Block.className +=
      "productPage__Container__Sub__Info__Size__Size__Block";
    var productPage__Container__Sub__Info__Size__Size__Block__P = document.createElement(
      "p"
    );
    var productPage__Container__Sub__Info__Size__Size__Block__P__T = document.createTextNode(
      responseText__JSON["sizes"][size]
    );
    productPage__Container__Sub__Info__Size__Size__Block__P.appendChild(
      productPage__Container__Sub__Info__Size__Size__Block__P__T
    );
    productPage__Container__Sub__Info__Size__Size__Block.appendChild(
      productPage__Container__Sub__Info__Size__Size__Block__P
    );
    productPage__Container__Sub__Info__Size.appendChild(
      productPage__Container__Sub__Info__Size__Size__Block
    );
  }

  var productPage__Container__Sub__Info__Note__NoResponsibility = document.querySelector(
    ".productPage__Container__Sub__Info__Note__NoResponsibility"
  );
  var productPage__Container__Sub__Info__Note__NoResponsibility__P = document.createElement(
    "p"
  );
  var productPage__Container__Sub__Info__Note__NoResponsibility__P__T = document.createTextNode(
    `*${responseText__JSON["note"]}`
  );
  productPage__Container__Sub__Info__Note__NoResponsibility__P.appendChild(
    productPage__Container__Sub__Info__Note__NoResponsibility__P__T
  );
  productPage__Container__Sub__Info__Note__NoResponsibility.appendChild(
    productPage__Container__Sub__Info__Note__NoResponsibility__P
  );

  var productPage__Container__Sub__Info__Note__NoResponsibility = document.querySelector(
    ".productPage__Container__Sub__Info__Note__Content"
  );
  var productPage__Container__Sub__Info__Note__NoResponsibility__P__Texture = document.createElement(
    "p"
  );
  var productPage__Container__Sub__Info__Note__NoResponsibility__P__Texture__T = document.createTextNode(
    `*${responseText__JSON["texture"]}`
  );
  productPage__Container__Sub__Info__Note__NoResponsibility__P__Texture.appendChild(
    productPage__Container__Sub__Info__Note__NoResponsibility__P__Texture__T
  );
  productPage__Container__Sub__Info__Note__NoResponsibility.appendChild(
    productPage__Container__Sub__Info__Note__NoResponsibility__P__Texture
  );

  var description = responseText__JSON["description"].split("\r\n");

  var productPage__Container__Sub__Info__Note__NoResponsibility__P__Thick = document.createElement(
    "p"
  );
  var productPage__Container__Sub__Info__Note__NoResponsibility__P__Thick__T = document.createTextNode(
    description[0]
  );
  productPage__Container__Sub__Info__Note__NoResponsibility__P__Thick.appendChild(
    productPage__Container__Sub__Info__Note__NoResponsibility__P__Thick__T
  );
  productPage__Container__Sub__Info__Note__NoResponsibility.appendChild(
    productPage__Container__Sub__Info__Note__NoResponsibility__P__Thick
  );

  var productPage__Container__Sub__Info__Note__NoResponsibility__P__Flex = document.createElement(
    "p"
  );
  var productPage__Container__Sub__Info__Note__NoResponsibility__P__Flex__T = document.createTextNode(
    description[1]
  );
  productPage__Container__Sub__Info__Note__NoResponsibility__P__Flex.appendChild(
    productPage__Container__Sub__Info__Note__NoResponsibility__P__Flex__T
  );
  productPage__Container__Sub__Info__Note__NoResponsibility.appendChild(
    productPage__Container__Sub__Info__Note__NoResponsibility__P__Flex
  );

  var productPage__Container__Sub__Info__Note__MadeIn = document.querySelector(
    ".productPage__Container__Sub__Info__Note__MadeIn"
  );

  var productPage__Container__Sub__Info__Note__MadeIn__P = document.createElement(
    "p"
  );
  var productPage__Container__Sub__Info__Note__MadeIn__P__T = document.createTextNode(
    `素材產地/ ${responseText__JSON["place"]}`
  );
  var productPage__Container__Sub__Info__Note__MadeIn__P__2 = document.createElement(
    "p"
  );
  var productPage__Container__Sub__Info__Note__MadeIn__P__2__T = document.createTextNode(
    `加工產地/ ${responseText__JSON["place"]}`
  );
  productPage__Container__Sub__Info__Note__MadeIn__P.appendChild(
    productPage__Container__Sub__Info__Note__MadeIn__P__T
  );
  productPage__Container__Sub__Info__Note__MadeIn__P__2.appendChild(
    productPage__Container__Sub__Info__Note__MadeIn__P__2__T
  );

  productPage__Container__Sub__Info__Note__MadeIn.appendChild(
    productPage__Container__Sub__Info__Note__MadeIn__P
  );
  productPage__Container__Sub__Info__Note__MadeIn.appendChild(
    productPage__Container__Sub__Info__Note__MadeIn__P__2
  );

  var productPage__Container__Detail = document.querySelector(
    ".productPage__Container__Detail"
  );
  var productPage__Container__Detail__Text = document.createElement("p");
  productPage__Container__Detail__Text.className +=
    "productPage__Container__Detail__Text";
  var productPage__Container__Detail__Text__T = document.createTextNode(
    responseText__JSON["story"]
  );
  productPage__Container__Detail__Text.appendChild(
    productPage__Container__Detail__Text__T
  );
  productPage__Container__Detail.appendChild(
    productPage__Container__Detail__Text
  );

  for (let img = 0; img < responseText__JSON["images"].length; img++) {
    var productPage__Container__Detail__Pic = document.createElement("img");
    productPage__Container__Detail__Pic.className +=
      "productPage__Container__Detail__Pic";
    productPage__Container__Detail__Pic.src = responseText__JSON["images"][img];
    productPage__Container__Detail.appendChild(
      productPage__Container__Detail__Pic
    );
  }

  productHandleStock(responseText__JSON);
};
