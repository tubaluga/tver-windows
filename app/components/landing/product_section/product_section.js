"use client";

import Image from "next/image";
import WindowImage from "@/public/window_landing.png";
import WindowGaleryImage1 from "@/public/landing/windows-g-1.png";
import WindowGaleryImage2 from "@/public/landing/windows-g-2.png";
import WindowGaleryImage3 from "@/public/landing/windows-g-3.png";
import DoorsImage from "@/public/landing/doors.png";
import DoorsGaleryImage1 from "@/public/landing/doors-g-1.png";
import DoorsGaleryImage2 from "@/public/landing/doors-g-2.png";
import DoorsGaleryImage3 from "@/public/landing/doors-g-3.png";
import BalconyImage from "@/public/landing/balcony.png";
import BalconyGaleryImage1 from "@/public/landing/balcony-g-1.png";
import BalconyGaleryImage2 from "@/public/landing/balcony-g-2.png";
import BalconyGaleryImage3 from "@/public/landing/balcony-g-3.png";
import Button from "../../button/button";
import { useRouter } from "next/navigation";

const ProductImage = ({ image }) => {
    return (
        <div className="w-[619px] h-[672px] bg-secondary">
            <Image src={image} alt="image" width={800} height={800} />
        </div>
    );
};

const Description = ({ header, text, second_text, superheader, href }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(href);
    };

    return (
        <div className="flex flex-col lg:gap-12 gap-6">
            <p className="h1_sup text-secondary-700">{superheader}</p>
            <h1 className="text-primary">{header}</h1>
            <div className="max-w-[508px]">
                <p className="text-primary">{text}</p>
                {second_text && <p className="text-primary pt-6">{second_text}</p>}
            </div>
            <div>
                <Button label="Подробнее" style={"lg:w-fit w-full"} onClick={handleClick} />
            </div>
        </div>
    );
};

const PhotoGalery = ({ images }) => {
    return (
        <div className="flex flex-row justify-between gap-10 overflow-auto ">
            {images.map((image, index) => (
                <Image key={index} src={image} alt="image" width={399} height={386} />
            ))}
        </div>
    );
};

const ProductSection = ({ image, header, text, second_text, superheader, href, images }) => {
    return (
        <section>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 lg:pb-20 pb-12">
                <div className="place-self-center lg:col-span-6">
                    <Image src={image} alt="image" width={619} height={672} />
                </div>
                <div className="lg:col-span-5 lg:col-start-8 lg:pt-12">
                    <Description
                        header={header}
                        text={text}
                        second_text={second_text}
                        superheader={superheader}
                        href={href}
                    />
                </div>
            </div>
            <PhotoGalery images={images} />
        </section>
    );
};

const ProductSectionInvert = ({ image, header, text, second_text, superheader, href, images }) => {
    return (
        <section>
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-10 lg:pb-20 pb-12">
                <div className="lg:col-span-5 lg:pt-12 lg:row-start-1 row-start-2">
                    <Description
                        header={header}
                        text={text}
                        second_text={second_text}
                        superheader={superheader}
                        href={href}
                    />
                </div>
                <div className="place-self-center lg:col-span-6 lg:col-start-7 row-start-1">
                    <Image src={image} alt="image" width={619} height={672} />
                </div>
            </div>
            <PhotoGalery images={images} />
        </section>
    );
};

export const WindowsSection = () => {
    return (
        <ProductSection
            image={WindowImage}
            header="Окна из ПВХ и алюминия"
            text={
                "Наши окна сочетают в себе стиль, прочность и функциональность. Они изготовлены из высококачественных материалов и соответствуют всем стандартам качества."
            }
            second_text={
                "Окна из ПВХ обеспечивают отличную теплоизоляцию и звукоизоляцию, а алюминиевые окна устойчивы к воздействию окружающей среды. Благодаря своей конструкции они не требуют особого ухода и легко моются."
            }
            superheader={"Тепло и уют в вашем доме"}
            images={[WindowGaleryImage1, WindowGaleryImage2, WindowGaleryImage3]}
            href={"/windows"}
        />
    );
};

export const DoorsSection = () => {
    return (
        <ProductSectionInvert
            image={DoorsImage}
            header="Двери и порталы"
            text={
                "Двери и порталы из ПВХ и алюминия — это современные конструкции, которые сочетают в себе прочность, долговечность и эстетичный внешний вид. Они могут быть использованы как для внутренних, так и для наружных помещений."
            }
            second_text={
                "Конструкции могут иметь различные размеры и формы, включая раздвижные, распашные и маятниковые двери, а также порталы с остеклением. Это позволяет выбрать оптимальный вариант для каждого конкретного случая."
            }
            superheader={"стиль, надёжность и долговечность"}
            images={[DoorsGaleryImage1, DoorsGaleryImage2, DoorsGaleryImage3]}
            href={"/doors"}
        />
    );
};

export const BalconySection = () => {
    return (
        <ProductSection
            image={BalconyImage}
            header="Балконы и лоджии"
            text={
                "Мы предлагаем широкий выбор вариантов остекления балконов, чтобы удовлетворить любые потребности и бюджет."
            }
            second_text={
                "Наши специалисты помогут выбрать оптимальный вариант, учитывая ваши пожелания и особенности конструкции балкона."
            }
            superheader={"тепло, уют и защита от непогоды"}
            images={[BalconyGaleryImage1, BalconyGaleryImage2, BalconyGaleryImage3]}
            href={"/balcony"}
        />
    );
};

export default ProductSection;
