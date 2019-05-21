function cartPage() {
  // render cart items
  let stockStatus = JSON.parse(localStorage.getItem("shoppingCart"));

  if (JSON.parse(localStorage.getItem("shoppingCart")).length > 0) {
    let product_All = document.querySelector(".product_All");
    product_All.innerHTML = "";

    for (
      let numOfStockStatus = 0;
      numOfStockStatus < stockStatus.length;
      numOfStockStatus++
    ) {
      let stockStatusEach = stockStatus[numOfStockStatus];
      getDetail(
        stockStatusEach.id,
        stockStatusEach.amount,
        stockStatusEach.color,
        stockStatusEach.size
      );
    }

    // add function to delete button
    setTimeout(() => {
      deleteCartItems();
    }, 1500);
  } else {
    renderNothingInCart();
  }
}

function getDetail(id, amount, colorCode, size) {
  fetch(`https://api.appworks-school.tw/api/1.0/products/details?id=${id}`)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      response.json().then(function(data) {
        let maxAmount = findMax(data["data"], size, colorCode);
        let imgURL = data["data"]["main_image"];
        let productName = data["data"]["title"];
        let color = findColor(data["data"], colorCode);
        let colorHex = colorCode;
        let price = data["data"]["price"];
        createCartElement(
          imgURL,
          id,
          productName,
          color,
          colorHex,
          size,
          amount,
          maxAmount,
          price
        );
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

function findMax(data, size, color) {
  let variantsData = data.variants;
  for (
    let numOfVariants = 0;
    numOfVariants < variantsData.length;
    numOfVariants++
  ) {
    if (
      variantsData[numOfVariants]["color_code"] === color &&
      variantsData[numOfVariants]["size"] === size
    ) {
      return variantsData[numOfVariants]["stock"];
    }
  }
}

function findColor(data, color) {
  let colors = data["colors"];
  for (let numOfColors = 0; numOfColors < colors.length; numOfColors++) {
    if (colors[numOfColors]["code"] === color) {
      return colors[numOfColors]["name"];
    }
  }
}

function createCartElement(
  imgURL,
  id,
  productName,
  color,
  colorHex,
  size,
  amount,
  maxAmount,
  price
) {
  let cart__Container__Sub__Total = document.createElement("div");
  cart__Container__Sub__Total.className = "cart__Container__Sub__Total";
  cart__Container__Sub__Total.setAttribute("color_code", colorHex);
  cart__Container__Sub__Total.setAttribute("id", id);
  cart__Container__Sub__Total.setAttribute("size", size);
  cart__Container__Sub__Total.setAttribute(
    "uniqleCode",
    `${id}${size}${colorHex}`
  );

  let cart__Container__Sub__Top = document.createElement("div");
  cart__Container__Sub__Top.className = "cart__Container__Sub__Top";

  let cart__Container__Sub__Top__Img = document.createElement("div");
  cart__Container__Sub__Top__Img.className = "cart__Container__Sub__Top__Img";

  cart__Container__Sub__Top__Img__Img = document.createElement("img");
  cart__Container__Sub__Top__Img__Img.src = imgURL;

  cart__Container__Sub__Top__Img.appendChild(
    cart__Container__Sub__Top__Img__Img
  );
  cart__Container__Sub__Top.appendChild(cart__Container__Sub__Top__Img);

  let cart__Container__Sub__Top__Words = document.createElement("div");
  cart__Container__Sub__Top__Words.className =
    "cart__Container__Sub__Top__Words";

  let cart__Container__Sub__Top__Words__Title = document.createElement("div");
  cart__Container__Sub__Top__Words__Title.className =
    "cart__Container__Sub__Top__Words__Title";
  let cart__Container__Sub__Top__Words__Title__T = document.createTextNode(
    productName
  );
  cart__Container__Sub__Top__Words__Title.appendChild(
    cart__Container__Sub__Top__Words__Title__T
  );

  let cart__Container__Sub__Top__Words__Id = document.createElement("div");
  cart__Container__Sub__Top__Words__Id.className =
    "cart__Container__Sub__Top__Words__Id";
  let cart__Container__Sub__Top__Words__Id__T = document.createTextNode(id);
  cart__Container__Sub__Top__Words__Id.appendChild(
    cart__Container__Sub__Top__Words__Id__T
  );

  let cart__Container__Sub__Top__Words__Color = document.createElement("div");
  cart__Container__Sub__Top__Words__Color.className =
    "cart__Container__Sub__Top__Words__Color";
  cart__Container__Sub__Top__Words__Color.setAttribute("color", colorHex);
  let cart__Container__Sub__Top__Words__Color__T = document.createTextNode(
    `顏色 |  ${color}`
  );
  cart__Container__Sub__Top__Words__Color.appendChild(
    cart__Container__Sub__Top__Words__Color__T
  );

  let cart__Container__Sub__Top__Words__Size = document.createElement("div");
  cart__Container__Sub__Top__Words__Size.className =
    "cart__Container__Sub__Top__Words__Size";
  cart__Container__Sub__Top__Words__Size__T = document.createTextNode(
    `尺寸 | ${size}`
  );
  cart__Container__Sub__Top__Words__Size.appendChild(
    cart__Container__Sub__Top__Words__Size__T
  );

  cart__Container__Sub__Top__Words.appendChild(
    cart__Container__Sub__Top__Words__Title
  );
  cart__Container__Sub__Top__Words.appendChild(
    cart__Container__Sub__Top__Words__Id
  );
  cart__Container__Sub__Top__Words.appendChild(
    cart__Container__Sub__Top__Words__Color
  );
  cart__Container__Sub__Top__Words.appendChild(
    cart__Container__Sub__Top__Words__Size
  );

  cart__Container__Sub__Top.appendChild(cart__Container__Sub__Top__Words);

  cart__Container__Sub__Total.appendChild(cart__Container__Sub__Top);

  let cart__Container__Sub__Middle = document.createElement("div");
  cart__Container__Sub__Middle.className =
    "cart__Container__Sub__Middle noneAbove1080";

  let cart__Container__Sub__Middle__Amount = document.createElement("div");
  cart__Container__Sub__Middle__Amount.className =
    "cart__Container__Sub__Middle__Amount";
  let cart__Container__Sub__Middle__Amount__T = document.createTextNode("數量");
  cart__Container__Sub__Middle__Amount.appendChild(
    cart__Container__Sub__Middle__Amount__T
  );

  let cart__Container__Sub__Middle__Price = document.createElement("div");
  cart__Container__Sub__Middle__Price.className =
    "cart__Container__Sub__Middle__Price";
  let cart__Container__Sub__Middle__Price__T = document.createTextNode("單價");
  cart__Container__Sub__Middle__Price.appendChild(
    cart__Container__Sub__Middle__Price__T
  );

  let cart__Container__Sub__Middle__Total = document.createElement("div");
  cart__Container__Sub__Middle__Total.className =
    "cart__Container__Sub__Middle__Total";
  let cart__Container__Sub__Middle__Total＿＿Ｔ = document.createTextNode(
    "小計"
  );
  cart__Container__Sub__Middle__Total.appendChild(
    cart__Container__Sub__Middle__Total＿＿Ｔ
  );

  cart__Container__Sub__Middle.appendChild(
    cart__Container__Sub__Middle__Amount
  );
  cart__Container__Sub__Middle.appendChild(cart__Container__Sub__Middle__Price);
  cart__Container__Sub__Middle.appendChild(cart__Container__Sub__Middle__Total);

  cart__Container__Sub__Total.appendChild(cart__Container__Sub__Middle);

  let cart__Container__Sub__Bottom = document.createElement("div");
  cart__Container__Sub__Bottom.className = "cart__Container__Sub__Bottom";

  let cart__Container__Sub__bottom__Amount = document.createElement(
    "cart__Container__Sub__bottom__Amount"
  );
  cart__Container__Sub__bottom__Amount.className =
    "cart__Container__Sub__bottom__Amount";

  let cart__Container__Sub__bottom__Amount__Select = document.createElement(
    "select"
  );
  cart__Container__Sub__bottom__Amount__Select.className =
    "cart__Container__Sub__bottom__Amount__Select";
  cart__Container__Sub__bottom__Amount__Select.onchange = modifyAmount;

  for (let amountC = 1; amountC <= maxAmount; amountC++) {
    let cart__Container__Sub__bottom__Amount__Select__Option = document.createElement(
      "option"
    );
    cart__Container__Sub__bottom__Amount__Select__Option.value = amountC;
    let cart__Container__Sub__bottom__Amount__Select__Option__T = document.createTextNode(
      amountC
    );
    cart__Container__Sub__bottom__Amount__Select__Option.appendChild(
      cart__Container__Sub__bottom__Amount__Select__Option__T
    );
    if (amount == amountC) {
      cart__Container__Sub__bottom__Amount__Select__Option.selected =
        "selected";
    }
    cart__Container__Sub__bottom__Amount__Select.appendChild(
      cart__Container__Sub__bottom__Amount__Select__Option
    );
  }
  cart__Container__Sub__bottom__Amount.appendChild(
    cart__Container__Sub__bottom__Amount__Select
  );
  cart__Container__Sub__Bottom.appendChild(
    cart__Container__Sub__bottom__Amount
  );

  let cart__Container__Sub__bottom__Price = document.createElement("div");
  cart__Container__Sub__bottom__Price.className =
    "cart__Container__Sub__bottom__Price";
  cart__Container__Sub__bottom__Price__T = document.createTextNode(
    `NT.${price}`
  );
  cart__Container__Sub__bottom__Price.appendChild(
    cart__Container__Sub__bottom__Price__T
  );
  cart__Container__Sub__Bottom.appendChild(cart__Container__Sub__bottom__Price);

  let cart__Container__Sub__bottom__Total = document.createElement("div");
  cart__Container__Sub__bottom__Total.className =
    "cart__Container__Sub__bottom__Total";
  cart__Container__Sub__bottom__Total__T = document.createTextNode(
    `NT.${amount * price}`
  );
  cart__Container__Sub__bottom__Total.appendChild(
    cart__Container__Sub__bottom__Total__T
  );
  cart__Container__Sub__Bottom.appendChild(cart__Container__Sub__bottom__Total);

  let cart__Container__Sub__bottom__Delete = document.createElement("div");
  cart__Container__Sub__bottom__Delete.className =
    "cart__Container__Sub__bottom__Delete";
  let cart__Container__Sub__bottom__Delete__Img = document.createElement("img");
  cart__Container__Sub__bottom__Delete__Img.src = "./images/cart-remove.png";
  cart__Container__Sub__bottom__Delete.appendChild(
    cart__Container__Sub__bottom__Delete__Img
  );
  cart__Container__Sub__Bottom.appendChild(
    cart__Container__Sub__bottom__Delete
  );

  cart__Container__Sub__Total.appendChild(cart__Container__Sub__Bottom);

  let cart__Container__Sub__Bottom__Hr = document.createElement("div");
  cart__Container__Sub__Bottom__Hr.className =
    "cart__Container__Sub__Bottom__Hr noneAbove1080";

  cart__Container__Sub__Total.appendChild(cart__Container__Sub__Bottom__Hr);

  let product_All = document.querySelector(".product_All");
  product_All.appendChild(cart__Container__Sub__Total);
  countProductSum();
}

function renderNothingInCart() {
  let product_All = document.querySelector(".product_All");
  product_All.innerHTML = "";
  let product_All__P = document.createElement("p");
  product_All__P.className = "product_All__P";
  let product_All__P__T = document.createTextNode("你的購物車是空的");
  product_All__P.appendChild(product_All__P__T);
  product_All.appendChild(product_All__P);
}

function deleteCartItems() {
  let cart__Container__Sub__Total = document.querySelectorAll(
    ".cart__Container__Sub__Total"
  );
  cart__Container__Sub__Total.forEach(element => {
    element.addEventListener("click", e => {
      // console.log(e['srcElement']['parentElement']);
      if (
        e["srcElement"]["parentElement"].className ===
        "cart__Container__Sub__bottom__Delete"
      ) {
        let targetID = element.getAttribute("id");
        let targetcolor = element.getAttribute("color_code");
        let targetsize = element.getAttribute("size");
        let localStorage__JSON = JSON.parse(
          localStorage.getItem("shoppingCart")
        );
        console.log(targetID, targetcolor, targetsize);

        let finalLoacalStorage = localStorage__JSON.filter(obj => {
          return (
            obj["id"] != targetID ||
            obj["color"] != targetcolor ||
            obj["size"] != targetsize
          );
        });
        finalLoacalStorage__String = JSON.stringify(finalLoacalStorage);
        console.log(finalLoacalStorage__String);
        localStorage.setItem("shoppingCart", finalLoacalStorage__String);

        element.style.display = "none";

        let product_All = document.querySelector(".product_All");
        product_All.removeChild(element);
        if (JSON.parse(localStorage.getItem("shoppingCart")).length > 0) {
          countProductSum();
          shoppingCartLocalStorage();
        } else {
          let nav__cartAndMember__Container1080__Div = document.querySelector(
            ".nav__cartAndMember__Container1080__Div"
          );
          let nav__cartAndMember__Container1080__Amount = document.querySelector(
            ".nav__cartAndMember__Container1080__Amount"
          );
          nav__cartAndMember__Container1080__Div.removeChild(
            nav__cartAndMember__Container1080__Amount
          );
          let cartAndMember__Container__Cart = document.querySelector(
            ".cartAndMember__Container__Cart"
          );
          let cartAndMember__Container__Cart__Amount = document.querySelector(
            ".cartAndMember__Container__Cart__Amount"
          );
          cartAndMember__Container__Cart.removeChild(
            cartAndMember__Container__Cart__Amount
          );
          renderNothingInCart();
          let cart__Container__Sub__Checkout__Total = document.querySelector(
            ".cart__Container__Sub__Checkout__Total"
          );
          cart__Container__Sub__Checkout__Total.innerHTML = 0;
          countTotalSum();
        }
      }
    });
  });
}

function countProductSum() {
  let cart__Container__Sub__bottom__Total = document.querySelectorAll(
    ".cart__Container__Sub__bottom__Total"
  );
  let totalSum = 0;
  cart__Container__Sub__bottom__Total.forEach(e => {
    totalSum += Number(e.innerHTML.slice(3));
  });
  let cart__Container__Sub__Checkout__Total = document.querySelector(
    ".cart__Container__Sub__Checkout__Total"
  );
  cart__Container__Sub__Checkout__Total.innerHTML = totalSum;
  countTotalSum();
}

function countTotalSum() {
  let cart__Container__Sub__Checkout__Total = document.querySelector(
    ".cart__Container__Sub__Checkout__Total"
  );
  let sum = cart__Container__Sub__Checkout__Total.innerHTML;
  let cart__Container__Sub__Checkout__Shipping = document.querySelector(
    ".cart__Container__Sub__Checkout__Shipping"
  );
  let shipping = cart__Container__Sub__Checkout__Shipping.innerHTML;
  let cart__Container__Sub__Checkout__All = document.querySelector(
    ".cart__Container__Sub__Checkout__All"
  );
  cart__Container__Sub__Checkout__All.innerHTML =
    Number(sum) + Number(shipping);
}

function modifyAmount() {
  let afterAmount = Number(this.options[this.options.selectedIndex].value);
  let price = Number(
    this.parentElement.parentElement
      .querySelector(".cart__Container__Sub__bottom__Price")
      .innerHTML.slice(3)
  );
  this.parentElement.parentElement.querySelector(
    ".cart__Container__Sub__bottom__Total"
  ).innerHTML = `NT.${afterAmount * price}`;
  countProductSum();

  console.log(this.parentElement.parentElement.parentElement);
  let target_id = this.parentElement.parentElement.parentElement.getAttribute(
    "id"
  );
  let target_size = this.parentElement.parentElement.parentElement.getAttribute(
    "size"
  );
  let target_color = this.parentElement.parentElement.parentElement.getAttribute(
    "color_code"
  );

  let localStorage__JSON = JSON.parse(localStorage.getItem("shoppingCart"));
  localStorage__JSON.forEach(e => {
    if (e.id == target_id && e.size == target_size && e.color == target_color) {
      console.log("b", e);
      e.amount = `${afterAmount}`;
    }
  });
  let finalLoacalStorage__String = JSON.stringify(localStorage__JSON);

  console.log(finalLoacalStorage__String);
  localStorage.setItem("shoppingCart", finalLoacalStorage__String);
}
