import ProductBenefits from "./product_benefits";
import PlasticWindowImage from "@/public/windows/plastic-window.png";

const BenefitModel = [
    {
        header: "Теплоизоляция",
        text: "Пластиковые окна обеспечивают отличную теплоизоляцию, что позволяет снизить затраты на отопление и создать комфортный микроклимат в помещении.",
    },
    {
        header: "Звукоизоляция",
        text: "Качественные пластиковые окна также обладают хорошей звукоизоляцией, которая помогает снизить уровень шума с улицы и обеспечить тишину в доме.",
    },
    {
        header: "Долговечность",
        text: "При правильном уходе и эксплуатации пластиковые окна могут прослужить долгие годы, не теряя своих свойств и внешнего вида.",
    },
    {
        header: "Простота ухода",
        text: "Окна из ПВХ легко моются и не требуют особого ухода, что делает их практичными в использовании.",
    },
];

const PlasticWindowsBenefits = ({ dark }) => {
    return (
        <ProductBenefits
            header="Преимущества пластиковых окон"
            image={PlasticWindowImage}
            items={BenefitModel}
            dark={dark}
        />
    );
};

export default PlasticWindowsBenefits;
