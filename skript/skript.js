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


  const totalImages = 1;
  const folder = 'images/';

  for (let i = 1; i <= 1000; i++) {
    const className = 'drawing' + i;
    const container = document.querySelector('.' + className);
    if (!container) continue;

    const img = container.querySelector('img');

    // Восстановление из localStorage
    const savedState = localStorage.getItem('state_' + className);
    if (savedState === 'Vector1') {
      img.src = folder + 'Vector1.png';
    } else {
      img.src = folder + 'Vector.png';
    }

    // Обработчик клика
    img.addEventListener('click', () => {
      if (img.src.includes('Vector.png')) {
        // Меняем на Vector1.png
        img.src = folder + 'Vector1.png';
        localStorage.setItem('state_' + className, 'Vector1');
      } else {
        // Меняем обратно на Vector.png
        img.src = folder + 'Vector.png';
        localStorage.setItem('state_' + className, 'Vector');
      }
    });
  }
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