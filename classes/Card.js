class Card{
    constructor(name, link) {
        this.cardElement = this.create(name, link);
        this.cardElement.querySelector('.place-card__like-icon').addEventListener('click', this.like);
        this.cardElement.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
    }
    like({target}){
            target.classList.toggle('place-card__like-icon_liked');
    }
    remove({target}){
        target.closest('.places-list').removeChild(target.closest('.place-card'));
    }
    create(nameValue, linkValue){
        const card = document.createElement('div');
        card.classList.add('place-card');
    
        const cardImg = document.createElement('div');
        cardImg.setAttribute('style', `background-image: url( ${linkValue} )`);
        cardImg.classList.add('place-card__image');
    
        const buttonDelNew = document.createElement('button');
        buttonDelNew.classList.add('place-card__delete-icon');
    
        const description = document.createElement('div');
        description.classList.add('place-card__description');
    
        const cardNameNew = document.createElement('h3');
        cardNameNew.classList.add('place-card__name');
        cardNameNew.textContent = nameValue;
    
        const buttonLikeNew = document.createElement('button');
        buttonLikeNew.classList.add('place-card__like-icon');
    
        
        cardList.appendChild(card);
        card.appendChild(cardImg);
        cardImg.appendChild(buttonDelNew);
        card.appendChild(description);
        description.appendChild(cardNameNew);
        description.appendChild(buttonLikeNew);

        return card;
    }
}
