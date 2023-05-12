import {createBrowserRouter} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Validation from "./pages/Validation/Validation.jsx";
import Accounts from "./pages/Accounts/Accounts.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import Receipt from "./pages/Receipt/Receipt.jsx";
import Layout from "./layouts/Layout.jsx";

const routes = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <SignIn></SignIn>,
            },
            {
                path: "/validation",
                element: <Validation></Validation>,
            },
            {
                path: "/account",
                element: <Accounts></Accounts>,
            },
            {
                path: "/terms",
                element: <Terms></Terms>,
            },
            {
                path: "/receipt",
                element: <Receipt></Receipt>,
            }]
    }
]);

export default routes;