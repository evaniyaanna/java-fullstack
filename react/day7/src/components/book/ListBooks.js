import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookListItem from "./BookListItem";

function ListBooks() {

    const [books, setBooks] = useState([]);

    function fetchBooks() {
        axios.get("https://worksheet-library.mashupstack.com/books")
        .then(response => {
            setBooks(response.data);
        });
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="container">

            <h1 className="text-center my-4">
                Book Manager
            </h1>

            <Link
                to="/books/create"
                className="btn btn-info mb-3"
            >
                Add Book
            </Link>

            {books.map(book =>
                <BookListItem
                    key={book.id}
                    book={book}
                    refresh={fetchBooks}
                />
            )}

        </div>
    );
}

export default ListBooks;