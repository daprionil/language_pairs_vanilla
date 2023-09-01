import UI from "./class/UI";

class Namespace{
    #cards;
    #namecards;
    #currentCard;
    #prevCard;
    #countWins;

    constructor(){
        this.#namecards = {
            GOLANG:'Golang',
            JAVA: 'Java',
            JAVASCRIPT: 'Javascript',
            LISP: 'Lisp',
            RUBY: 'Ruby',
            TYPESCRIPT: 'Typescript'
        }

        this.#cards = [
            {
                namecard:this.#namecards.GOLANG,
                imgcard:`golang_card.jpg`,
            },
            {
                namecard:this.#namecards.JAVA,
                imgcard:`java_card.png`,
            },
            {
                namecard:this.#namecards.JAVASCRIPT,
                imgcard:`js_card.jpg`,
            },
            {
                namecard:this.#namecards.LISP,
                imgcard:`lisp_card.png`,
            },
            {
                namecard:this.#namecards.RUBY,
                imgcard:`ruby_card.png`,
            },
            {
                namecard:this.#namecards.TYPESCRIPT,
                imgcard:`typescript_card.png`,
            }
        ];

        this.#countWins = 0;

        this.#currentCard = null;
        this.#prevCard = null;
        this.functions = {
            validateCards: () => {
                if(this.#currentCard === this.#prevCard && this.#currentCard && this.#prevCard){
                    //! Parse and Add data attribute in HTML to identificate
                    this.#countWins += 1;
                    UI.parseCardHtml({winCard: this.#currentCard});
                    UI.displayStats();
                    
                    this.clearCurrentPrevCards();
                    return;
                }
                this.clearCurrentPrevCards();
                UI.listCardsHidden();
            },
            resetGame(){
                
            }
        }
    };

    get getCards(){
        return this.#cards;
    }

    get getNameCards(){
        return this.#namecards;
    }

    //! Prev Card
    set setPrevCard(value){
        this.#prevCard = value;
    }
    
    get getPrevCard(){
        return this.#prevCard;
    }

    //! Current Card
    set setCurrentCard(value){
        this.#currentCard = value;
    }
    
    get getCurrentCard(){
        return this.#currentCard;
    }

    //! Clear cards in store
    clearCurrentPrevCards(){
        this.#currentCard = null;
        this.#prevCard = null;
    };

    //! Count Wins
    get getCountWins(){
        return this.#countWins;
    }
};

const namespace = new Namespace();

export default namespace;