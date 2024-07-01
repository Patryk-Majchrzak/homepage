{
    const welcome = () => console.log("Hello there!");
    
    const showNextPhoto = () => {
        const photoMain = document.querySelector(".js-photoMain");
        const photoAngel = document.querySelector(".js-photoAngel");
        const photoFlowers = document.querySelector(".js-photoFlowers");
        const hidden = "head__photo--hidden";

        if (photoAngel.classList.contains(hidden) && photoFlowers.classList.contains(hidden)) {
            photoMain.classList.toggle(hidden);
            photoAngel.classList.toggle(hidden);
        }
        else if (photoMain.classList.contains(hidden) && photoFlowers.classList.contains(hidden)) {
            photoAngel.classList.toggle(hidden);
            photoFlowers.classList.toggle(hidden);
        }
        else {
            photoFlowers.classList.toggle(hidden);
            photoMain.classList.toggle(hidden);
        };
    };

    const showPreviousPhoto = () => {
        const photoMain = document.querySelector(".js-photoMain");
        const photoAngel = document.querySelector(".js-photoAngel");
        const photoFlowers = document.querySelector(".js-photoFlowers");
        const hidden = "head__photo--hidden";

        if (photoAngel.classList.contains(hidden) && photoFlowers.classList.contains(hidden)) {
            photoMain.classList.toggle(hidden);
            photoFlowers.classList.toggle(hidden);
        }
        else if (photoMain.classList.contains(hidden) && photoFlowers.classList.contains(hidden)) {
            photoAngel.classList.toggle(hidden);
            photoMain.classList.toggle(hidden);
        }
        else {
            photoFlowers.classList.toggle(hidden);
            photoAngel.classList.toggle(hidden);
        };
    };

    const changeBackground = () => {
        const background = document.querySelector(".js-document");
        const shadeName = document.querySelector(".js-shadeName");

        background.classList.toggle("document--lightColor");
        shadeName.innerText = background.classList.contains("document--lightColor") ? "ciemne" : "jasne"

        changeSectionBackground();
    };
    
    const changeSectionBackground = () => {
        const sections = document.querySelectorAll(".js-section");
        const navigation = document.querySelector('.js-navigation')

        sections.forEach((section) => {
            section.classList.toggle("section--bright");
        });
        navigation.classList.toggle("navigation--bright");
    };

    const listenEvents = () => {
        const nextImageButton = document.querySelector(".js-nextImageButton");
        const previousImageButton = document.querySelector(".js-previousImageButton");
        const backgroundButton = document.querySelector(".js-backgroundButton");
    
        nextImageButton.addEventListener("click", showNextPhoto);

        previousImageButton.addEventListener("click", showPreviousPhoto);

        backgroundButton.addEventListener("click", changeBackground);
    };

    const init = () => {
        welcome ();
        listenEvents();
    };

    init();
    
};