// const scroll__Event = (cata, page = 0) => {
//   console.log('12312312321');
//   window.addEventListener('scroll', () => {
//     var product__Container__Rect = product__Container.getBoundingClientRect();
//     if (document.readyState === 'complete' && product__Container__Rect.bottom < 1000) {
//       productXMLRequestScroll(`products/${cata}`, page + 1);

//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           creatElement(xhr.responseText)

//         }
//       }
//       xhr.open('GET', `http://18.214.165.31/api/1.0/${cata}?paging=${0}`);
//       xhr.send();
//     }
//   })
// }

// scroll__Event('all');

// console.log(productXMLRequest(`products/all`, 0));

// var productXMLRequestScroll = function (cata, paging = 0) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       creatElement(xhr.responseText)
//     }
//   }
//   xhr.open('GET', `http://18.214.165.31/api/1.0/${cata}?paging=${paging}`);
//   xhr.send();
// }
