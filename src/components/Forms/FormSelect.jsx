import moment from "moment-timezone";


const FormSelect = (props) => {
    const { label, id, className, options, required = false, placeholder } = props;
    return (
        <div className="flex flex-col py-4">
            <label id={id} className="">{label}{required && '*'}</label>
            <select id={id} className="border truncate border-[#888888] rounded p-2">
                <option value="" className={`p-4 ${className}`}>{placeholder}</option>
                {
                    options?.map((value, i) => (
                        <option key={i} value={value} className="capitalize truncate">{id === 'timeZone' ? `${value} UTC${moment.tz(value).format('Z')}` : value}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default FormSelect;