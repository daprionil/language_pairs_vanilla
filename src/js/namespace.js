class Namespace{
    #cards;
    #namecards;

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
    };

    getCards(){
        return this.#cards;
    }

    getNameCards(){
        return this.#namecards;
    }
};

const namespace = new Namespace();

export default namespace;