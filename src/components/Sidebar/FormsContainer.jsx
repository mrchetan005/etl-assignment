import { NavLink } from "react-router-dom";
import { defaultFormTemplate } from "../../constants";
import { useDispatch } from "react-redux";
import { resetForm } from "../../store/slices/formSlice";

const FormsContainer = ({ title = defaultFormTemplate.title, description = defaultFormTemplate.description }) => {
    const pathString = title.toLowerCase().split(' ').join('-');
    const path = `/form/${pathString}?step=1`;

    const dispatch = useDispatch();

    const handleResetForm = () => {
        dispatch(resetForm({ template: pathString }));
    }

    return (
        <NavLink to={path} onClick={handleResetForm}>
            <div className={`sidebarWrapper active:scale-[0.99] flex gap-3 my-4 group p-4 border rounded-lg border-[#888888] hover:border-[#1A8FE6]`}>
                <div className={`sidebarBox h-16 w-16 lg:h-20 lg:w-20 flex-shrink-0 rounded-lg bg-[#d8d8d8] group-hover:bg-[#1a8ee648]`}>
                </div>
                <div className="inline-block">
                    <h2 className="">{title}</h2>
                    <p className="text-xs text-[#343434]">{description}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default FormsContainer;