import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import checkAuth from "./auth/checkAuth.js";

function ProductList() {

    const user = useSelector(store => store.auth.user);

    const [products, setProducts] = useState([]);
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
                setProducts(response.data);
            })
            .catch(error => {
                setErrorMessage("Failed to load products.");
            });
        }

    }, [user]);

    return (
        <div className="container">
            <h1>Product List</h1>

            {errorMessage &&
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            }

            <table className="table table-bordered">
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
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default checkAuth(ProductList);