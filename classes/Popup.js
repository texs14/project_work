class Popup{
    constructor(elem){
        this.elem = elem;

        if (elem === popupImage) {
            const popUpImagePic = this.elem.querySelector('.popup__image');
            const urlImage = event.target.style.backgroundImage.replace(/^...../g, ``).replace(/..$/g, '');
            popUpImagePic.setAttribute('src', urlImage);
        }

        elem.querySelector('.popup__close').addEventListener('click', this.close);  
        editForm.addEventListener('submit', this.close);           
        createCardForm.addEventListener('submit', this.close);           
    }
    close({target}){
        target.closest('.popup').classList.remove('popup_is-opened');
        const imgPopup = document.querySelector('.popup__content-image');
        if (!target.parentNode.contains(imgPopup)) target.parentNode.querySelector('.popup__form').reset();
        
    }
    open(){
        this.elem.closest('.popup').classList.add('popup_is-opened');
    }
}