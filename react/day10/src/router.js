import { createBrowserRouter } from "react-router-dom";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import StudentList from "./components/StudentList";

const router = createBrowserRouter([

    {
        path: "/",
        element: <StudentList />
    },

    {
        path: "/register",
        element: <Register />
    },

    {
        path: "/login",
        element: <Login />
    }

]);

export default router;