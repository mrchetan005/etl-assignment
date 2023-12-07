import FormHeading from "./FormHeading";
import FormWrapper from "./FormWrapper";


const Form = () => {
    return (
        <div className="sm:h-[calc(100vh-8rem)] overflow-y-auto w-full md:mx-0">
            <div className="max-w-[55rem] sm:w-11/12 my-10 m-auto">
                <div className="mb-6 px-5 sm:px-0">
                    <h3 className="text">Preview</h3>
                    <p className="text-xs">You will be able to customize the fields in the later stage</p>
                </div>
                <section className="overflow-hidden sm:rounded-xl shadow bg-white">
                    <FormHeading />
                    <FormWrapper />
                </section>
            </div>
        </div>
    )
}

export default Form;