let searchValue = document.querySelector("#booksearch")
let form = document.querySelector("#form")
let searchInput = document.querySelector("#searchInput")
let resultContent = document.querySelector("#resultContent")
let result = document.querySelector("#result")


function fetchBooks(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput.value}&key=AIzaSyCAeLhuL-3SApWpwdugiXCOO93F3utnx2w`)
  .then(response => response.json())
  .then(data => {

let dataArray = data.items
console.log(dataArray[0].volumeInfo.imageLinks.thumbnail)
for(let book of dataArray){
  const bookImg = document.createElement("img");
  const result = document.createElement("div");
  const title = document.createElement("h1");
  const subTitle = document.createElement("h3");
  bookImg.setAttribute('src', `${book.volumeInfo.imageLinks.thumbnail}`)
  subTitle.textContent = `${book.volumeInfo.subtitle}`
  title.textContent = `Book Title: ${book.volumeInfo.title}`
  result.style.marginBottom = '30px'
  title.style.fontSize = '25px'
  subTitle.style.fontSize = '15px'
  resultContent.append(result)
  result.append(bookImg)
  result.appendChild(title)
  result.appendChild(subTitle)

}


  });
  
}



function logSubmit(e){
  e.preventDefault()
  console.log(searchInput.value)
  
  fetchBooks()
}

form.addEventListener('submit', logSubmit);





// fetchBooks()