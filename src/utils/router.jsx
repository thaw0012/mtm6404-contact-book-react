import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import Contact from "../routes/Contact.jsx"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/contact/:id',
        element: <Contact />
    }
]);

export default router;