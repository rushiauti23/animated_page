gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activenav = document.querySelector(".active-nav");

links.forEach(link =>{
    link.addEventListener("click", () => {
        //Turn the nav color to blue
        gsap.to(links, {color: "#252525"})
        if(document.activeElement=== link){
            console.log("Hi");
            gsap.to(link, {color: "#385ae0"})
        }

        //Moving the line
        const state = Flip.getState(activenav);
        link.appendChild(activenav); 
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: 'elastic.out(1, 0.5)',
        } 

        )
    });
    
});

//Cards

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        //Get state for flip

        const state = Flip.getState(cards);

        //add active class to the clicked card and inactive to the other card

        const isCardActive = card.classList.contains("active");
        cards.forEach((otherCard, otherIndex) =>{
            otherCard.classList.remove("active");
            otherCard.classList.remove("is-inactive");
            if(!isCardActive && index !== otherIndex){
                otherCard.classList.add("is-inactive");
            }
        })
        if(!isCardActive) card.classList.add("active");

        Flip.from(state, {
            duration: 1,
            ease: 'expo.out',
            absolute: true,
        })

    });

});
