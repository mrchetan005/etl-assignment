
const FormTextarea = (props) => {
    const { label, id, className, icon, max, required = false, placeholder, type = "text", ...inputProps } = props;
    return (
        <div className="flex flex-col py-4">
            <label htmlFor={id} className="">{label}{required && '*'}</label>
            <div className={`border border-[#888888] rounded w-full relative`}>
                {icon && icon}
                <textarea id={id} className={`rounded resize-none h-16 w-full p-2 ${className}`} placeholder={placeholder} type={type} required={required} {...inputProps} />
            </div>
            <p className="text-[10px] text-right text-[#bababa]">{max} word limit</p>
        </div>
    )
}

export default FormTextarea;