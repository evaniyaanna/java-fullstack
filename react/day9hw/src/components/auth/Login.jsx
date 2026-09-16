import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function attemptLogin() {

        axios.post(
            "https://worksheet-product.mashupstack.com/login",
            {
                email: email,
                password: password
            }
        )
        .then(response => {

            setErrorMessage("");

            const user = {
                email: email,
                token: response.data.token
            };

            dispatch(setUser(user));

            navigate("/products");
        })
        .catch(error => {

            if (error.response?.data?.errors) {

                setErrorMessage(
                    Object.values(error.response.data.errors).join(" ")
                );

            } else if (error.response?.data?.message) {

                setErrorMessage(error.response.data.message);

            } else {

                setErrorMessage("Failed to login user.");
            }
        });
    }

    return (
        <div className="container">

            <h1>Login</h1>

            {errorMessage && (
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}

            <div>
                <label>Email</label>

                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div>
                <label>Password</label>

                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <button onClick={attemptLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;