window.addEventListener('scroll', function () {
  var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentPosition > 100) {
    document.getElementById('page').classList.add('page-active');
    document.getElementById('page-1').classList.remove('page-active');
    document.getElementById('page-2').classList.remove('page-active');
    document.getElementById('page-3').classList.remove('page-active');
  } if (currentPosition > 950) {
    document.getElementById('page').classList.remove('page-active');
    document.getElementById('page-2').classList.remove('page-active');
    document.getElementById('page-3').classList.remove('page-active');
    document.getElementById('page-1').classList.add('page-active');

  } if (currentPosition > 1900) {
    document.getElementById('page-3').classList.remove('page-active');
    document.getElementById('page-1').classList.remove('page-active');
    document.getElementById('page-2').classList.add('page-active');

  } if (currentPosition > 3000) {
    document.getElementById('page-2').classList.remove('page-active');
    document.getElementById('page-1').classList.remove('page-active');
    document.getElementById('page-3').classList.add('page-active');
  }
});

const page = document.getElementById('page')
const page_1 = document.getElementById('page-1')
const page_2 = document.getElementById('page-2')
const page_3 = document.getElementById('page-3')

page.addEventListener('click', () => {
  page.classList.add('page-active')
  page_1.classList.remove('page-active')
  page_2.classList.remove('page-active')
  page_3.classList.remove('page-active')
})

page_1.addEventListener('click', () => {
  page_1.classList.add('page-active')
  page.classList.remove('page-active')
  page_2.classList.remove('page-active')
  page_3.classList.remove('page-active')
})

page_2.addEventListener('click', () => {
  page_2.classList.add('page-active')
  page.classList.remove('page-active')
  page_1.classList.remove('page-active')
  page_3.classList.remove('page-active')
})

page_3.addEventListener('click', () => {
  page_3.classList.add('page-active')
  page.classList.remove('page-active')
  page_1.classList.remove('page-active')
  page_2.classList.remove('page-active')
})

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});