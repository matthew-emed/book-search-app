let searchValue = document.querySelector("#booksearch")
let form = document.querySelector("#form")
let searchInput = document.querySelector("#searchInput")
let resultContent = document.querySelector("#resultContent")
let result = document.querySelector("#result")
let orderBy = document.getElementsByTagName("select")[0].value
let subject = document.querySelector("#searchSubject")
let author = document.querySelector("#searchAuthor")


function fetchBooks(){
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput.value}+subject:${subject.value}+inauthor:${author.value}&maxResults=40&key=AIzaSyCAeLhuL-3SApWpwdugiXCOO93F3utnx2w`)
  .then(response => response.json())
  .then(data => {
    console.log(author.value)
console.log(data)
let dataArray = data.items
console.log(dataArray[0].volumeInfo.imageLinks.thumbnail)
for(let book of dataArray){
  console.log(book.volumeInfo.publishedDate)
  const publishedDate = document.createElement("h4");
  const bookImg = document.createElement("img");
  const result = document.createElement("div");
  const title = document.createElement("h1");
  const subTitle = document.createElement("h3");
  const author = document.createElement("h4");
  // console.log(book.volumeInfo.imageLinks.thumbnail);
    bookImg.setAttribute('src', `${book.volumeInfo.imageLinks.thumbnail}`)
   publishedDate.textContent = `${book.volumeInfo.publishedDate}`
     author.textContent = `${book.volumeInfo.authors[0]}`
  subTitle.textContent = `${book.volumeInfo.subtitle}`
  title.textContent = `Book Title: ${book.volumeInfo.title}`
  result.style.marginBottom = '30px'
  title.style.fontSize = '25px'
  subTitle.style.fontSize = '15px'
  resultContent.append(result)
   result.append(bookImg)
  result.appendChild(title)
  result.appendChild(subTitle)
  result.appendChild(author)
  result.appendChild(publishedDate)
  result.style.borderBottom = '1px solid black'

}
  })
}



function logSubmit(e){
  e.preventDefault()
  console.log(searchInput.value)
  
  fetchBooks()
}

form.addEventListener('submit', logSubmit);





// fetchBooks()