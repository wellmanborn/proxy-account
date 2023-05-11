import SignIn from "./pages/SignIn/SignIn";
import Header from "./layouts/header";
import Validation from "./pages/Validation/Validation";
import Accounts from "./pages/Accounts/Accounts";
import Terms from "./pages/Terms/Terms";
import Receipt from "./pages/Receipt/Receipt";

function App() {

    return (
        <div className="container">
            <Header active={1} />
            <SignIn />
        </div>
    )
}

export default App
