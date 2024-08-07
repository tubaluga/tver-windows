import Image from "next/image";
import LogoImage from "../../../public/logo.svg";

const Logo = () => {
    return <Image src={LogoImage} alt="logo" width={137} height={32} />;
};

export default Logo;
