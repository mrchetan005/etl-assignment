import { Fragment, useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { formTemplatesData } from "../../constants";
import { useParams } from "react-router-dom";
import FormTextarea from "./FormTextarea";


const tagObj = {
    input: (props) => <FormInput {...props} />,
    select: (props) => <FormSelect {...props} />,
    textarea: (props) => <FormTextarea {...props} />
}

const FormWrapper = () => {
    const [formsData, setFormsData] = useState();
    const [errorsData, setErrorsData] = useState();
    const { template } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-11/12 sm:w-4/5 m-auto my-8">
                {
                    template && (
                        formTemplatesData?.[template]?.map(data => (
                            <Fragment key={data?.id}>
                                {tagObj[data?.tag](data)}
                            </Fragment>
                        ))
                    )
                }
            </form>
        </div>
    )
}

export default FormWrapper;

/** 
   <FormInput
        label='1. Email'
        type="email"
        id="email"
        name="email"
        placeholder='Example - userid@gmail.com'
        required={true}
    />
    <FormInput
        label='2. Location'
        type="text"
        id="location"
        name="location"
        placeholder='Search or enter your location'
    />
    <FormInput
        label='3. Interview Date'
        type="date"
        id="date"
        name="date"
        placeholder='Search or enter your location'
    />
    <FormInput
        label='4. Interview Time'
        type="time"
        id="time"
        name="time"
        placeholder='Search or enter your location'
    />
    <FormSelect
        label='5. Time Zone'
        id="timeZone"
        name="timeZone"
        options={timezones}
        placeholder='Search or Select time zone from below'
    />
    <FormSelect
        label='6. Interview Medium'
        id="interviewMedium"
        name="interviewMedium"
        placeholder='Search or Select medium of Interview from below'
    />
 */