import Button from "../button/button";

const HiroDescription = ({ header, subheader, chant, onClick }) => {
    return (
        <div className="flex flex-col">
            <p className="text-secondary-700 h1_sup pb-16">{chant}</p>
            <h1>{header}</h1>
            <p className="text-regular text-secondary-700 pt-12">{subheader}</p>
            <div className="pt-16">
                <Button label="Заказать" onClick={onClick} />
            </div>
        </div>
    );
};

export default HiroDescription;
