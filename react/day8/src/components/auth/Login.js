import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function loginUser() {
        axios.post(
            "https://worksheet-auth.mashupstack.com/login",
            {
                email: email,
                password: password
            }
        )
        .then(response => {
            console.log("Token:", response.data.token);

            alert("Successfully Logged In");

            navigate("/");
        })
        .catch(error => {
            if (error.response && error.response.data) {
                alert(
                    error.response.data.message ||
                    "Login failed"
                );
            } else {
                alert("Login failed");
            }
        });
    }

    return (
        <div className="container">
            <div className="form-container">
                <h1>Login</h1>

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
                    onClick={loginUser}
                >
                    Login
                </button>

                <p className="link-text">
                    Don't have an account?{" "}
                    <button
                        className="link-button"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;