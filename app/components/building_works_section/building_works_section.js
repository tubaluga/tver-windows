import Button from "../button/button";
import BuildingImage from "@/public/building.png";
import Image from "next/image";

const Description = ({ header, text, second_text, superheader, href }) => {
    return (
        <div className="flex flex-col lg:gap-12 gap-6">
            <p className="h1_sup text-secondary-700">{superheader}</p>
            <h1 className="text-primary">{header}</h1>
            <div className="max-w-[508px]">
                <p className="text-primary">{text}</p>
                {second_text && <p className="text-primary pt-6">{second_text}</p>}
            </div>
            <div>
                <Button label="Подробнее" style={"lg:w-fit w-full"} />
            </div>
        </div>
    );
};

const BuildingWorksSection = () => {
    return (
        <section className="bg-primary lg:py-36 py-16 w-full">
            <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-6 lg:row-start-1 row-start-2 flex flex-col lg:gap-12 gap-6">
                    <p className="h1_sup text-secondary">{"Профессионализм, Гарантия качества"}</p>
                    <h1 className="text-background">{"Монтажные работы"}</h1>
                    <div className="max-w-[508px]">
                        <p className="text-background">
                            {
                                "Наша команда из опытных мастеров проведет работу быстро и аккуратно, минимизируя любые неудобства для вас. Позвольте нам превратить ваше пространство в уютное и светлое место."
                            }
                        </p>
                    </div>
                    <div>
                        <Button label="Консультация" style={"lg:w-fit w-full"} dark={true} />
                    </div>
                </div>
                <div className="lg:col-span-6 self-center row-start-1">
                    <Image
                        src={BuildingImage}
                        alt="image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BuildingWorksSection;
