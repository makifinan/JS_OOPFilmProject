function UI(){

}

UI.prototype.addFilmToUI = function(film){
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
UI.prototype.documentLoaded = function(filmList){
   
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


UI.prototype.clearItems=function(name,director,link){
    name.value="";
    director.value="";
    link.value="";
}

UI.prototype.createAlert=function(message,type){
    const alert=document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent=message;
    return alert;
}

UI.prototype.showAlert=function(message,type){
    const alert=this.createAlert(message,type);
    let cardBody=document.querySelectorAll(".card-body")[0];
    cardBody.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },1000)
}
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}