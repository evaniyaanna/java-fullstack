import { createBrowserRouter } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import StudentsList from "./components/StudentsList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StudentsList />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);

export default router;