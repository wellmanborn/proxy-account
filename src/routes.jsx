import {createBrowserRouter} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn.jsx";
import Validation from "./pages/Validation/Validation.jsx";
import Accounts from "./pages/Accounts/Accounts.jsx";
import Terms from "./pages/Terms/Terms.jsx";
import Receipt from "./pages/Receipt/Receipt.jsx";
import App from "./App.jsx";

const routes = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <SignIn />,
            },
            {
                path: "/validation",
                element: <Validation />,
            },
            {
                path: "/account",
                element: <Accounts />,
            },
            {
                path: "/terms",
                element: <Terms />,
            },
            {
                path: "/receipt",
                element: <Receipt />,
            }]
    }
]);

export default routes;