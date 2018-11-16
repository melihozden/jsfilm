function Storage(){

}

Storage.prototype.addFilmToStorage = function(newFilm){

    let films ;

    if(localStorage.getItem("films") === null){
        films = [] ;
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }

}