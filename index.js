function fetchBooks(){
    fetch(' https://www.googleapis.com/books/v1/volumes?q=intitle:potter&key=AIzaSyCAeLhuL-3SApWpwdugiXCOO93F3utnx2w')
  .then(response => response.json())
  .then(data => console.log(data));
}


fetchBooks()