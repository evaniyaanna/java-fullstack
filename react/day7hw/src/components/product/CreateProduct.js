import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");

    const navigate = useNavigate();

    function addProduct() {

        axios.post(
            "https://worksheet-catalogue.mashupstack.com/products",
            {
                name: name,
                price: Number(price),
                category: category,
                quantity: Number(quantity)
            }
        )
        .then(response => {

            alert("Product added successfully");

            navigate("/products");

        });

    }

    return (
        <div className="container">

            <div className="col-8 offset-2">

                <h1 className="text-center my-4">
                    Add Product
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
                    onClick={addProduct}
                >
                    Submit
                </button>

            </div>

        </div>
    );
}

export default CreateProduct;