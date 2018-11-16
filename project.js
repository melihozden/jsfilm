const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title') ;
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url'); 

// start UI object
const ui = new UI() ;
// storage object
const storage = new Storage() ;

// Load all events 
eventListeners() ;

function eventListeners(){
    form.addEventListener('submit',addFilm);
}

function addFilm(e){

    const title = titleElement.value ;
    const director = directorElement.value ;
    const url = urlElement.value ;

        if(title === '' || director === '' || url === ''){
            // Hata
            ui.displayMessage("Lütfen tüm alanları doldurun.","danger");
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