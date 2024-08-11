import Button from "../button/button";

const HiroDescription = ({ header, subheader, chant, text, onClick }) => {
    return (
        <div className="flex flex-col">
            <p className="text-secondary-700 h1_sup lg:pb-16 pb-8">{chant}</p>
            <h1>{header}</h1>
            <div className="pt-12 max-w-96">
                <p className="text-regular text-secondary-700">{subheader}</p>
                {text && <p className="text-regular text-secondary-700 pt-6"> {text}</p>}
            </div>
            <Button label="Заказать" style={"lg:mt-16 mt-8 lg:w-fit w-full"} onClick={onClick} />
        </div>
    );
};

export default HiroDescription;
