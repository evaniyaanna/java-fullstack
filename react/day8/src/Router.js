import { Routes, Route } from "react-router-dom";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Router;