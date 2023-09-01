import namespace from "../namespace";
import { resetGameButton } from "../selectors";
import UI from "./UI";

class App{
    constructor(){
        document.addEventListener('DOMContentLoaded', () => {
            this.initApp();
        });
    }
    
    initApp(){
        //Set events to main HTMLElements
        UI.initRenders();
        resetGameButton.addEventListener('click', namespace.functions.resetGame.bind(namespace));
    }
}

export default App;