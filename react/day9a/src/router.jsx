import { createBrowserRouter } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProductList from "./components/ProductList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductList />
    },

    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/register",
        element: <Register />
    },

    {
        path: "/products",
        element: <ProductList />
    }
]);

export default router;