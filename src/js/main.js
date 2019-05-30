var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

// Функция для закрытия модального окна
var closeModal = function() {
  modal.classList.remove('modal-active');
}

// при клике на кнопку "Перезвоните мне", всплывает модальное окно
button.addEventListener('click', function() {
  modal.classList.add('modal-active');
});

// при коике на закрывающий крестик вызывается функция для закрытия модального окна
close.addEventListener('click', closeModal);

//функция для автоматического закрытия модального окна
setTimeout(closeModal, 5000);