import { useNavigate } from "react-router-dom";
import Form from "../components/Forms";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#F5F5F5] flex flex-col sm:flex-row">
            <Sidebar />
            <Form />
        </div>
    )
}

export default Home;