import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import './App.css'
import {ThemeProvider} from "react-bootstrap";
import './i18n';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider dir="rtl">
        <App/>
    </ThemeProvider>
)
