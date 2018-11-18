const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title') ;
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url'); 
const cardBody = document.querySelectorAll(".card-body")[1];
const deleteAll = document.getElementById("clear-films");
// start UI object
// const ui = new UI() ;
// storage object
// const storage = new Storage() ;

// Load all events 
eventListeners() ;

function eventListeners(){
    form.addEventListener('submit',addFilm);
    document.addEventListener("DOMContentLoaded",function(){  // when page is loading
        let films = Storage.getFilmsFromStorage() ;
        UI.loadAllFilms(films) ;
    });
    cardBody.addEventListener("click",deleteFilm);
    deleteAll.addEventListener("click",deleteAllFilms);
}

function addFilm(e){

    const title = titleElement.value ;
    const director = directorElement.value ;
    const url = urlElement.value ;

        if(title === '' || director === '' || url === ''){
            // Hata
            UI.displayMessage("Please enter all areas!","danger");
        }
        else{
            // Yeni Film..
            const newFilm = new Film(title,director,url) ;
            UI.addFilmToUI(newFilm);   // Add film to interface
            Storage.addFilmToStorage(newFilm) ;    // Add film to local storage of browser
            UI.displayMessage("Film has been added successfully","success")
        }
    UI.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault() ;
}

function deleteFilm(e){

    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessage("Choosen film has been deleted from storage and UI","info")
    }
    e.preventDefault() ;
}

function deleteAllFilms(e){
    if(confirm("Are you sure?")){
        UI.deleteAllFilmFromUI() ;
        Storage.deleteAllFilmFromStorage() ; 
        UI.displayMessage("All Films have been deleted from storage and UI","info");   
    }
    e.preventDefault() ;
}