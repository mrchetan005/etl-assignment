import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";


const ProgressBar = ({ progressBar }) => {
    const [query] = useSearchParams();
    const activeStep = query.get('step');

    return (
        <>
            {
                progressBar.map(({ step, title }, i, arr) => (
                    <Fragment key={step}>
                        <div key={step} className="flex justify-center items-center w-full gap-2 flex-1">
                            <div className={`border rounded-full w-6 h-6 border-[#d8d8d8] flex items-center justify-center p-1 ${activeStep >= step ? 'bg-[#1A8FE6]' : ''}`}>
                                <img src='/icons/done.svg' alt="" />
                            </div>
                            <div className=''>{title}</div>
                        </div>
                        {
                            i !== arr.length - 1 &&
                            <div className={`w-full border-2 mx-2 ${activeStep > step ? 'border-[#1A8FE6]' : 'border-[#c3c3c3]'}`}></div>
                        }
                    </Fragment>
                ))
            }
        </>
    )
}

export default ProgressBar;