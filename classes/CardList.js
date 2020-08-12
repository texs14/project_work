class CardList{
    constructor(container){
      this.container = container;
      this.render();
    }
    render(){
      for (let i = 0; i < initialCards.length; i++) {
        const card = new Card(initialCards[i].name, initialCards[i].link);
      }
    }
}

const cardListContainer = new CardList(cardList);
