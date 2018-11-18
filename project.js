const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title') ;
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url'); 
const cardBody = document.querySelectorAll(".card-body")[1];
const deleteAll = document.getElementById("clear-films");
// start UI object
const ui = new UI() ;
// storage object
const storage = new Storage() ;

// Load all events 
eventListeners() ;

function eventListeners(){
    form.addEventListener('submit',addFilm);
    document.addEventListener("DOMContentLoaded",function(){  // when page is loading
        let films = storage.getFilmsFromStorage() ;
        ui.loadAllFilms(films) ;
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
            ui.displayMessage("Please enter all areas!","danger");
        }
        else{
            // Yeni Film..
            const newFilm = new Film(title,director,url) ;
            ui.addFilmToUI(newFilm);   // Add film to interface
            storage.addFilmToStorage(newFilm) ;    // Add film to local storage of browser
            ui.displayMessage("Film has been added successfully","success")
        }
    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault() ;
}

function deleteFilm(e){

    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessage("Choosen film has been deleted from storage and UI","info")
    }
    e.preventDefault() ;
}

function deleteAllFilms(e){
    if(confirm("Are you sure?")){
        ui.deleteAllFilmFromUI() ;
        storage.deleteAllFilmFromStorage() ; 
        ui.displayMessage("All Films have been deleted from storage and UI","info");   
    }
    e.preventDefault() ;
}