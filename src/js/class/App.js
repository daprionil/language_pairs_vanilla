import namespace from "../namespace";
import { listCardsBox } from "../selectors";
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
    }
}

export default App;