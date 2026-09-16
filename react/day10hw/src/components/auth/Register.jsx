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
            "https://worksheet-student.mashupstack.com/register",
            {
                user_name: name,
                email: email,
                password: password
            }
        )
        .then(response => {

            navigate("/login");

        })
        .catch(error => {

            if (error.response?.data?.message) {

                setErrorMessage(
                    error.response.data.message
                );

            } else {

                setErrorMessage(
                    "Registration failed."
                );
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
                <label>Name</label>

                <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
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