import { Routes, Route } from "react-router-dom";

import ListProducts from "./components/product/ListProducts";
import CreateProduct from "./components/product/CreateProduct";
import EditProduct from "./components/product/EditProduct";

function Router() {

    return (
        <Routes>

            <Route
                path="/"
                element={<ListProducts />}
            />

            <Route
                path="/products"
                element={<ListProducts />}
            />

            <Route
                path="/products/create"
                element={<CreateProduct />}
            />

            <Route
                path="/products/:productId/edit"
                element={<EditProduct />}
            />

        </Routes>
    );
}

export default Router;






























