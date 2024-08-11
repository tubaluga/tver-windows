const { default: Button } = require("../components/button/button");
import Image from "next/image";
import WarmGlazyngImage from "@/public/warm-glazyng.png";
import ColdGlazyngImage from "@/public/cold-glazyng.png";

const Description = ({ header, text, secondText }) => {
    return (
        <div className="flex flex-col justify-between">
            <div className="lg:max-w-[500px]">
                <h2 className="text-primary">{header}</h2>
                <p className="text-secondary-700 lg:pt-8 pt-6">{text}</p>
                {secondText}
            </div>
            <Button label={"Бесплатная консультация"} style={"lg:w-fit mt-8"} />
        </div>
    );
};

const GlazyngCard = ({ image, header, text, secondText }) => {
    return (
        <div className="flex lg:flex-row flex-col justify-between gap-8">
            <Image src={image} alt="image" />
            <Description header={header} text={text} secondText={secondText} />
        </div>
    );
};

const GlazyngCardReverse = ({ image, header, text, secondText }) => {
    return (
        <div className="flex lg:flex-row flex-col-reverse justify-between gap-8">
            <Description header={header} text={text} secondText={secondText} />
            <Image src={image} alt="image" />
        </div>
    );
};

export const WarmGlazing = () => {
    return (
        <GlazyngCard
            image={WarmGlazyngImage}
            header={"Тёплое остекление"}
            text={
                "Теплое остекление балконов — это установка окон с многокамерными стеклопакетами и профилем, который хорошо удерживает тепло."
            }
            secondText={
                <p className="text-secondary-700 pt-4">
                    Такое остекление помогает сделать балкон или лоджию частью жилого пространства и использовать их как
                    дополнительную комнату.
                </p>
            }
        />
    );
};

export const ColdGlazing = () => {
    return (
        <GlazyngCardReverse
            image={ColdGlazyngImage}
            header={"Холодное остекление"}
            text={
                "Холодное остекление балконов — это установка лёгкого алюминиевого профиля с одинарным стеклом. Оно защищает балкон от пыли, осадков и ветра, но не обеспечивает теплоизоляцию."
            }
            secondText={
                <div className="text-secondary-700 text-[16px]">
                    <p className="pt-4 pb-2">Преимущества:</p>
                    <ul className="list-disc list-inside">
                        <li>невысокая стоимость</li>
                        <li>
                            небольшой вес конструкции, что позволяет устанавливать её на балконах со слабым парапетом
                        </li>
                        <li>простота монтажа</li>
                        <li>долговечность</li>
                        <li>возможность установки раздвижных створок, которые экономят пространство</li>
                    </ul>
                </div>
            }
        />
    );
};
