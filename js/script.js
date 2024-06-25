{
    const welcome = () => console.log("Hello there!");

    welcome ();
    
    const changePhoto = () => {
        const photoMain = document.querySelector(".js-photoMain");
        const photoAngel = document.querySelector(".js-photoAngel");
        const photoFlowers = document.querySelector(".js-photoFlowers");

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
    }

    const imageButton = document.querySelector(".js-imageButton");
    const backgroundButton = document.querySelector(".js-backgroundButton");
    const background = document.querySelector(".js-document");
    const shadeName = document.querySelector(".js-shadeName");
    const hidden = "head__photo--hidden";

    imageButton.addEventListener("click", changePhoto());

    backgroundButton.addEventListener("click", () => {
        background.classList.toggle("document--lightColor");
        shadeName.innerText = background.classList.contains("document--lightColor") ? "ciemne" : "jasne"
    });
};