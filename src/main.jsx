import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './App.css'
import {ThemeProvider} from "react-bootstrap";
import './i18n';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Validation from "./pages/Validation/Validation";
// import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn></SignIn>,
    },
    {
        path: "/validation",
        element: <Validation></Validation>,
    },
    {
        path: "/",
        element: <SignIn></SignIn>,
    },
    {
        path: "/",
        element: <SignIn></SignIn>,
    },
    {
        path: "/",
        element: <SignIn></SignIn>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider dir="rtl">
        <div className="container">
            <App/>
            <RouterProvider router={router}/>
        </div>

    </ThemeProvider>
)
