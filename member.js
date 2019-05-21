function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

let cookieUser = JSON.parse(readCookie("userdata"));

if (cookieUser) {
  let name = cookieUser.name;
  let email = cookieUser.email;
  let picture = cookieUser.picture;

  let member__Container__Img = document.querySelector(
    ".member__Container__Img img"
  );
  let member__Container__Name = document.querySelector(
    ".member__Container__Name"
  );
  let member__Container__Email = document.querySelector(
    ".member__Container__Email"
  );

  member__Container__Name.innerHTML = name;
  member__Container__Email.innerHTML = email;
  member__Container__Img.src = picture;
}
