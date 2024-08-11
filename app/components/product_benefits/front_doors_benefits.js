import ProductBenefits from "./product_benefits";
import AlWindowImage from "@/public/front-doors.png";

const BenefitModel = [
    {
        header: "Стильный дизайн",
        text: "Входные двери ПВХ представлены в широком ассортименте цветов и текстур, чтобы вы могли выбрать идеальный вариант для своего интерьера.",
    },
    {
        header: "Надёжная конструкция",
        text: "Двери изготовлены из высококачественных материалов, которые обеспечивают долговечность и прочность конструкции.",
    },
    {
        header: "Тепло- и звукоизоляция",
        text: "Благодаря использованию современных технологий, входные двери ПВХ обеспечивают отличную теплоизоляцию и защиту от шума.",
    },
    {
        header: "Простота ухода",
        text: "Поверхность дверей легко очищается от загрязнений, сохраняя свой первоначальный вид на долгие годы.",
    },
];

const FrontDoorsBenefits = ({ dark }) => {
    return <ProductBenefits header="Входные двери" image={AlWindowImage} items={BenefitModel} dark={dark} />;
};

export default FrontDoorsBenefits;
