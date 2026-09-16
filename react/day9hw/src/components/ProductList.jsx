import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
import checkAuth from "./auth/checkAuth";
import { useNavigate } from "react-router-dom";

function ProductList() {

    const user = useSelector(store => store.auth.user);

    const products = useSelector(
        store => store.product.products
    );

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        if (user && products.length === 0) {

            axios.get(
                "https://worksheet-product.mashupstack.com/product",
                {
                    headers: {
                        Authorization: "Bearer " + user.token
                    }
                }
            )
            .then(response => {

                dispatch(setProducts(response.data));

            })
            .catch(error => {

                setErrorMessage("Failed to load products.");

            });
        }

    }, [user, products.length, dispatch]);

    return (
        <div className="container">

            <h1>Product List</h1>

            {errorMessage && (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}

            <ul>

                {products.map(product => (

                    <li key={product.id}>

                        <h3>{product.name}</h3>

                        <p>{product.description}</p>

                        <p>Price: {product.price}</p>

                        <p>Quantity: {product.quantity}</p>

                        <button
                            onClick={() =>
                                navigate("/product/" + product.id)
                            }
                        >
                            View
                        </button>

                    </li>

                ))}

            </ul>

        </div>
    );
}

export default checkAuth(ProductList);