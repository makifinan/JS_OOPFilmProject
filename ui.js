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
UI.prototype.clearItems=function(name,director,link){
    name.value="";
    director.value="";
    link.value="";
}