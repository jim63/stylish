function shoppingCartLocalStorage(responseText__JSON = "") {
  if (localStorage.getItem("shoppingCart")) {
    if (localStorage.getItem("shoppingCart").length > 0) {
      countCart();
    }
    // else {
    //   let nav__cartAndMember__Container1080__Amount = document.querySelector('.nav__cartAndMember__Container1080__Amount');
    //   let cartAndMember__Container__Cart__Amount = document.querySelector('.cartAndMember__Container__Cart__Amount');
    //   let cartAndMember__Container = document.querySelector('.cartAndMember__Container');
    //   let nav__cartAndMember__Container1080__Div = document.querySelector('.nav__cartAndMember__Container1080__Div');
    //   cartAndMember__Container.removeChild(cartAndMember__Container__Cart__Amount);
    //   nav__cartAndMember__Container1080__Div.removeChild(nav__cartAndMember__Container1080__Amount);
    // }
  }

  function countCart() {
    let nav__cartAndMember__Container1080__Div = document.querySelector(
      ".nav__cartAndMember__Container1080__Div"
    );
    let amountInCart = JSON.parse(localStorage.getItem("shoppingCart")).length;

    if (amountInCart > 0) {
      let nav__cartAndMember__Container1080__Amount__Check = document.querySelector(
        ".nav__cartAndMember__Container1080__Amount"
      );
      if (!nav__cartAndMember__Container1080__Amount__Check) {
        let nav__cartAndMember__Container1080__Div = document.querySelector(
          ".nav__cartAndMember__Container1080__Div"
        );
        let nav__cartAndMember__Container1080__Amount = document.createElement(
          "div"
        );
        nav__cartAndMember__Container1080__Amount.className =
          "nav__cartAndMember__Container1080__Amount";
        let nav__cartAndMember__Container1080__Amount__T = document.createTextNode(
          amountInCart
        );
        nav__cartAndMember__Container1080__Amount.appendChild(
          nav__cartAndMember__Container1080__Amount__T
        );
        nav__cartAndMember__Container1080__Div.appendChild(
          nav__cartAndMember__Container1080__Amount
        );
      } else {
        nav__cartAndMember__Container1080__Amount__Check.innerHTML = amountInCart;
      }

      let cartAndMember__Container__Cart__Amount__Check = document.querySelector(
        ".cartAndMember__Container__Cart__Amount"
      );

      if (!cartAndMember__Container__Cart__Amount__Check) {
        let cartAndMember__Container__Cart = document.querySelector(
          ".cartAndMember__Container__Cart"
        );
        let cartAndMember__Container__Cart__Img = document.querySelector(
          ".cartAndMember__Container__Cart Img"
        );

        let cartAndMember__Container__Cart__Amount = document.createElement(
          "div"
        );
        cartAndMember__Container__Cart__Amount.className =
          "cartAndMember__Container__Cart__Amount";
        let nav__cartAndMember__Container1080__Amount__T2 = document.createTextNode(
          amountInCart
        );
        cartAndMember__Container__Cart__Amount.appendChild(
          nav__cartAndMember__Container1080__Amount__T2
        );
        cartAndMember__Container__Cart.insertBefore(
          cartAndMember__Container__Cart__Amount,
          cartAndMember__Container__Cart__Img
        );
      } else {
        cartAndMember__Container__Cart__Amount__Check.innerHTML = amountInCart;
      }
    }
  }

  let shoppingCartButton = document.querySelector(
    ".productPage__Container__Sub__Info__Cart"
  );
  if (shoppingCartButton) {
    shoppingCartButton.addEventListener("click", addToCartTest);
  }

  function addToCartTest() {
    let productPage__Container__Sub__Info__Color__block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Color__block__Selected"
    );
    let productPage__Container__Sub__Info__Size__Size__Block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Size__Size__Block__Selected"
    );
    let productPage__Container__Sub__Info__Amount__Container__Num = document.querySelector(
      ".productPage__Container__Sub__Info__Amount__Container__Num"
    ).innerHTML;
    let amount__V = Number(
      productPage__Container__Sub__Info__Amount__Container__Num
    );
    if (
      productPage__Container__Sub__Info__Color__block__Selected &&
      productPage__Container__Sub__Info__Size__Size__Block__Selected &&
      amount__V > 0
    ) {
      addToCart();
    }
  }

  function addToCart() {
    if (localStorage.getItem("shoppingCart") === null) {
      var storageArray = [];
      localStorage.setItem("shoppingCart", JSON.stringify(storageArray));
    } else {
      var storageArray = JSON.parse(localStorage.getItem("shoppingCart"));
    }

    let color = document
      .querySelector(
        ".productPage__Container__Sub__Info__Color__block__Selected img"
      )
      .style.backgroundColor.replace(/\s/g, "")
      .match(/^rgba?\((\d+),(\d+),(\d+)/i);
    let color__Value = `${Number(color[1]).toString(16)}${Number(
      color[2]
    ).toString(16)}${Number(color[3]).toString(16)}`.toUpperCase();
    let size__Value = document.querySelector(
      ".productPage__Container__Sub__Info__Size__Size__Block__Selected p"
    ).innerHTML;
    let amount__Value = document.querySelector(
      ".productPage__Container__Sub__Info__Amount__Container__Num"
    ).innerHTML;
    let id = document.querySelector(
      ".productPage__Container__Sub__Sub__Info__ID"
    ).innerHTML;
    let name = document.querySelector(
      ".productPage__Container__Sub__Sub__Info__Name"
    ).innerHTML;

    let inputObject = {
      id: id,
      color: `${color__Value}`,
      size: size__Value,
      amount: amount__Value,
      name: name
    };

    if (storageArray.length > 0) {
      let isAdd = false;
      storageArray.forEach(element => {
        if (
          element.id === inputObject.id &&
          element.color === inputObject.color &&
          element.size === inputObject.size
        ) {
          element.amount = String(
            Number(element.amount) + Number(inputObject.amount)
          );
          for (let va = 0; va < responseText__JSON.variants.length; va++) {
            if (
              responseText__JSON.variants[va]["color_code"] ===
                inputObject.color &&
              responseText__JSON.variants[va]["size"] === inputObject.size
            ) {
              var maxAmount = responseText__JSON.variants[va]["stock"];
            }
          }

          element.amount =
            maxAmount > element.amount ? element.amount : String(maxAmount);

          let stringJson = JSON.stringify(storageArray);
          localStorage.setItem(`shoppingCart`, stringJson);
          isAdd = true;
        }
      });
      if (!isAdd) {
        storageArray.push(inputObject);
        let stringJson = JSON.stringify(storageArray);
        localStorage.setItem(`shoppingCart`, stringJson);
      }
    } else {
      storageArray.push(inputObject);
      let stringJson = JSON.stringify(storageArray);
      localStorage.setItem(`shoppingCart`, stringJson);
    }

    let productPage__Container__Sub__Info__Cart = document.querySelector(
      ".productPage__Container__Sub__Info__Cart"
    );
    productPage__Container__Sub__Info__Cart.style.cursor = "wait";

    setTimeout(() => {
      productPage__Container__Sub__Info__Cart.style.cursor = "pointer";
    }, 300);

    let productPage__Container__Sub__Info__Color__block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Color__block__Selected"
    );
    productPage__Container__Sub__Info__Color__block__Selected.className =
      "productPage__Container__Sub__Info__Color__block";

    let productPage__Container__Sub__Info__Size__Size__Block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Size__Size__Block__Selected"
    );
    productPage__Container__Sub__Info__Size__Size__Block__Selected.className =
      "productPage__Container__Sub__Info__Size__Size__Block";

    let productPage__Container__Sub__Info__Amount__Container__Num = document.querySelector(
      ".productPage__Container__Sub__Info__Amount__Container__Num"
    );
    productPage__Container__Sub__Info__Amount__Container__Num.innerHTML = "0";

    countCart();
  }
}
