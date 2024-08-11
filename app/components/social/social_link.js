import Image from "next/image";
import Link from "next/link";
import VKImage from "@/public/vk.svg";
import TelegramImage from "@/public/telegram.svg";
import WhatsappImage from "@/public/whatsapp.svg";
import Constant from "@/app/lib/constant";

const SocialLink = ({ image, link, small }) => {
    const size = small ? 24 : 32;

    return (
        <Link href={link} target="_blank" rel="noreferrer">
            <Image src={image} alt="Social link" width={size} height={size} />
        </Link>
    );
};

export const VKLink = (small) => {
    return <SocialLink image={VKImage} link={Constant.vkHref} small={small} />;
};

export const WhatsappLink = (small) => {
    return <SocialLink image={WhatsappImage} link={Constant.whatsappHerf} small={small} />;
};

export const TelegramLink = (small) => {
    return <SocialLink image={TelegramImage} link={Constant.telegramHref} small={small} />;
};

export default SocialLink;
