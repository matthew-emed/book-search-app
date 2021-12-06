let searchValue = document.querySelector("#booksearch")
let form = document.querySelector("#form")
let searchInput = document.querySelector("#searchInput")
let resultContent = document.querySelector("#resultContent")


function fetchBooks(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput.value}&key=AIzaSyCAeLhuL-3SApWpwdugiXCOO93F3utnx2w`)
  .then(response => response.json())
  .then(data => {

let dataArray = data.items
console.log(dataArray)
dataArray.forEach(book=> console.log(book.volumeInfo.title))
  });
  
}



function logSubmit(e){
  e.preventDefault()
  console.log(searchInput.value)
  
  fetchBooks()
}

form.addEventListener('submit', logSubmit);





// fetchBooks()