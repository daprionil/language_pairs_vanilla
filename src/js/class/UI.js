import namespace from "../namespace";
import { listCardsBox } from "../selectors";
import CreateComponent from "./CreateComponent";

class UI{
    initRenders(){
        this.listCards();
        this.listCardsHidden();
    }

    listCards(){
        const cards = namespace.getCards();
        const cardsToRender = [...cards, ...cards].sort(() => 0.5 - Math.random());
        const frag = document.createDocumentFragment();

        for(let idx = 0; idx < cardsToRender.length; idx++){
            const currentCard = cardsToRender[idx];
            const componentCardGame = CreateComponent.cardGame(currentCard);
            
            frag.appendChild(componentCardGame);
        };

        listCardsBox.append(frag);
    };
    listCardsHidden(){
        const currentCards = listCardsBox.children;
        for( let idx = 0; idx < currentCards.length; idx++ ){
            const card = currentCards[idx];
            
            card.classList.remove('display');
            card.classList.add('rotate_card');
        }
    }
};

export default new UI();