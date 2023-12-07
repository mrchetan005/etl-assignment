import ProgressBar from "./ProgressBar";
import { progressBar } from "../../constants";


const Header = () => {
    return (
        <header className="shadow border-b fixed top-0 left-0 right-0 flex items-center h-16 px-4 bg-white z-10">
            <div className="max-w-[1000px] w-full flex items-center truncate m-auto">
                <ProgressBar progressBar={progressBar} />
            </div>
            <button className="h-8 w-8 grid place-items-center cursor-pointer rounded-full mx-0 sm:mx-4">
                <img src="/icons/close.svg" alt="" className="" />
            </button>
        </header>
    )
}

export default Header;