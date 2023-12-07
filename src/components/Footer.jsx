import Button from "../utils/button";


const Footer = () => {
    return (
        <div className="fixed bottom-0 left-0 py-4 px-8 flex items-center justify-between h-16 border-t shadow w-full bg-white z-10">
            <div></div>
            <Button text='Next' disabled={true} />
        </div>
    )
}

export default Footer;