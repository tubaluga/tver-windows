import Constant from "@/app/lib/constant";
import Button from "../button/button";
import Logo from "../logo/logo";
import { TelegramLink, VKLink, WhatsappLink } from "../social/social_link";

const GeneralMenuModel = [
    {
        name: "Окна",
        link: "/windows",
    },
    {
        name: "Двери",
        link: "/doors",
    },
    {
        name: "Порталы",
        link: "/doors",
    },
    {
        name: "Балконы",
        link: "/balcony",
    },
];

const ServiceMenuModel = [
    {
        name: "Монтажные работы",
        link: "/windows",
    },
];

const FooterList = ({ header, items }) => {
    return (
        <div>
            <h4 className="text-primary pb-8">{header}</h4>
            <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                    <p key={index} className="text-primary">
                        {item.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="container ">
            <div className="pt-12 pb-6 border-t border-secondary-600">
                <div className="flex lg:flex-row flex-col gap-y-12 justify-between">
                    <div className="flex flex-col lg:justify-between lg:gap-y-0 gap-y-12">
                        <Logo />
                        <Button label={"Консультация"} style={"lg:max-w-fit max-w-full"} />
                    </div>
                    <FooterList header={"Меню"} items={GeneralMenuModel} />
                    <FooterList header={"Услуги и сервис"} items={ServiceMenuModel} />
                    <div>
                        <h4 className="text-primary pb-8">Контакты</h4>
                        <p className="text-primary lg:pb-8 pb-4">{Constant.contactPhoneNumber}</p>
                        <div className="flex flex-row gap-6">
                            <VKLink small={true} />
                            <WhatsappLink small={true} />
                            <TelegramLink small={true} />
                        </div>
                    </div>
                </div>
                <p className="pt-16 text-secondary-700 text-small text-center">{"Политика конфиденциальности"}</p>
                <p className="pt-4 text-secondary-700 text-small text-center">{`© ${currentYear} ${Constant.companyName}. Все права защищены`}</p>
            </div>
        </div>
    );
};

export default Footer;
