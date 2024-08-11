import ProductBenefits from "./product_benefits";
import BalconyImage from "@/public/balcony-b.png";

const BenefitModel = [
    {
        header: "Теплоизоляция",
        text: "Наши окна и двери обеспечивают отличную теплоизоляцию, что позволяет снизить расходы на отопление.",
    },
    {
        header: "Шумоизоляция",
        text: "Вы сможете наслаждаться тишиной и спокойствием в своём доме, даже если живёте рядом с оживлённой улицей.",
    },
    {
        header: "Защита от пыли и грязи",
        text: "Остекление балкона защитит ваше жильё от пыли, грязи и других внешних воздействий.",
    },
    {
        header: "Эстетичный внешний вид",
        text: "Наши конструкции выглядят современно и стильно, подчёркивая индивидуальность вашего дома.",
    },
];

const BalconyBenefits = ({ dark }) => {
    return (
        <ProductBenefits
            header="Преимущества остекления балконов"
            image={BalconyImage}
            items={BenefitModel}
            dark={dark}
        />
    );
};

export default BalconyBenefits;
