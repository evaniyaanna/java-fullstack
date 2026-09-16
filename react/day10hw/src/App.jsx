import { RouterProvider } from "react-router-dom";
import router from "./router";
import AutoLogin from "./components/auth/AutoLogin";

function App() {
    return (
        <AutoLogin>
            <RouterProvider router={router} />
        </AutoLogin>
    );
}

export default App;