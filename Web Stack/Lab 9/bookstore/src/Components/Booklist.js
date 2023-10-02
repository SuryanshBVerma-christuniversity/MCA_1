import React, { useState, useEffect } from "react";
import BookCard from './BookCard'

export default function Booklist(props) {

    const searchTerm = props.searchTerm;
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.items) {
                    setBooks(data.items);
                }
            })
            .catch((error) => console.error(error));
    }, [searchTerm]);

    // console.log(searchTerm);
    return (
        <div className="container-fluid d-flex flex-column justify-content-center p-5 mt-5">
            {
                books?.length > 0 ?
                (
                    books.map((book) => (
                        <BookCard key={book.id} book={book.volumeInfo} />
                    ))
                ): (
                    <h1 className="display-1 mx-auto my-5">Search for any book....</h1>
                )
            }
        </div>
    )
}