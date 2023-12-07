
const FormTextarea = (props) => {
    const { label, id, className, icon, max, name, required = false, placeholder, handleClear, type = "text", errors, formData, ...inputProps } = props;
    return (
        <div className="flex flex-col py-4">
            <label htmlFor={id} className="">{label}{required && '*'}</label>
            <div className={`border border-[#888888] rounded w-full h-full relative`}>
                {icon && icon}
                <textarea
                    rows="4"
                    name={name}
                    id={id}
                    type={type}
                    value={formData[name]}
                    required={required}
                    maxLength={max}
                    className={`rounded resize-none w-full p-2 outline-none ${className}`} placeholder={placeholder}
                    {...inputProps}
                ></textarea>
                {
                    formData[name] && <button onClick={() => handleClear({ name, type, value: '', required })} className="absolute right-1 top-0 bg-white flex items-center cursor-pointer justify-center w-6 h-6 p-1 sm:w-8 sm:h-8">
                        <img src="/icons/close.svg" alt="" />
                    </button>
                }
            </div>
            <p className="text-[10px] text-right text-[#bababa] mr-2">{max} word limit</p>
            {
                errors[name] && <p className="text-sm text-red-400 capitalize mt-1 pl-1">{errors[name]}</p>
            }
        </div>
    )
}

export default FormTextarea;