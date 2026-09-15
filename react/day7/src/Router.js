import { Routes, Route } from "react-router-dom";

import ListBooks from "./components/book/ListBooks";
import CreateBook from "./components/book/CreateBook";
import EditBook from "./components/book/EditBook";

function Router() {
    return (
        <Routes>

            <Route
                path="/"
                element={<ListBooks />}
            />

            <Route
                path="/books"
                element={<ListBooks />}
            />

            <Route
                path="/books/create"
                element={<CreateBook />}
            />

            <Route
                path="/books/:bookId/edit"
                element={<EditBook />}
            />

        </Routes>
    );
}

export default Router;