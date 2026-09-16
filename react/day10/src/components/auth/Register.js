import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function attemptRegister() {

        axios.post(
            "https://worksheet-student.mashupstack.com/api/register",
            {
                name: name,
                email: email,
                password: password
            }
        )
        .then(response => {

            setErrorMessage("");

            navigate("/login");
        })
        .catch(error => {

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
                <div className="alert alert-danger">
                    {errorMessage}
                </div>
            )}

            <div>
                <label>Name</label>

                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

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

            <button onClick={attemptRegister}>
                Register
            </button>

        </div>
    );
}

export default Register;