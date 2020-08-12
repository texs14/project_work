class FormValidator{
    constructor(elemForm){
        this.elem = elemForm;
    }
    checkInputValidity(element) {
        
        if(element.id === 'link') {
          const regValidLink =  /^(http|https):\/\//i;
          if(regValidLink.test(element.value)) {
            document.querySelector(`#error-${element.id}`).textContent = '';
            element.classList.remove('popup__input_invalid');
            return true;
          } else {
            document.querySelector(`#error-${element.id}`).textContent = 'Здесь должна быть ссылка';
            element.classList.add('popup__input_invalid');
            return false;
          }
        }
    
        if(!element.validity.valid) {
          document.querySelector(`#error-${element.id}`).textContent = element.validationMessage;
          element.classList.add('popup__input_invalid');
          return false;
        } else {
            document.querySelector(`#error-${element.id}`).textContent = '';
            element.classList.remove('popup__input_invalid');
            return true;
        }
    }
    setSubmitButtonState(form) {
        const input = Array.from(form.elements);
    
        let isValidForm = true;
        
    
        input.forEach((elem) => {
           
          if(elem.type !== submit.type) {
            if(!this.checkInputValidity(elem)) isValidForm = false;
          }
        });
    
        if(isValidForm) {
          form.querySelector('.button').classList.add('button_status_activ');
          form.querySelector('.button').disabled = false;
        }
        else {
          form.querySelector('.button').classList.remove('button_status_activ');
          form.querySelector('.button').disabled = true;
        }
    }
    setEventListeners(target) {
        this.checkInputValidity(target);
        this.setSubmitButtonState(target.closest('.popup__form'));
    }
    resetInvalid(){
        let errorMessageName = createCardForm.querySelector('#error-name');
        let errorMessageLink = createCardForm.querySelector('#error-link');

        let userName = editForm.elements.username;
        let userJob = editForm.elements.job;
        const saveButtonEditForm = editForm.querySelector('.button');


        errorMessageName.textContent = ``;
        errorMessageLink.textContent = ``;
        document.querySelector(`#error-username`).textContent = '';
        document.querySelector(`#error-job`).textContent = '';
        userName.classList.remove('popup__input_invalid');
        userJob.classList.remove('popup__input_invalid');
        CCFNameInput.classList.remove('popup__input_invalid');
        CCFLinkInput.classList.remove('popup__input_invalid');
        saveButtonEditForm.removeAttribute('disabled');
        saveButtonEditForm.classList.add('button_status_activ');
    }
}