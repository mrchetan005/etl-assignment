
const FormTextarea = (props) => {
    const { label, id, className, icon, max, required = false, placeholder, type = "text", ...inputProps } = props;
    return ( 
        <div className="flex flex-col py-4">
            <label htmlFor={id} className="">{label}{required && '*'}</label>
            <div className={`border border-[#888888] rounded w-full h-full relative`}>
                {icon && icon}
                <textarea rows="3" id={id} className={`rounded resize-none w-full p-2  ${className}`} placeholder={placeholder} type={type} required={required} {...inputProps} ></textarea>
            </div>
            <p className="text-[10px] text-right text-[#bababa]">{max} word limit</p>
        </div>
    )
}

export default FormTextarea;