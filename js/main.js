
const filter = document.querySelectorAll('.mix');
const buttons = document.querySelectorAll('.portfolio__btn');
const portfolioContent = document.querySelector('.portfolio__content');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    let filterClass = event.target.getAttribute('data-f');

    filter.forEach(element => {
      element.classList.remove('hide');
      
      if (filterClass !== 'all' && !element.classList.contains(filterClass)) {
        element.classList.add('hide');
      }
    });

    // Очищаем контейнер
    portfolioContent.innerHTML = '';

    // Перемещаем отфильтрованные элементы в порядке их следования
    filter.forEach(element => {
      if (!element.classList.contains('hide')) {
        portfolioContent.appendChild(element);
      }
    });
  });
});




// Получение всех элементов слайдера
const sliderLine = document.querySelector('.slider-blog__inner');
const sliderImages = document.querySelectorAll('.slider-blog__item');
const sliderBtnPrev = document.querySelector('.slider-blog__prev-button');
const sliderBtnNext = document.querySelector('.slider-blog__next-button');
const sliderDots = document.querySelectorAll('.slider-dots-item');

// Инициализация переменных
let sliderCount = 0;
const sliderWidth = sliderImages[0].offsetWidth;

// Добавление обработчиков событий
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);
sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

// Функции
function nextSlide() {
  sliderCount++;

  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }
  rollSlider();
  updateSliderDots();
}

function prevSlide() {
  sliderCount--;

  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }
  rollSlider();
  updateSliderDots();
}

function goToSlide(index) {
  sliderCount = index;
  rollSlider();
  updateSliderDots();
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function updateSliderDots() {
  sliderDots.forEach((dot, index) => {
    if (index === sliderCount) {
      dot.querySelector('.button-dots').classList.add('active_btn');
    } else {
      dot.querySelector('.button-dots').classList.remove('active_btn');
    }
  });
}

const menuButton = document.querySelector('.menu__button');
const menuList = document.querySelector('.header__top-inner');

menuButton.addEventListener('click', function() {
    menuList.classList.toggle('header__top-inner--active');
});



