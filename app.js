const form = document.getElementById("film-form");
const nameInput = document.querySelector("#title");
const director = document.querySelector("#director");
const link = document.querySelector("#url");

const ui = new UI();
addEventListeners();


function addEventListeners(){
    form.addEventListener("submit",addFilmToUI);
}

function addFilmToUI(e){
    const nameInputValue = nameInput.value;
    const directorValue = director.value;
    const linkValue = link.value;

    if (nameInputValue === "" || directorValue === "" || linkValue === "") {
        //hata fırlat
    }
    else{

        const newFilm = new Film(nameInputValue,directorValue,linkValue)
        ui.addFilmToUI(newFilm)
    }

    ui.clearItems(nameInput,director,link);
    e.preventDefault();
}