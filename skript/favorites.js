function renderFavorites() {
  const container = document.getElementById('favorites-list');
  container.innerHTML = '';

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.length === 0) {
    container.innerHTML = '<p>Нет избранных товаров.</p>';
    return;
  }

  favorites.forEach(fav => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    productDiv.innerHTML = `
      <img class="img" src="${fav.image}" width="150" height="150"/>
      <h3 >${fav.name}</h3>
      <p class="price">Цена: ${fav.price} ₽</p>
      <button class="remove-btn" data-id="${fav.class}">Удалить</button>
    `;
    container.appendChild(productDiv);
  });

  // Назначаем обработчики для кнопок "Удалить"
  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      // Получаем текущий массив favorites
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      localStorage.setItem(id, 'false');
      if (id) {
        // Удаляем его из массива
        const index = favorites.indexOf(id);
        if (index !== -1) {
          favorites.splice(index, 1);
          // Обновляем localStorage
          localStorage.setItem('favorites', JSON.stringify(favorites));
          console.log('Удалённый товар:', id);
        }
      }
      const productDiv = btn.closest('.product');
        if (productDiv) {
          productDiv.remove();
        }
    });
  });
}
// Изначально показываем список избранных
renderFavorites();



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