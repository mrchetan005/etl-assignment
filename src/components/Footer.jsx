import { useSearchParams } from "react-router-dom";
import Button from "../utils/Button";
import { useSelector } from "react-redux";


const Footer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentStep = parseInt(searchParams.get('step'));
    const { disabled } = useSelector(state => state.form);

    console.log(disabled);

    const handleNext = () => {
        if (currentStep === 4) return;
        setSearchParams({ step: currentStep + 1 });
    }

    const handlePrevious = () => {
        if (currentStep === 1) return;
        setSearchParams({ step: currentStep - 1 });
    }

    const handleSubmit = () => {
        alert('Form submitted successfully!');
    }

    return (
        <div className="fixed bottom-0 left-0 py-4 px-8 flex items-center justify-between h-16 border-t shadow w-full bg-white z-10">
            {
                currentStep !== 1
                    ? <Button text='Previous' disabled={false} onClick={handlePrevious} />
                    : <div></div>
            }
            {
                currentStep !== 4
                    ? <Button text='Next' disabled={disabled} onClick={handleNext} />
                    : <Button text='Submit' disabled={true} onClick={handleSubmit} />
            }
        </div>
    )
}

export default Footer;