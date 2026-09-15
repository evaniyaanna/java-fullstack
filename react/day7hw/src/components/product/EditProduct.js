import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {

    const { productId } = useParams();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        axios.get(
            "https://worksheet-catalogue.mashupstack.com/products/"
            + productId
        )
        .then(response => {

            setName(response.data.name);
            setPrice(response.data.price);
            setCategory(response.data.category);
            setQuantity(response.data.quantity);

        });

    }, [productId]);

    function updateProduct() {

        axios.put(
            "https://worksheet-catalogue.mashupstack.com/products/"
            + productId,
            {
                name: name,
                price: Number(price),
                category: category,
                quantity: Number(quantity)
            }
        )
        .then(response => {

            alert("Product updated successfully");

            navigate("/products");

        });

    }

    return (
        <div className="container">

            <div className="col-8 offset-2">

                <h1 className="text-center my-4">
                    Edit Product
                </h1>

                <div className="form-group">

                    <label>Product Name:</label>

                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                    />

                </div>

                <div className="form-group">

                    <label>Price:</label>

                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(event) =>
                            setPrice(event.target.value)
                        }
                    />

                </div>

                <div className="form-group">

                    <label>Category:</label>

                    <input
                        type="text"
                        className="form-control"
                        value={category}
                        onChange={(event) =>
                            setCategory(event.target.value)
                        }
                    />

                </div>

                <div className="form-group">

                    <label>Quantity:</label>

                    <input
                        type="number"
                        className="form-control"
                        value={quantity}
                        onChange={(event) =>
                            setQuantity(event.target.value)
                        }
                    />

                </div>

                <button
                    className="btn btn-primary"
                    onClick={updateProduct}
                >
                    Update
                </button>

            </div>

        </div>
    );
}

export default EditProduct;