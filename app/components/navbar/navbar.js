"use client";

import Constant from "@/app/lib/constant";
import Logo from "../logo/logo";
import MenuImage from "@/public/menu.svg";
import CloseImage from "@/public/close.svg";
import CallImage from "@/public/call_fill.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
    {
        name: "Окна",
        link: "/windows",
    },
    {
        name: "Двери и порталы",
        link: "/doors",
    },
    {
        name: "Балконы",
        link: "/balcony",
    },
];

const MenuItem = ({ name, link }) => {
    return (
        <div className="uppercase py-3 hover:bg-secondary">
            <Link href={link}>
                <p>{name}</p>
            </Link>
        </div>
    );
};

const Menu = () => {
    return (
        <div className="w-full bg-background z-10">
            <div className="flex flex-col gap-0 divide-y divide-secondary border-b border-secondary">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} name={item.name} link={item.link} />
                ))}
                <div className="py-4 flex flex-row gap-2">
                    <Image src={CallImage} alt="call" width={24} height={24} />
                    <p className="font-semibold ">{Constant.contactPhoneNumber}</p>
                </div>
            </div>
        </div>
    );
};

const HamburgerMenuButton = ({ onClick, isOpen }) => {
    return (
        <button onClick={onClick}>
            <Image src={isOpen ? CloseImage : MenuImage} alt="menu" width={24} height={24} />
        </button>
    );
};

const NavbarLarge = () => {
    return (
        <nav className="w-full h-[124px] flex flex-row items-center justify-between color-primary text-[16px] font-medium">
            <div className="flex flex-row gap-16 items-center">
                <Logo />
                <div className="flex flex-row gap-14 uppercase">
                    {menuItems.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <p>{item.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div>
                <p className="font-semibold ">{Constant.contactPhoneNumber}</p>
            </div>
        </nav>
    );
};

const NavbarSmall = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            <nav className="h-24 flex flex-row items-center justify-between color-primary text-[16px] font-medium">
                <Logo />
                <HamburgerMenuButton isOpen={isOpen} onClick={handleClick} />
            </nav>
            {isOpen && <Menu />}
        </div>
    );
};

export default function Navbar() {
    return (
        <div className="container">
            <div className="hidden lg:block">
                <NavbarLarge />
            </div>
            <div className="block lg:hidden mb-4">
                <NavbarSmall />
            </div>
        </div>
    );
}
