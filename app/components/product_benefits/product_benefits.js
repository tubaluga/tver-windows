import Image from "next/image";

const ProductBenefitItem = ({ header, text }) => {
    return (
        <div>
            <p className="h1_sup">{header}</p>
            <p className="pt-6">{text}</p>
        </div>
    );
};

const ProductBenefitsDescription = ({ header, subheader, items, dark }) => {
    const textStyle = dark ? "text-background" : "text-primary";
    return (
        <div className={textStyle}>
            <h1>{header}</h1>
            {subheader && <p className="pt-12">{subheader}</p>}
            <div className="lg:pt-20 pt-10 flex flex-col gap-12">
                {items.map((item, index) => (
                    <ProductBenefitItem key={index} header={item.header} text={item.text} />
                ))}
            </div>
        </div>
    );
};

const ProductBenefits = ({ header, subheader, items, image, dark }) => {
    return (
        <div className="flex lg:flex-row flex-col-reverse justify-between gap-10">
            <div className="max-w-[540px]">
                <ProductBenefitsDescription header={header} subheader={subheader} items={items} dark={dark} />
            </div>
            <div className="justify-self-end place-self-center ">
                <Image src={image} alt="Product image" />
            </div>
        </div>
    );
};

export const ProductBenefitsReverse = ({ header, subheader, items, image, dark }) => {
    return (
        <div className="flex lg:flex-row flex-col justify-between gap-10">
            <div className="justify-self-end place-self-center ">
                <Image src={image} alt="Product image" />
            </div>
            <div className="max-w-[540px]">
                <ProductBenefitsDescription header={header} subheader={subheader} items={items} dark={dark} />
            </div>
        </div>
    );
};

export default ProductBenefits;
