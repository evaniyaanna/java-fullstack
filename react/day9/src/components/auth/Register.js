import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function attemptRegister() {

        axios.post("https://worksheet-product.mashupstack.com/register", {
            user_name: userName,
            email: email,
            password: password
        })
        .then(response => {
            setErrorMessage("");
            navigate("/login");
        })
        .catch(error => {
            if (error.response?.data?.errors) {
                setErrorMessage(
                    Object.values(error.response.data.errors).join(" ")
                );
            }
            else if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message);
            }
            else {
                setErrorMessage("Failed to register user.");
            }
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">

                    <h1>Register</h1>

                    {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    }

                    <div className="form-group">
                        <label>User Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={userName}
                            onChange={(event) =>
                                setUserName(event.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            onClick={attemptRegister}
                        >
                            Register
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;