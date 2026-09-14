import React, { useState } from "react";


function App() {
  const [books, setBooks] = useState([]);

  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishDate, setPublishDate] = useState("");

  const [search, setSearch] = useState("");

  const [editId, setEditId] = useState(null);
  const [editBookName, setEditBookName] = useState("");

  // Add Book
  function addBook() {
    if (bookName.trim() === "") {
      return;
    }

    const newBook = {
      id: books.length + 1,
      bookName: bookName,
      authorName: authorName,
      publishDate: publishDate
    };

    setBooks([...books, newBook]);

    setBookName("");
    setAuthorName("");
    setPublishDate("");
  }

  // Delete Book
  function deleteBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  // Start Editing
  function editBook(book) {
    setEditId(book.id);
    setEditBookName(book.bookName);
  }

  // Save Edited Book
  function saveBook(id) {
    if (editBookName.trim() === "") {
      return;
    }

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          bookName: editBookName
        };
      }

      return book;
    });

    setBooks(updatedBooks);
    setEditId(null);
    setEditBookName("");
  }

  // Cancel Editing
  function cancelEdit() {
    setEditId(null);
    setEditBookName("");
  }

  // Search Books
  const filteredBooks = books.filter((book) =>
    book.bookName.toLowerCase().includes(search.toLowerCase()) ||
    book.authorName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Book List Management App
      </h1>

      {/* Add Book Form */}
      <div className="card p-4 mb-4">

        <h3>Add New Book</h3>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />

        <input
          type="date"
          className="form-control mb-3"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addBook}
        >
          Add Book
        </button>

      </div>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by book name or author name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Book Table */}
      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Publish Date</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {filteredBooks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No books found
              </td>
            </tr>
          ) : (
            filteredBooks.map((book) => (
              <tr key={book.id}>

                <td>{book.id}</td>

                <td>
                  {editId === book.id ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editBookName}
                      onChange={(e) =>
                        setEditBookName(e.target.value)
                      }
                    />
                  ) : (
                    book.bookName
                  )}
                </td>

                <td>{book.authorName}</td>

                <td>{book.publishDate}</td>

                <td>

                  {editId === book.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => saveBook(book.id)}
                      >
                        Save
                      </button>

                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => editBook(book)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default App;