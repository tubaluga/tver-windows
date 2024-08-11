import Image from "next/image";
import LogoImage from "../../../public/logo.svg";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <Image src={LogoImage} alt="logo" width={137} height={32} />
        </Link>
    );
};

export default Logo;
