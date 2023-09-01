import namespace from "../namespace";
import { countWinsBox, currentCardSelectedBox, listCardsBox } from "../selectors";
import Card from "./Card";

class UI{
    initRenders(){
        this.listCards();
    };

    listCards(){
        const cards = namespace.getCards;
        const cardsToRender = [...cards, ...cards].sort(() => 0.5 - Math.random());
        const frag = document.createDocumentFragment();

        for(let idx = 0; idx < cardsToRender.length; idx++){
            const currentCard = cardsToRender[idx];
            const componentCardGame = new Card(currentCard).cardGame();

            frag.appendChild(componentCardGame);
        };

        listCardsBox.append(frag);
    };
    
    listCardsHidden(){
        const currentCards = listCardsBox.children;
        for( let idx = 0; idx < currentCards.length; idx++ ){
            const card = currentCards[idx];

            const cardSpan = card.querySelector('span[data-type="swipe"]');

            if(cardSpan.classList.contains('top-[100%]') && !card.dataset.win){
                cardSpan.classList.remove('top-[100%]');
            };
        }
    }

    parseCardHtml({winCard}){
        const currentCards = listCardsBox.children;

        for( let idx = 0; idx < currentCards.length; idx++ ){
            const card = currentCards[idx];

            if(card.textContent.trim() === winCard){
                card.dataset.win = true;
            }
        };

        this.listCardsHidden();
    };

    displayStats(){
        const {getCurrentCard, getCountWins} = namespace;
        currentCardSelectedBox.textContent = getCurrentCard;
        countWinsBox.textContent = getCountWins;
    }
};

export default new UI();