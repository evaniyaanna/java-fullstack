import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function registerUser() {
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
            if (error.response && error.response.data) {
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

                <button
                    className="btn btn-primary"
                    onClick={registerUser}
                >
                    Register
                </button>

                <p className="link-text">
                    Already have an account?{" "}
                    <button
                        className="link-button"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Register;