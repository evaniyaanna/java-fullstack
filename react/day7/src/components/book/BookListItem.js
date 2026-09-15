import axios from "axios";
import { Link } from "react-router-dom";

function BookListItem(props) {

    function deleteBook() {

        axios.delete(
            "https://worksheet-library.mashupstack.com/books/"
            + props.book.id
        )
        .then(response => {
            alert("Book deleted successfully");
            props.refresh();
        });

    }

    return (
        <div className="card mb-3">

            <div className="card-body">

                <h4>{props.book.title}</h4>

                <p>
                    <b>Author:</b> {props.book.author}
                </p>

                <p>
                    <b>Published Year:</b> {props.book.published_year}
                </p>

                <p>
                    <b>Genre:</b> {props.book.genre}
                </p>

                <button
                    className="btn btn-danger float-right"
                    onClick={deleteBook}
                >
                    Delete
                </button>

                <Link
                    to={"/books/" + props.book.id + "/edit"}
                    className="btn btn-primary float-right mr-2"
                >
                    Edit
                </Link>

            </div>

        </div>
    );
}

export default BookListItem;