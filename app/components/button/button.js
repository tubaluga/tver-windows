const Button = ({ label, onClick, style, dark }) => {
    const additionStyle = dark ? "text-background hover:text-primary" : "text-primary";

    return (
        <button
            className={`py-[20px] px-[40px] hover:bg-secondary border-secondary-600 ${additionStyle} border tracking-wider uppercase text-[14px] font-medium track ${style}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
