import namespace from "../namespace";
import UI from "./UI";

export default class Card{
    constructor({namecard, imgcard}){
        this.namecard = namecard;
        this.imgcard = imgcard;
    }
    cardGame(){
        const cardGameHtml = document.createElement('DIV');
        cardGameHtml.className = "relative overflow-hidden rounded item_card bg-stone-300 hover:shadow group min-w-40 h-[150px] cursor-pointer";

        const spanCardGame = document.createElement('SPAN');
        spanCardGame.className = "absolute bottom-0 w-full p-2 mx-auto text-center opacity-0 bg-stone-400 bg-opacity-30 group-hover:opacity-100";
        spanCardGame.textContent = this.namecard;

        const imageCardGame = document.createElement('DIV');
        imageCardGame.innerHTML = `
            <img class="h-full" src="./src/assets/${this.imgcard}">
            <span class="bg-slate-300 duration-300 ease-out w-full h-full top-0 left-0 absolute" data-type="swipe" data-mode="hidden"></span>
        `;

        cardGameHtml.appendChild(spanCardGame);
        cardGameHtml.appendChild(imageCardGame);

        cardGameHtml.onclick = this.onClickCallback.bind(this);

        return cardGameHtml;
    }

    onClickCallback({target}){
        target.classList.add('top-[100%]');
        const {getCurrentCard, getPrevCard} = namespace;
        
        if(!getCurrentCard){
            namespace.setCurrentCard = this.namecard;
            UI.displayStats();
            return;
        };
        
        if(!getPrevCard){
            namespace.setPrevCard = namespace.getCurrentCard;
            namespace.setCurrentCard = this.namecard;
            UI.displayStats();
            namespace.functions.validateCards();
            return;
        }
    }
}