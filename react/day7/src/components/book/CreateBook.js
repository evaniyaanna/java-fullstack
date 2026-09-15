import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateBook() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [published_year, setPublishedYear] = useState("");
    const [genre, setGenre] = useState("");

    const navigate = useNavigate();

    function addBook() {

        axios.post(
            "https://worksheet-library.mashupstack.com/books",
            {
                title: title,
                author: author,
                published_year: published_year,
                genre: genre
            }
        )
        .then(response => {
            alert("Book created successfully");
            navigate("/books");
        });

    }

    return (
        <div className="container">

            <div className="col-8 offset-2">

                <h1 className="text-center">
                    Add Book
                </h1>

                <div className="form-group">
                    <label>Title:</label>

                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(event) =>
                            setTitle(event.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label>Author:</label>

                    <input
                        type="text"
                        className="form-control"
                        value={author}
                        onChange={(event) =>
                            setAuthor(event.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label>Published Year:</label>

                    <input
                        type="number"
                        className="form-control"
                        value={published_year}
                        onChange={(event) =>
                            setPublishedYear(event.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label>Genre:</label>

                    <input
                        type="text"
                        className="form-control"
                        value={genre}
                        onChange={(event) =>
                            setGenre(event.target.value)
                        }
                    />
                </div>

                <button
                    className="btn btn-primary float-right"
                    onClick={addBook}
                >
                    Submit
                </button>

            </div>

        </div>
    );
}

export default CreateBook;