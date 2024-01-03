class UI{
    static addFilmToUI(film){
        const tabloBody= document.getElementById("films");
        tabloBody.innerHTML += `
            <tr>
                <td><img src="${film.link}" class="img-fluid img-thumbnail"></td>
                <td>${film.name}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>  
        `
    
    }
    static documentLoaded(filmList){
       
        const tabloBody= document.getElementById("films");
        filmList.forEach(function(element) {
            tabloBody.innerHTML +=
            `
                <tr>
                    <td><img src="${element.link}" class="img-fluid img-thumbnail"></td>
                    <td>${element.name}</td>
                    <td>${element.director}</td>
                    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>  
            `
        });
    
    }
    
    
    static clearItems(name,director,link){
        name.value="";
        director.value="";
        link.value="";
    }
    
    static createAlert(message,type){
        const alert=document.createElement("div");
        alert.className=`alert alert-${type}`;
        alert.textContent=message;
        return alert;
    }
    
    static showAlert(message,type){
        const alert=this.createAlert(message,type);
        let cardBody=document.querySelectorAll(".card-body")[0];
        cardBody.appendChild(alert);
        setTimeout(function(){
            alert.remove();
        },1000)
    }
    static deleteFilmFromUI(element){
        element.parentElement.parentElement.remove();
    }
    static clearFilmsFromUI(){
        const tbody=document.getElementById("films");
    
        while (tbody.firstElementChild !== null) {
            tbody.firstElementChild.remove();
        }
    }


}

