import { Routes, Route } from "react-router-dom";

import Navbar from "./components/auth/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function Router() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default Router;