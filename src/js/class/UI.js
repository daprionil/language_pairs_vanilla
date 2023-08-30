import namespace from "../namespace";
import { listCardsBox } from "../selectors";
import CreateComponent from "./CreateComponent";

class UI{
    initRenders(){
        this.listCards();
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
};

export default new UI();