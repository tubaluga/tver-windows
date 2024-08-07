const Button = ({ label, onClick }) => {
    return (
        <button
            className="py-[20px] px-[40px] hover:bg-secondary border-secondary-600 border text-primary tracking-wider uppercase text-[14px] font-medium track"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
