class CreateComponent{
    cardGame({namecard, imgcard}, callback = () => {}){
        const cardGameHtml = document.createElement('DIV');
        cardGameHtml.className = "relative overflow-hidden rounded item_card bg-stone-300 hover:shadow group min-w-40 h-[150px] cursor-pointer";

        const spanCardGame = document.createElement('SPAN');
        spanCardGame.className = "absolute bottom-0 w-full p-2 mx-auto text-center opacity-0 bg-stone-400 bg-opacity-30 group-hover:opacity-100";
        spanCardGame.textContent = namecard;

        const imageCardGame = document.createElement('DIV');
        imageCardGame.innerHTML = `
            <img class="h-full" src="./src/assets/${imgcard}">
            <span class="bg-red-400 w-full h-full top-0 left-0 absolute"></span>
        `;

        cardGameHtml.appendChild(spanCardGame);
        cardGameHtml.appendChild(imageCardGame);

        cardGameHtml.onclick = () => {
            console.log('eso');
            callback();
            const spanTop = imageCardGame.querySelectorAll('SPAN')[0];
            spanTop.classList.add('hidden_card');
            console.log(spanTop.classList);
        }

        return cardGameHtml;
    }
};

export default new CreateComponent();
