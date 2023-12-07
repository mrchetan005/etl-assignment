

const Button = ({ text, className = '', disabled = false, onClick }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`py-1 px-8 bg-[#1A8FE6] shadow rounded uppercase text-white disabled:opacity-75 disabled:cursor-no-drop ${className}`}>
            {text}
        </button>
    )
}

export default Button;