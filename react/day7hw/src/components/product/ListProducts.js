import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductListItem from "./ProductListItem";

function ListProducts() {

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    function fetchProducts() {

        axios.get(
            "https://worksheet-catalogue.mashupstack.com/products"
        )
        .then(response => {

            setAllProducts(response.data);
            setFilteredProducts(response.data);

        });

    }

    useEffect(() => {

        fetchProducts();

    }, []);

    function handleSearch(event) {

        const value = event.target.value;

        setSearchTerm(value);

        const filtered = allProducts.filter(product =>
            product.name
                .toLowerCase()
                .includes(value.toLowerCase())
        );

        setFilteredProducts(filtered);

    }

    return (
        <div className="container">

            <h1 className="text-center my-4">
                Product Catalog
            </h1>

            <div className="mb-3">

                <label>
                    Search Product:
                </label>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                    value={searchTerm}
                    onChange={handleSearch}
                />

            </div>

            <Link
                to="/products/create"
                className="btn btn-info mb-3"
            >
                Add Product
            </Link>

            {filteredProducts.length === 0 ? (

                <p>
                    No products found.
                </p>

            ) : (

                filteredProducts.map(product => (

                    <ProductListItem
                        key={product.id}
                        product={product}
                        refresh={fetchProducts}
                    />

                ))

            )}

        </div>
    );
}

export default ListProducts;