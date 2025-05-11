document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.overlay');


  logo.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // Закрытие меню при клике на затемненную область
  overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Закрытие меню при клике на ссылку в меню (опционально)
  const menuLinks = navMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

});

document.querySelectorAll('.drawing img').forEach(function(img) {
    img.addEventListener('click', function() {
        const productDiv = img.closest('.product');
        const productInfo = productDiv.querySelector('.product_info');
        const detailedBtn = productInfo.querySelector('.detailed');
        const productData = JSON.parse(detailedBtn.getAttribute('data-product'));
        const productId = detailedBtn.id;

        // Храним состояние в localStorage по ключу productId
        let isFavorited = localStorage.getItem(productId) === 'true';

        // Переключаем изображение
        if (!isFavorited) {
            img.src = 'images/Vector1.png';
            localStorage.setItem(productId, 'true');
        } else {
            img.src = 'images/Vector.png';
            localStorage.setItem(productId, 'false');
        }
    });
});

// При загрузке страницы устанавливаем правильное изображение в соответствии с localStorage
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.drawing img').forEach(function(img) {
        const productDiv = img.closest('.product');
        const detailedBtn = productDiv.querySelector('.detailed');
        const productId = detailedBtn.id;
        const favorited = localStorage.getItem(productId) === 'true';

        if (favorited) {
            img.src = 'images/Vector1.png';
        } else {
            img.src = 'images/Vector.png';
        }
    });
});

// Обработчик для кнопки "Избранное"
document.getElementById('favoritesPageLink').addEventListener('click', function(e) {
    e.preventDefault(); // отменяем стандартное поведение
    // Собираем все товары, добавленные в избранное
    const favorites = [];

    document.querySelectorAll('.product').forEach(function(productDiv) {
        const detailedBtn = productDiv.querySelector('.detailed');
        const productData = JSON.parse(detailedBtn.getAttribute('data-product'));
        const productId = detailedBtn.id;
        if (localStorage.getItem(productId) === 'true') {
            // Добавляем товар в список избранных
            favorites.push({
                name: productData.name,
                price: productData.price,
                image: productData.image
            });
        }
    });

    // Сохраняем избранные товары в localStorage для передачи на страницу favorites.html
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Перенаправляем на страницу favorites.html
    window.location.href = 'favorites.html';
});


document.querySelectorAll('.detailed').forEach(button => {
  button.addEventListener('click', () => {
    const productData = JSON.parse(button.getAttribute('data-product'));
    // Или сохранить в localStorage
    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    // Перенаправляем на страницу деталей
    window.location.href = 'product.html';
  });
});

// Получаем элементы
  const checkbox = document.getElementById('subscribe');
  const submitButton = document.querySelector('.submit');

  // Добавляем обработчик события
  checkbox.addEventListener('change', function() {
    // Если чекбокс поставлен галка, активируем кнопку
    submitButton.disabled = !this.checked;
  });