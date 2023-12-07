

const Button = ({ text, className = '', disabled = false, onClick }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`flex items-center justify-center p-1 min-w-[7rem] bg-[#1A8FE6] shadow-md active:scale-[0.97] rounded uppercase text-white disabled:opacity-75 disabled:cursor-no-drop ${className}`}>
            {text}
        </button>
    )
}

export default Button;