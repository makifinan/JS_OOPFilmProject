function Storage(){

}


Storage.prototype.checkStorage = function() {
    let films;
    const localStorageValue = localStorage.getItem("films");
    if (localStorageValue === null) {
        films = [];
    } else {
        try {
            films = JSON.parse(localStorageValue);
        } catch (error) {
            console.error("JSON.parse Error:", error);
            films = []; 
        }
    }

    return films;
};


Storage.prototype.addStorage=function(newFilm){

    const filmStorage = this.checkStorage();
    filmStorage.push(newFilm);
    localStorage.setItem("films",JSON.stringify(filmStorage));

}
Storage.prototype.deleteFromStorage = function(textContent){
    let storage = this.checkStorage();
    storage.forEach((item,index)=>{
        if(item.name===textContent){
            storage.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(storage));
}