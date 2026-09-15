import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    function registerUser() {

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        axios.post(
            "https://worksheet-auth.mashupstack.com/register",
            {
                user_name: name,
                email: email,
                password: password
            }
        )
        .then(response => {
            alert("Registration Successful");
            navigate("/login");
        })
        .catch(error => {
            if (
                error.response &&
                error.response.data
            ) {
                alert(
                    error.response.data.message ||
                    "Registration failed"
                );
            } else {
                alert("Registration failed");
            }
        });
    }

    return (
        <div className="container">
            <div className="form-container">

                <h1>Register</h1>

                <div className="form-group">
                    <label>Name:</label>

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
                    <label>Email:</label>

                    <input
                        type="email"
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
                    <label>Confirm Password:</label>

                    <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(event) =>
                            setConfirmPassword(
                                event.target.value
                            )
                        }
                    />
                </div>

                <button
                    className="btn btn-primary"
                    onClick={registerUser}
                >
                    Register
                </button>

            </div>
        </div>
    );
}

export default Register;