import Image from "next/image";
import AlWindowImage from "@/public/al-windows.png";
import Button from "../components/button/button";

const AlWindowSection = () => {
    return (
        <section className="w-full bg-primary">
            <div className="container flex lg:flex-row flex-col-reverse justify-between lg:py-32 py-12 gap-16">
                <div className="lg:max-w-[500px]">
                    <p className="text-secondary h1_sup">{"стиль, надёжность и долговечность"}</p>
                    <h1 className="text-background pt-12">{"Алюминиевые окна"}</h1>
                    <p className="text-secondary pt-9">
                        {
                            "Ищете надёжные и долговечные окна, которые станут украшением вашего дома? Тогда алюминиевые окна — это то, что вам нужно!"
                        }
                    </p>
                    <p className="text-secondary pt-4">
                        {
                            "Алюминиевые окна обеспечивают отличную теплоизоляцию и звукоизоляцию, а также устойчивы к воздействию окружающей среды."
                        }
                    </p>
                    <Button label={"Заказать"} style={"w-fit mt-12"} dark={true} />
                </div>
                <div className="place-self-center justify-self-center">
                    <Image src={AlWindowImage} alt="Aluminum windows" />
                </div>
            </div>
        </section>
    );
};

export default AlWindowSection;
