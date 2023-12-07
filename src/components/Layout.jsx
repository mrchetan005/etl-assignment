import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Layout = () => {
    return (
        <>
            <div className="sm:h-[calc(100vh-8rem)]">
                <Header />
                <main className="bg-[#F5F5F5]  my-16">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout;

