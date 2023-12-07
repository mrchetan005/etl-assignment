import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";

export const router = createBrowserRouter((
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index path='' element={<Home />} />
            <Route path='form/:template' element={<Home />} />
        </Route>
    )
));