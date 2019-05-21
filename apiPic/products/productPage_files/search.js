const searchImg = document.querySelector('.search__Container__Img');
const searchInput = document.querySelector('.search__Container__Input')

searchImg.addEventListener('click', () => {
  searchInput.classList.toggle('noneOnMobile');
})