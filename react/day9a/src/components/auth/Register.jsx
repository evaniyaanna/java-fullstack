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

        axios.post(
            "https://worksheet-product.mashupstack.com/register",
            {
                user_name: userName,
                email: email,
                password: password
            }
        )
        .then(response => {

            setErrorMessage("");

            navigate("/login");

        })
        .catch(error => {

            console.log(error);

            if (error.response?.data?.errors) {

                setErrorMessage(
                    Object.values(error.response.data.errors).join(" ")
                );

            } else if (error.response?.data?.message) {

                setErrorMessage(error.response.data.message);

            } else {

                setErrorMessage("Failed to register.");
            }
        });
    }

    return (
        <div className="container">

            <h1>Register</h1>

            {errorMessage && (
                <p>{errorMessage}</p>
            )}

            <div>
                <label>User Name</label>

                <input
                    type="text"
                    value={userName}
                    onChange={(event) =>
                        setUserName(event.target.value)
                    }
                />
            </div>

            <div>
                <label>Email</label>

                <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                />
            </div>

            <div>
                <label>Password</label>

                <input
                    type="password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                />
            </div>

            <button onClick={attemptRegister}>
                Register
            </button>

        </div>
    );
}

export default Register;