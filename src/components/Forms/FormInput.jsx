
const types = ['date', 'time', 'file'];

const FormInput = (props) => {
    const { label, id, className, icon, required = false, type = "text", errors, name, handleClear, formData, ...inputProps } = props;

    const moreInputProps = type !== 'file' ? { value: formData[name] } : {};

    return (
        <div className="flex flex-col py-4">
            <label htmlFor={id} className="">{label}{required && '*'}</label>
            <div className={`border relative rounded ${types.includes(type) ? 'w-max min-w-[12rem]' : 'w-full'} ${errors[name] ? 'border-red-500 shadow shadow-red-100' : 'border-[#888888]'}`}>
                {icon}
                <input
                    id={id}
                    required={required}
                    className={`rounded w-full outline-none p-2 ${className}`} name={name} type={type}
                    {...inputProps}
                    {...moreInputProps}
                />
                {
                    (type !== 'file' && formData[name]) && (
                        <div onClick={() => handleClear({ name, type, value: '', required })} className={`absolute  cursor-pointer bg-white top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 p-1 sm:w-8 sm:h-8 ${types.includes(type) ? '-right-10' : 'right-1'}`}>
                            <img src="/icons/close.svg" alt="" />
                        </div>
                    )
                }
            </div>
            {
                errors[name] && <p className="text-sm text-red-500 mt-1 pl-1">{errors[name]}</p>
            }
        </div>
    )
}

export default FormInput;