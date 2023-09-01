import namespace from "../namespace";
import { countWinsBox, currentCardSelectedBox, listCardsBox, modalStatusBox } from "../selectors";
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
        
        this.clearChildrens(listCardsBox);
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
    };

    displayModalWinGame(){
        //! Validate Transition modal - BUG
        modalStatusBox.parentElement.classList.add('top-0');
        modalStatusBox.parentElement.classList.remove('bottom-full');

        modalStatusBox.innerHTML = `
            <div class="text-center drop-shadow-lg">
                <p class="text-5xl font-black text-white [filter:drop-shadow(0_1px_10px_#29ec39a1)] "> Ganaste </p>
                <p class="text-white drop-shadow-lg text-bold">Si quiere volver a jugar Reinicia tu juego</p>
            <div>
            <button class="mt-2 font-bold text-white bg-sky-500 btn" data-type="reset_button">Reiniciar<button>
        `;
        modalStatusBox.querySelector('button[data-type="reset_button"]').onclick = () => {
            modalStatusBox.parentElement.classList.remove('top-0');
            modalStatusBox.parentElement.classList.add('bottom-full');

            namespace.functions.resetGame.bind(namespace)();
        };
    }

    clearChildrens(parentElement){
        while(parentElement.firstElementChild){
            parentElement.firstElementChild.remove();
        };
    };
};

export default new UI();