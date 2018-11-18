class UI{

static addFilmToUI(newFilm){

  /*
    <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> 
*/

  const filmList = document.getElementById('films');
  
  filmList.innerHTML += `<tr>
  <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
  <td>${newFilm.title}</td>
  <td>${newFilm.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>`
}

static clearInputs(element1,element2,element3){
  element1.value = "" ;
  element2.value = "" ;
  element3.value = "" ;
}
static displayMessage(message,type){
  const cardbody = document.querySelector('.card-body')
  // create alert div 
  const div = document.createElement("div")

  div.className = `alert alert-${type}`;
  div.textContent = message;

  cardbody.appendChild(div) ;

  setTimeout(()=>{
    div.remove();
  },1500);

}

static loadAllFilms(films){
  const filmList = document.getElementById("films") ;

  films.forEach((film)=>{ 
    filmList.innerHTML += `<tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
    <td>${film.title}</td>
    <td>${film.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`
    })
}

static deleteFilmFromUI(target){
  target.parentElement.parentElement.remove() ;  
}

static deleteAllFilmFromUI(){
  const filmList = document.getElementById("films");
 // filmList.innerHTML = "" ; // first method but slow one.

  while(filmList.firstElementChild !== null){
    filmList.firstElementChild.remove() ;
  }


}
}
