import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productSlice";
import checkAuth from "./auth/checkAuth";

function ProductList() {

    const user = useSelector(
        store => store.auth.user
    );

    const products = useSelector(
        store => store.product.products
    );

    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        if (user) {

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

                console.log(error);

                setErrorMessage(
                    "Failed to load products."
                );
            });
        }

    }, [user, dispatch]);

    return (
        <div className="container">

            <h1>Product List</h1>

            {errorMessage && (
                <p>{errorMessage}</p>
            )}

            <table border="1">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>

                    {products.map(product => (

                        <tr key={product.id}>

                            <td>
                                {product.name}
                            </td>

                            <td>
                                {product.description}
                            </td>

                            <td>
                                {product.price}
                            </td>

                            <td>
                                {product.quantity}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default checkAuth(ProductList);