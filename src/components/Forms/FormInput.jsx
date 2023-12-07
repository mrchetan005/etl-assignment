
const types = ['date', 'time', 'file'];

const FormInput = (props) => {
    const { label, id, className, icon, required = false, type = "text", errors, name, handleClear, formData, ...inputProps } = props;

    return (
        <div className="flex flex-col py-4">
            <label htmlFor={id} className="">{label}{required && '*'}</label>
            <div className={`border relative border-[#888888] rounded ${types.includes(type) ? 'w-max min-w-[12rem]' : 'w-full'} ${errors[name] ? 'border-red-500 shadow-sm shadow-red-400' : ''}`}>
                {icon}
                <input
                    id={id}
                    value={formData[name]}
                    required={required}
                    className={`rounded w-full outline-none p-2 ${className}`} name={name} type={type}
                    {...inputProps}

                />
                {
                    formData[name] && <div onClick={() => handleClear({ name, type, value: '', required })} className={`absolute right-1 cursor-pointer bg-white top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 p-1 sm:w-8 sm:h-8 ${types.includes(type) ? '-right-10' : ''}`}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                }
            </div>
            {
                errors[name] && <p className="text-sm text-red-400 capitalize mt-1 pl-1">{errors[name]}</p>
            }
        </div>
    )
}

export default FormInput;