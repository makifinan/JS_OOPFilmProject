const form = document.getElementById("film-form");
const nameInput = document.querySelector("#title");
const director = document.querySelector("#director");
const link = document.querySelector("#url");
const tbody = document.querySelector("#films");

const ui = new UI();
const storage = new Storage();
addEventListeners();


function addEventListeners(){
    document.addEventListener("DOMContentLoaded",documentLoaded);
    form.addEventListener("submit",addFilmToUI);
    tbody.addEventListener("click",deleteFilm);
}

function deleteFilm(e){
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.showAlert("film storagedan silindi","success");
    }
}

function documentLoaded(){
    let storageValue = storage.checkStorage();
    ui.documentLoaded(storageValue);
}

function addFilmToUI(e){
    const nameInputValue = nameInput.value;
    const directorValue = director.value;
    const linkValue = link.value;

    if (nameInputValue === "" || directorValue === "" || linkValue === "") {
        ui.showAlert("verileri eksiksiz giriniz","danger");
    }
    else{

        const newFilm = new Film(nameInputValue,directorValue,linkValue)
        ui.addFilmToUI(newFilm)
        storage.addStorage(newFilm);
        ui.showAlert("başarıyla eklendi","success");
    }

    ui.clearItems(nameInput,director,link);
    e.preventDefault();
}