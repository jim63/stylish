// var product__Container = document.querySelector('.product__Container');
// var men__Button = document.querySelector('.men__Button');
// var women__Button = document.querySelector('.women__Button');
// var accessories__Button = document.querySelector('.accessories__Button');
// var search__Container__Img = document.querySelector(".search__Container__Img");
// var search__Container__Input = document.querySelector('.search__Container__Input');


// accessories__Button.addEventListener('click', () => {
//   clearInnerHtml();
//   productXMLRequest('products/accessories?', 0)
// })

// women__Button.addEventListener('click', () => {
//   clearInnerHtml();
//   productXMLRequest('products/women?', 0)
// })

// men__Button.addEventListener('click', () => {
//   clearInnerHtml();
//   productXMLRequest('products/men?', 0)
// })

// search__Container__Input.addEventListener('keypress', (e) => {
//   var search__Text = search__Container__Input.value;
//   if (search__Text) {
//     if (e.keyCode === 13) {
//       search__Container__Input.value = '';
//       clearInnerHtml();
//       productXMLRequest(`products/search?keyword=${search__Text}`)
//     }
//   }
// })

// var productXMLRequest = function (cata, paging = 0) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     // window.removeEventListener('scroll', () => {
//     //   var product__Container__Rect = product__Container.getBoundingClientRect();
//     //   if (document.readyState === 'complete' && product__Container__Rect.bottom < 1000 && currentPage != nextPage) {
//     //     productXMLRequest(cata, nextPage);
//     //     currentPage = nextPage;
//     //   }
//     // })
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       creatElement(xhr.responseText);
//       var nextPage = JSON.parse(responseText).paging;
//       var currentPage = 0;
//       if (typeof (nextPage) === 'number') {
//         window.addEventListener('scroll', () => {
//           var product__Container__Rect = product__Container.getBoundingClientRect();
//           if (document.readyState === 'complete' && product__Container__Rect.bottom < 1000 && currentPage != nextPage) {
//             productXMLRequest(cata, nextPage);
//             currentPage = nextPage;
//           }
//         })
//       }
//     }
//   }

//   xhr.open('GET', `http://18.214.165.31/api/1.0/${cata}&paging=${paging}`);
//   console.log(`http://18.214.165.31/api/1.0/${cata}paging=${paging}`);

//   xhr.send();
// }

// const clearInnerHtml = () => {
//   product__Container.innerHTML = "";
// }

// const creatElement = (responseTextCreateElement) => {
//   if (JSON.parse(responseTextCreateElement)["data"].length === 0) {
//     var notFound_createElement = document.createElement('h1');
//     notFound_createElement.appendChild(document.createTextNode("Not Found Any"))
//     product__Container.appendChild(notFound_createElement);
//   } else {
//     for (let i = 0; i < JSON.parse(responseTextCreateElement).data.length; i++) {
//       page = JSON.parse(responseTextCreateElement).paging
//       responseText = responseTextCreateElement;
//       var items = JSON.parse(responseTextCreateElement).data[i];
//       var imgURL = items.main_image;
//       var colors = items["colors"]
//       var colorsAmount = colors.length;

//       var price = items.price;
//       var title = items.title;

//       var product__Container__Each__CreateElement = document.createElement('div');
//       product__Container__Each__CreateElement.className = "product__Container__Each";

//       var product__Container__Each__Image__CreateElement = document.createElement('img')
//       product__Container__Each__Image__CreateElement.src = imgURL;
//       product__Container__Each__Image__CreateElement.className = 'product__Container__Each__Image';

//       var product__Container__Each__Title__CreateElement = document.createElement('p');
//       product__Container__Each__Title__CreateElement.className = 'product__Container__Each__Title';
//       product__Container__Each__Title__CreateElement.appendChild(document.createTextNode(title));

//       var product__Container__Each__Price__CreateElement = document.createElement('p');
//       product__Container__Each__Price__CreateElement.className = 'product__Container__Each__Price';
//       product__Container__Each__Price__CreateElement.appendChild(document.createTextNode(price));

//       product__Container__Each__CreateElement.appendChild(product__Container__Each__Image__CreateElement);

//       var product__Container__Each__color__CreateElement = document.createElement('div');
//       product__Container__Each__color__CreateElement.className = "product__Container__Each__color";
//       for (let k = 0; k < colorsAmount; k++) {
//         var product__Container__Each__color__CreateElement__Each = document.createElement('img');
//         product__Container__Each__color__CreateElement__Each.style.backgroundColor = `#${colors[k].code}`;
//         product__Container__Each__color__CreateElement.appendChild(product__Container__Each__color__CreateElement__Each);
//       }

//       product__Container__Each__CreateElement.appendChild(product__Container__Each__color__CreateElement);
//       product__Container__Each__CreateElement.appendChild(product__Container__Each__Title__CreateElement);
//       product__Container__Each__CreateElement.appendChild(product__Container__Each__Price__CreateElement);

//       product__Container.appendChild(product__Container__Each__CreateElement);
//     }
//   }
// }


console.log(window.location.href);
var id = window.location.href.split("?")[1]
console.log(id);

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var responseText__JSON = JSON.parse(xhr.responseText)['data'];
    console.log(responseText__JSON);
    console.log(responseText__JSON['sizes'][1]);
    productPageCreateElement(responseText__JSON);

  }
}
xhr.open('GET', `http://18.214.165.31/api/1.0/products/details?${id}`);
xhr.send();


