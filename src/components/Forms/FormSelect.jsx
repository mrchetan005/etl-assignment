import moment from "moment-timezone";


const FormSelect = (props) => {
    const { label, id, className, options, name, required = false, placeholder, errors, onBlur, onChange, formData, handleClear } = props;
    return (
        <div className="flex flex-col py-4 ">
            <label id={id} className="">{label}{required && '*'}</label>
            <div className="relative">
                <select value={formData[name]} onBlur={onBlur} onChange={onChange} id={id} name={name} className={`border outline-none w-full truncate rounded p-2 relative ${errors[name] ? 'border-red-500 shadow shadow-red-100' : 'border-[#888888]'}`}>
                    <option value="" className={`p-4 ${className}`}>{placeholder}</option>
                    {
                        options?.map((value, i) => (
                            <option
                                key={i}
                                value={value}
                                className="capitalize truncate"
                            >
                                {name === 'timeZone' ? `${value} UTC${moment.tz(value).format('Z')}` : value}
                            </option>
                        ))
                    }
                </select>
                {
                    formData[name] && <div onClick={() => handleClear({ name, value: '', required })} className={`absolute right-1 top-1/2 cursor-pointer -translate-y-1/2 flex items-center justify-center w-6 h-6 p-1 sm:w-8 sm:h-8 bg-white`}>
                        <img src="/icons/close.svg" alt="" />
                    </div>
                }
            </div>
            {
                errors[name] && <p className="text-sm text-red-500 mt-1 pl-1">{errors[name]}</p>
            }
        </div>
    )
}

export default FormSelect;