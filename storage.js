class Storage{
    static checkStorage() {
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
    
    
    static addStorage(newFilm){
    
        const filmStorage = this.checkStorage();
        filmStorage.push(newFilm);
        localStorage.setItem("films",JSON.stringify(filmStorage));
    
    }
    static deleteFromStorage(textContent){
        let storage = this.checkStorage();
        storage.forEach((item,index)=>{
            if(item.name===textContent){
                storage.splice(index,1);
            }
        });
        localStorage.setItem("films",JSON.stringify(storage));
    }
    static clearFilmsFromStorage(){
        localStorage.removeItem("films")
    }

}

