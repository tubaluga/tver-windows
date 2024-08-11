import Image from "next/image";
import HeroDescription from "./description";
import HeroImage from "@/app/components/hero/hero_image";
import VKImage from "@/public/vk.svg";
import TelegramImage from "@/public/telegram.svg";
import WhatsappImage from "@/public/whatsapp.svg";
import Link from "next/link";
import Constant from "@/app/lib/constant";

const SocialLinks = () => {
    return (
        <div className="flex flex-row items-center gap-9">
            <div className="h-[2px] grow bg-secondary-600"></div>
            <div className="flex flex-row gap-9 items-center">
                <Link href={Constant.vkHref}>
                    <Image src={VKImage} alt="VK" width={24} height={24} />
                </Link>
                <Link href={Constant.whatsappHerf}>
                    <Image src={WhatsappImage} alt="Whatsapp" width={32} height={32} />
                </Link>
                <Link href={Constant.telegramHref}>
                    <Image src={TelegramImage} alt="Telegram" width={24} height={24} />
                </Link>
            </div>
            <div className="h-[2px] grow bg-secondary-600"></div>
        </div>
    );
};

const HeroSection = ({ header, subheader, text, chant, image }) => {
    return (
        <section className="container grid lg:grid-cols-12 grid-cols-1 lg:h-[720px]">
            <div className="flex flex-col justify-between lg:py-12 lg:col-span-5 lg:row-start-1 row-start-2">
                <div className="lg:max-w-[480px]">
                    <HeroDescription header={header} subheader={subheader} text={text} chant={chant} />
                </div>
                <div className="w-full lg:block hidden">
                    <SocialLinks />
                </div>
            </div>
            <div className="lg:col-span-7 pb-12">
                <HeroImage image={image} />
            </div>
        </section>
    );
};

export default HeroSection;
