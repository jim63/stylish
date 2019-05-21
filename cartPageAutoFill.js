let cart__Container__Sub__Order__Input__Name = document.querySelector(
  ".cart__Container__Sub__Order__Input__Name"
);
let cart__Container__Sub__Order__Input__Email = document.querySelector(
  ".cart__Container__Sub__Order__Input__Email"
);

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2)
    return parts
      .pop()
      .split(";")
      .shift();
}

if (getCookie("userdata")) {
  let userdata = JSON.parse(getCookie("userdata"));
  console.log(userdata);

  cart__Container__Sub__Order__Input__Name.value = userdata.name;
  cart__Container__Sub__Order__Input__Email.value = userdata.email;
}
