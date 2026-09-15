import axios from "axios";
import { Link } from "react-router-dom";

function ProductListItem(props) {

    function deleteProduct() {

        axios.delete(
            "https://worksheet-catalogue.mashupstack.com/products/"
            + props.product.id
        )
        .then(response => {

            alert("Product deleted successfully");

            props.refresh();

        });

    }

    return (
        <div className="card mb-3">

            <div className="card-body">

                <h3>
                    {props.product.name}
                </h3>

                <p>
                    <b>Price:</b> ₹{props.product.price}
                </p>

                <p>
                    <b>Category:</b> {props.product.category}
                </p>

                <p>
                    <b>Available Quantity:</b>{" "}
                    {props.product.quantity}
                </p>

                <Link
                    to={
                        "/products/"
                        + props.product.id
                        + "/edit"
                    }
                    className="btn btn-primary mr-2"
                >
                    Edit
                </Link>

                <button
                    className="btn btn-danger"
                    onClick={deleteProduct}
                >
                    Delete
                </button>

            </div>

        </div>
    );
}

export default ProductListItem;