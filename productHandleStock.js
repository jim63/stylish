function productHandleStock(responseText__JSON) {
  function checkStockSize() {
    let productPage__Container__Sub__Info__Color__block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Color__block__Selected"
    );
    if (productPage__Container__Sub__Info__Color__block__Selected) {
      var color__Value = document
        .querySelector(
          ".productPage__Container__Sub__Info__Color__block__Selected img"
        )
        .style.backgroundColor.replace(/\s/g, "")
        .match(/^rgba?\((\d+),(\d+),(\d+)/i);
      var color__Value__Hex = `${Number(color__Value[1]).toString(16)}${Number(
        color__Value[2]
      ).toString(16)}${Number(color__Value[3]).toString(16)}`.toUpperCase();
      for (let i = 0; i < responseText__JSON["variants"].length; i++) {
        if (
          responseText__JSON["variants"][i]["color_code"] === color__Value__Hex
        ) {
          if (responseText__JSON["variants"][i]["stock"] === 0) {
            let productPage__Container__Sub__Info__Size__Size__Block = document.querySelectorAll(
              ".productPage__Container__Sub__Info__Size__Size__Block"
            );
            for (
              let j = 0;
              j < productPage__Container__Sub__Info__Size__Size__Block.length;
              j++
            ) {
              if (
                productPage__Container__Sub__Info__Size__Size__Block[j]
                  .innerHTML ===
                `<p>${responseText__JSON["variants"][i]["size"]}</p>`
              ) {
                productPage__Container__Sub__Info__Size__Size__Block[
                  j
                ].className += " outOfStockSize";
              }
            }
          }
        }
      }
    }
  }

  function toggleOutOfStockSize() {
    let outOfStock = document.querySelectorAll(".outOfStockSize");
    outOfStock.forEach(element => {
      element.className =
        "productPage__Container__Sub__Info__Size__Size__Block";
    });
  }

  function checkStockColor() {
    let productPage__Container__Sub__Info__Size__Size__Block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Size__Size__Block__Selected"
    );
    if (productPage__Container__Sub__Info__Size__Size__Block__Selected) {
      var size__Value = document.querySelector(
        ".productPage__Container__Sub__Info__Size__Size__Block__Selected p"
      ).innerHTML;
      for (let i = 0; i < responseText__JSON["variants"].length; i++) {
        if (responseText__JSON["variants"][i]["size"] === size__Value) {
          if (responseText__JSON["variants"][i]["stock"] === 0) {
            let productPage__Container__Sub__Info__Color__block = document.querySelectorAll(
              ".productPage__Container__Sub__Info__Color__block"
            );
            for (
              let j = 0;
              j < productPage__Container__Sub__Info__Color__block.length;
              j++
            ) {
              let color__Value = productPage__Container__Sub__Info__Color__block[
                j
              ].innerHTML
                .match(/\d+/g)
                .map(Number);
              let color = `${Number(color__Value[0]).toString(16)}${Number(
                color__Value[1]
              ).toString(16)}${Number(color__Value[2]).toString(
                16
              )}`.toUpperCase();
              if (color === responseText__JSON["variants"][i]["color_code"]) {
                productPage__Container__Sub__Info__Color__block[j].className +=
                  " outOfStockColor";
              }
            }
          }
        }
      }
    }
  }

  function toggleOutOfStockColor() {
    var outOfStock = document.querySelectorAll(".outOfStockColor");
    outOfStock.forEach(element => {
      element.className = "productPage__Container__Sub__Info__Color__block";
    });
  }

  var productHandleStock__Color = document.querySelectorAll(
    ".productPage__Container__Sub__Info__Color__block"
  );
  productHandleStock__Color.forEach(element => {
    element.addEventListener("click", () => {
      if (
        document.querySelector(
          ".productPage__Container__Sub__Info__Color__block__Selected"
        ) === element
      ) {
        element.classList.toggle(
          "productPage__Container__Sub__Info__Color__block__Selected"
        );
      } else {
        let productHandleStock__Colors = document.querySelectorAll(
          ".productPage__Container__Sub__Info__Color__block"
        );
        productHandleStock__Colors.forEach(elements => {
          if (elements.className.indexOf("outOfStockColor") < 0) {
            elements.className =
              "productPage__Container__Sub__Info__Color__block";
          }
        });

        element.className +=
          " productPage__Container__Sub__Info__Color__block__Selected";
      }
      toggleOutOfStockSize();
      checkStockSize();
    });
  });

  var productHandleStock__Size = document.querySelectorAll(
    ".productPage__Container__Sub__Info__Size__Size__Block"
  );
  productHandleStock__Size.forEach(element => {
    element.addEventListener("click", () => {
      if (
        document.querySelector(
          ".productPage__Container__Sub__Info__Size__Size__Block__Selected"
        ) === element
      ) {
        element.classList.toggle(
          "productPage__Container__Sub__Info__Size__Size__Block__Selected"
        );
      } else {
        let productHandleStock__Sizes = document.querySelectorAll(
          ".productPage__Container__Sub__Info__Size__Size__Block"
        );
        productHandleStock__Sizes.forEach(elements => {
          if (elements.className.indexOf("outOfStockSize") < 0) {
            elements.className =
              "productPage__Container__Sub__Info__Size__Size__Block";
          }
        });
        element.classList +=
          " productPage__Container__Sub__Info__Size__Size__Block__Selected";
      }
      toggleOutOfStockColor();
      checkStockColor();
    });
  });

  var productPage__Container__Sub__Info__Amount__Container__Minus = document.querySelector(
    ".productPage__Container__Sub__Info__Amount__Container__Minus"
  );
  var productPage__Container__Sub__Info__Amount__Container__Plus = document.querySelector(
    ".productPage__Container__Sub__Info__Amount__Container__Plus"
  );
  var productPage__Container__Sub__Info__Amount__Container__Num = document.querySelector(
    ".productPage__Container__Sub__Info__Amount__Container__Num"
  );

  function minus() {
    if (
      Number(
        productPage__Container__Sub__Info__Amount__Container__Num.innerHTML
      ) > 0
    ) {
      productPage__Container__Sub__Info__Amount__Container__Num.innerHTML =
        Number(
          productPage__Container__Sub__Info__Amount__Container__Num.innerHTML
        ) - 1;
    }
  }

  function plus() {
    var productPage__Container__Sub__Info__Color__block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Color__block__Selected"
    );
    var productPage__Container__Sub__Info__Size__Size__Block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Size__Size__Block__Selected"
    );
    if (
      productPage__Container__Sub__Info__Color__block__Selected &&
      productPage__Container__Sub__Info__Size__Size__Block__Selected
    ) {
      var color__Value = document
        .querySelector(
          ".productPage__Container__Sub__Info__Color__block__Selected img"
        )
        .style.backgroundColor.replace(/\s/g, "")
        .match(/^rgba?\((\d+),(\d+),(\d+)/i);
      var color__Value__Hex = `${Number(color__Value[1]).toString(16)}${Number(
        color__Value[2]
      ).toString(16)}${Number(color__Value[3]).toString(16)}`.toUpperCase();

      var size__Value = document.querySelector(
        ".productPage__Container__Sub__Info__Size__Size__Block__Selected p"
      ).innerHTML;

      maxAmount = findMaxAmount(
        responseText__JSON,
        color__Value__Hex,
        size__Value
      );
      if (
        maxAmount >
        Number(
          productPage__Container__Sub__Info__Amount__Container__Num.innerHTML
        )
      ) {
        productPage__Container__Sub__Info__Amount__Container__Num.innerHTML =
          Number(
            productPage__Container__Sub__Info__Amount__Container__Num.innerHTML
          ) + 1;
      }
    } else {
      productPage__Container__Sub__Info__Amount__Container__Num.innerHTML =
        Number(
          productPage__Container__Sub__Info__Amount__Container__Num.innerHTML
        ) + 1;
    }
  }
  productPage__Container__Sub__Info__Amount__Container__Minus.addEventListener(
    "click",
    minus
  );
  productPage__Container__Sub__Info__Amount__Container__Plus.addEventListener(
    "click",
    plus
  );

  function findMaxAmount(responseText__JSON, color__Value__Hex, size__Value) {
    for (let i = 0; i < responseText__JSON["variants"].length; i++) {
      if (
        responseText__JSON["variants"][i]["color_code"] === color__Value__Hex &&
        responseText__JSON["variants"][i]["size"] === size__Value
      ) {
        var maxAmount = responseText__JSON["variants"][i]["stock"];
        var productPage__Container__Sub__Info__Amount__Container__Num = document.querySelector(
          ".productPage__Container__Sub__Info__Amount__Container__Num"
        );
        if (
          Number(
            productPage__Container__Sub__Info__Amount__Container__Num.innerHTML
          ) > maxAmount
        ) {
          productPage__Container__Sub__Info__Amount__Container__Num.innerHTML = maxAmount;
        }
        return maxAmount;
      }
    }
  }

  document.addEventListener("click", () => {
    var productPage__Container__Sub__Info__Color__block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Color__block__Selected"
    );
    if (productPage__Container__Sub__Info__Color__block__Selected) {
      var color__Value = document
        .querySelector(
          ".productPage__Container__Sub__Info__Color__block__Selected img"
        )
        .style.backgroundColor.replace(/\s/g, "")
        .match(/^rgba?\((\d+),(\d+),(\d+)/i);
      var color__Value__Hex = `${Number(color__Value[1]).toString(16)}${Number(
        color__Value[2]
      ).toString(16)}${Number(color__Value[3]).toString(16)}`.toUpperCase();
    }

    var productPage__Container__Sub__Info__Size__Size__Block__Selected = document.querySelector(
      ".productPage__Container__Sub__Info__Size__Size__Block__Selected"
    );
    if (productPage__Container__Sub__Info__Size__Size__Block__Selected) {
      var size__Value = document.querySelector(
        ".productPage__Container__Sub__Info__Size__Size__Block__Selected p"
      ).innerHTML;
    }
    if (
      productPage__Container__Sub__Info__Color__block__Selected &&
      productPage__Container__Sub__Info__Size__Size__Block__Selected
    ) {
      var maxAmount = findMaxAmount(
        responseText__JSON,
        color__Value__Hex,
        size__Value
      );
      if (maxAmount === 0) {
        productPage__Container__Sub__Info__Amount__Container__Num.innerHTML =
          "0";
      } else {
        if (
          Number(
            productPage__Container__Sub__Info__Amount__Container__Num.innerHTML
          ) > maxAmount
        ) {
          productPage__Container__Sub__Info__Amount__Container__Num.innerHTML = maxAmount;
        }
      }
    }
  });
}
