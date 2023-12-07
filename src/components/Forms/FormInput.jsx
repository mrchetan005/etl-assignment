
const types = ['date', 'time']

const FormInput = (props) => {
    const { label, id, className, icon, required = false, placeholder, type = "text", ...inputProps } = props;
    return (
        <div className="flex flex-col py-4">
            <label htmlFor={id} className="">{label}{required && '*'}</label>
            <div className={`border border-[#888888] rounded ${types.includes(type) ? 'w-max min-w-[12rem]' : 'w-full'}`}>
                {icon}
                <input id={id} className={`rounded w-full p-2 ${className}`} placeholder={placeholder} type={type} required={required} {...inputProps} />
            </div>
        </div>
    )
}

export default FormInput;