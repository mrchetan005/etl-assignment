import { Fragment } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { formTemplatesData } from "../../constants";
import { useParams } from "react-router-dom";
import FormTextarea from "./FormTextarea";
import { useDispatch, useSelector } from "react-redux";
import { updateFiles, updateForm } from "../../store/slices/formSlice";


const getFormTags = {
    input: (props) => <FormInput {...props} />,
    select: (props) => <FormSelect {...props} />,
    textarea: (props) => <FormTextarea {...props} />
}

const FormWrapper = () => {
    const { template } = useParams();

    const { formsData, errorsData } = useSelector(state => state.form);

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleBlur = (e) => {
        const { name, type, value, files, required } = e.target;
        dispatch(updateForm({ name, type, value, files, required, template }));
    }

    const handleChange = (e) => {
        const { type, name, files, required, dataset, value } = e.target;
        if (type === 'file') {
            dispatch(updateFiles({ name, required, files, sizeLimit: parseInt(dataset?.sizeLimit), template }));
        } else {
            dispatch(updateForm({ name, type, value, required, template }));
        }
    }

    const handleClear = ({ name, type, value, files, required }) => {
        dispatch(updateForm({ name, type, value, files, required, template }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-11/12 sm:w-4/5 m-auto my-8">
                {
                    template && (
                        formTemplatesData?.[template]?.map(data => (
                            <Fragment key={data?.id}>
                                {getFormTags[data?.tag]({ ...data, onBlur: handleBlur, onChange: handleChange, errors: errorsData[template], formData: formsData[template], handleClear })}
                            </Fragment>
                        ))
                    )
                }
            </form>
        </div>
    )
}

export default FormWrapper;