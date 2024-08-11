import ProductBenefits from "./product_benefits";
import PortalImage from "@/public/portal.png";

const BenefitModel = [
    {
        header: "Долговечность",
        text: "ПВХ и алюминий устойчивы к коррозии, перепадам температур и другим неблагоприятным воздействиям окружающей среды. Это обеспечивает долговечность конструкции.",
    },
    {
        header: "Устойчивость к влаге",
        text: "Материалы не подвержены коррозии и гниению, поэтому подходят для использования в помещениях с повышенной влажностью или на улице.",
    },
    {
        header: "Возможность изготовления конструкций различных размеров и форм",
        text: "Это позволяет подобрать оптимальное решение для любого интерьера или экстерьера.",
    },
];

const PortalDoorsBenefits = ({ dark }) => {
    return (
        <ProductBenefits
            header="Порталы"
            text={"Порталы — это конструкции, которые используются для оформления входных групп, окон и дверей."}
            image={PortalImage}
            items={BenefitModel}
            dark={dark}
        />
    );
};

export default PortalDoorsBenefits;
