
const apiUrl = "books.json";

async function fetchBooks() {
    try {
        const response = await fetch(apiUrl);                          

        const data = await response.json();
        displayBooks(data);         
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayBooks(books) {

    const bookListDiv = document.getElementById('bookList');
    bookListDiv.innerHTML = ''; 


    if (books.length === 0) {
        bookListDiv.textContent = 'No books found.';
        return;
    }

    const ul = document.createElement('ul');
    for(var i = 0; i < books.length; i++){
        const li = document.createElement('li');
        li.textContent = `${books[i].title} by ${books[i].author}`;
        ul.appendChild(li);
    }
    bookListDiv.appendChild(ul);
}

const fetchBooksButton = document.getElementById('fetch_btn');
fetchBooksButton.addEventListener('click', fetchBooks);
