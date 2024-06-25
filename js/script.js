{
    console.log("Hello there!");

    let photoMain = document.querySelector(".js-photoMain");
    let photoAngel = document.querySelector(".js-photoAngel");
    let photoFlowers = document.querySelector(".js-photoFlowers");
    let imageButton = document.querySelector(".js-imageButton");
    let backgroundButton = document.querySelector(".js-backgroundButton");
    let background = document.querySelector(".js-document");
    let shadeName = document.querySelector(".js-shadeName");
    let hidden = "head__photo--hidden";

    imageButton.addEventListener("click", () => {
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
    });

    backgroundButton.addEventListener("click", () => {
        background.classList.toggle("document--lightColor");
        shadeName.innerText = background.classList.contains("document--lightColor") ? "ciemne" : "jasne"
    });
};