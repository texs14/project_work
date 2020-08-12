(function(){
  const cardList = document.querySelector('.places-list');
  const popUp = document.querySelector('.popup');
  const popUpUser = document.querySelector('#popupUser');
  const edit = document.querySelector('.user-info__button-edit');
  const buttonPop = document.querySelector('.user-info__button');

  const saveButtonEditForm = editForm.querySelector('.button');
  let inputUserNameEditForm = editForm.elements.username;
  let inputUserJobEditForm = editForm.elements.job;
  const popUpImage = document.querySelector('#popupImage');


  CCFNameInput.addEventListener('input', ({target}) => {
    const inputValid = new FormValidator(target); 
    inputValid.setEventListeners(target);
  }); // валидация имя в "добавить карточку"
  CCFLinkInput.addEventListener('input', ({target}) => {
    const inputValid = new FormValidator(target); 
    inputValid.setEventListeners(target);
  }) // валидация ссылки в "добавить карточку"

  inputUserNameEditForm.addEventListener('input', ({target}) => {
    const inputValid = new FormValidator(target); 
    inputValid.setEventListeners(target);
  }); // валидация имя в "изменить"

  inputUserJobEditForm.addEventListener('input', ({target}) => {
    const inputValid = new FormValidator(target); 
    inputValid.setEventListeners(target);
  }); // валидация специальности в "изменить"


  buttonPop.addEventListener('click', function () {
    const popup = new Popup(popUp);
    popup.open();

    const valid = new FormValidator(popup);
    valid.resetInvalid();

    document.querySelector('.popup__button').removeAttribute('disabled');
    document.querySelector('.popup__button').classList.remove('button_status_activ');
  }); // Действие — открытие popUp

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape') {
      popUpUser.classList.remove('popup_is-opened');
      popUp.classList.remove('popup_is-opened');
      popUpImage.classList.remove('popup_is-opened');
    }
  }); // закрывает попапы по нажатию "Escape"

  edit.addEventListener('click', function ({target}) {
    const popup = new Popup(popUpUser);
    popup.open();

    const valid = new FormValidator();
    valid.resetInvalid(target);

    saveButtonEditForm.removeAttribute('disabled');
    saveButtonEditForm.classList.add('button_status_activ');
    
  }); // Действие — открытие popUp редактирования имени и специальности


  /* Обработчик действий — открывает попап с картинкой */

  cardList.addEventListener('click', function ({target}) {
    if (target.classList.contains('place-card__image')){
      const popup = new Popup(popUpImage);
      popup.open();
    }
  });

  /* Обработчик действия — добавления карточки */

  createCardForm.addEventListener('submit', function (event) {
    const card = new Card(CCFNameInput.value, CCFLinkInput.value);
    event.preventDefault();
  });

})();