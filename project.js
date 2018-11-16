const form = document.getElementById('film-form');
const titleElement = document.querySelector('#title') ;
const directorElement = document.querySelector('#director');
const urlElement = document.querySelector('#url'); 

// start UI object
const ui = new UI() ;

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
}
else{
    // Yeni Film..
    const newFilm = new Film(title,director,url) ;

    ui.addFilmToUI(newFilm) ;   // Arayüze film ekleme.. 


}

    e.preventDefault() ;
}