

const FormHeading = ({ title = 'Name of the Enquiry Form', description = 'One line description of the from' }) => {
    return (
        <div className="p-5 bg-[#1A8FE626] w-full">
            <h6 className="text-xl font-medium">{title}</h6>
            <p className="text-xs text-[#595959]">{description}</p>

            <p className="text-xs text-[#888888] mt-4">Provide the following information to progress your application</p>
        </div>
    )
}

export default FormHeading;