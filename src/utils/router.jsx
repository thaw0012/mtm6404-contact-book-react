import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import Contact from "../routes/Contact.jsx"
import AddContact from "../routes/AddContact.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/contact/:id',
        element: <Contact />
    },
    {
        path: '/add',
        element: <AddContact />
    }
]);

export default router;