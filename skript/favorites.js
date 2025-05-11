window.addEventListener('DOMContentLoaded', () => {
    // Находим существующий контейнер
    const favoritesContainer = document.getElementById('favorites-list');

    // Получаем список избранных товаров из localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Очищаем содержимое контейнера перед добавлением новых элементов
    favoritesContainer.innerHTML = '';

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>Нет избранных товаров.</p>';
        return;
    }
    // Проходим по каждому товару и добавляем его в контейнер
    favorites.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.className = 'favorite-item';

        productDiv.innerHTML = `
            <img class="img" src="${item.image}" alt="${item.name}" style="width:100px;height:auto;">
            <h3>${item.name}</h3>
            <p class="price">Цена: ${item.price} ₽</p>
        `;

        favoritesContainer.appendChild(productDiv);
    });
});


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