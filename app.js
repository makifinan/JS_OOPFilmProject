const form = document.getElementById("film-form");
const nameInput = document.querySelector("#title");
const director = document.querySelector("#director");
const link = document.querySelector("#url");
const tbody = document.querySelector("#films");
const clearButton = document.querySelector("#clear-films");


addEventListeners();


function addEventListeners(){
    document.addEventListener("DOMContentLoaded",documentLoaded);
    form.addEventListener("submit",addFilmToUI);
    tbody.addEventListener("click",deleteFilm);
    clearButton.addEventListener("click",clearAllFilms);
}

function clearAllFilms(e){
    if(confirm("Hepsini silmek istediğinize emin misiniz ?")){
        UI.clearFilmsFromUI();
        Storage.clearFilmsFromStorage();
    }
    
}

function deleteFilm(e){
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.showAlert("film storagedan silindi","success");
    }
}

function documentLoaded(){
    let storageValue = Storage.checkStorage();
    UI.documentLoaded(storageValue);
}

function addFilmToUI(e){
    const nameInputValue = nameInput.value;
    const directorValue = director.value;
    const linkValue = link.value;

    if (nameInputValue === "" || directorValue === "" || linkValue === "") {
        UI.showAlert("verileri eksiksiz giriniz","danger");
    }
    else{

        const newFilm = new Film(nameInputValue,directorValue,linkValue)
        UI.addFilmToUI(newFilm)
        Storage.addStorage(newFilm);
        UI.showAlert("başarıyla eklendi","success");
    }

    UI.clearItems(nameInput,director,link);
    e.preventDefault();
}