function productPageCreateElement(responseText__JSON) {
  var body = document.querySelector('body');

  var productPage__Container = document.createElement('div');
  productPage__Container.className += productPage__Container

  var productPage__Container__Sub = document.createElement('div')
  productPage__Container__Sub.className += 'productPage__Container__Sub';

  var productPage__Container__Sub__Img = document.createElement('div');
  productPage__Container__Sub__Img.className += 'productPage__Container__Sub__Img';

  var productPage__Container__Sub__Img__Img = document.createElement('img');
  productPage__Container__Sub__Img__Img.src = responseText__JSON['main_image']

  productPage__Container__Sub__Img.appendChild(productPage__Container__Sub__Img__Img)
  productPage__Container__Sub.appendChild(productPage__Container__Sub__Img)

  var productPage__Container__Sub__Info = document.createElement('div')
  productPage__Container__Sub__Info.className += 'productPage__Container__Sub__Info';

  var productPage__Container__Sub__Info__Sub = document.createElement('div');
  productPage__Container__Sub__Info__Sub.className += 'productPage__Container__Sub__Info__Sub';

  var productPage__Container__Sub__Sub__Info__Name = document.createElement('p');
  productPage__Container__Sub__Sub__Info__Name.className += 'productPage__Container__Sub__Sub__Info__Name';
  var productPage__Container__Sub__Sub__Info__Name__T = document.createTextNode(responseText__JSON['title']);
  productPage__Container__Sub__Sub__Info__Name.appendChild(productPage__Container__Sub__Sub__Info__Name__T);
  productPage__Container__Sub__Info__Sub.appendChild(productPage__Container__Sub__Sub__Info__Name);

  var productPage__Container__Sub__Sub__Info__ID = document.createElement('p');
  productPage__Container__Sub__Sub__Info__ID.className += 'productPage__Container__Sub__Sub__Info__ID';
  var productPage__Container__Sub__Sub__Info__ID__T = document.createTextNode(responseText__JSON['id']);
  productPage__Container__Sub__Sub__Info__ID.appendChild(productPage__Container__Sub__Sub__Info__ID__T);
  productPage__Container__Sub__Info__Sub.appendChild(productPage__Container__Sub__Sub__Info__ID);


  var productPage__Container__Sub__Sub__Info__Price = document.createElement('p');
  productPage__Container__Sub__Sub__Info__Price.className += 'productPage__Container__Sub__Sub__Info__Price';
  var productPage__Container__Sub__Sub__Info__Price__T = document.createTextNode(responseText__JSON['price']);
  productPage__Container__Sub__Sub__Info__Price.appendChild(productPage__Container__Sub__Sub__Info__Price__T);
  productPage__Container__Sub__Info__Sub.appendChild(productPage__Container__Sub__Sub__Info__Price);

  var productPage__Container__Sub__Sub__Info__Hr = document.createElement('div');
  productPage__Container__Sub__Sub__Info__Hr.className += 'productPage__Container__Sub__Sub__Info__Hr';
  productPage__Container__Sub__Info__Sub.appendChild(productPage__Container__Sub__Sub__Info__Hr);


  var productPage__Container__Sub__Info__Color = document.createElement('div')
  productPage__Container__Sub__Info__Color.className += 'productPage__Container__Sub__Info__Color';

  var productPage__Container__Sub__Info__Color__Text = document.createElement('p');
  productPage__Container__Sub__Info__Color__Text.className += 'productPage__Container__Sub__Info__Color__Text';
  var productPage__Container__Sub__Info__Color__Text__T = document.createTextNode('顏色 |');
  productPage__Container__Sub__Info__Color__Text.appendChild(productPage__Container__Sub__Info__Color__Text__T);
  productPage__Container__Sub__Info__Color.appendChild(productPage__Container__Sub__Info__Color__Text);

  for (let colors = 0; colors < responseText__JSON['colors'].length; colors++) {
    let productPage__Container__Sub__Info__Color__block = document.createElement('div');
    productPage__Container__Sub__Info__Color__block.className += 'productPage__Container__Sub__Info__Color__block';
    let productPage__Container__Sub__Info__Color__block__Img = document.createElement('img');
    productPage__Container__Sub__Info__Color__block__Img.style.backgroundColor = responseText__JSON['colors'][colors]['code'];
    productPage__Container__Sub__Info__Color__block.appendChild(productPage__Container__Sub__Info__Color__block__Img);
    productPage__Container__Sub__Info__Color.appendChild(productPage__Container__Sub__Info__Color__block);
  }

  var productPage__Container__Sub__Info__Size = document.createElement('div');
  productPage__Container__Sub__Info__Size.className += 'productPage__Container__Sub__Info__Size';

  var productPage__Container__Sub__Info__Color__Size = document.createElement('div');
  productPage__Container__Sub__Info__Color__Size.className += 'productPage__Container__Sub__Info__Color__Size';
  productPage__Container__Sub__Info__Color__Size__T = document.createTextNode('尺寸 |');
  productPage__Container__Sub__Info__Color__Size.appendChild(productPage__Container__Sub__Info__Color__Size__T);

  for (let size = 0; size < responseText__JSON['sizes'].length; size++) {
    var productPage__Container__Sub__Info__Size__Size__Block = document.createElement('div');
    productPage__Container__Sub__Info__Size__Size__Block.className += 'productPage__Container__Sub__Info__Size__Size__Block';
    var productPage__Container__Sub__Info__Size__Size__Block__P = document.createElement('p');
    var productPage__Container__Sub__Info__Size__Size__Block__P__T = document.createTextNode(responseText__JSON['sizes'][size]);
    productPage__Container__Sub__Info__Size__Size__Block__P.appendChild(productPage__Container__Sub__Info__Size__Size__Block__P__T);
    productPage__Container__Sub__Info__Size__Size__Block.appendChild(productPage__Container__Sub__Info__Size__Size__Block__P);
  }



  var productPage__Container = document.createElement('div')
  var productPage__Container = document.createElement('div')
  var productPage__Container = document.createElement('div')
  var productPage__Container = document.createElement('div')











}