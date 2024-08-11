import Image from "next/image";
import OurWorksImage1 from "@/public/our-works/our-work-g-1.png";
import OurWorksImage2 from "@/public/our-works/our-work-g-2.png";
import OurWorksImage3 from "@/public/our-works/our-work-g-3.png";
import OurWorksImage4 from "@/public/our-works/our-work-g-4.png";

const ImagesModel = [OurWorksImage1, OurWorksImage2, OurWorksImage3];

const ImageItem = ({ image }) => {
    return (
        <div className="">
            <Image src={image} alt="Our works" />
        </div>
    );
};

const OurWorksSection = () => {
    return (
        <section className="lg:py-24 py-12 container">
            <div className="flex flex-col gap-12">
                <h1 className="text-primary">{"Наши работы"}</h1>
                <p className="text-secondary-700 lg:max-w-[60%] xl:max-w-[50%]">
                    {
                        "В этом разделе вы можете ознакомиться с некоторыми примерами наших работ. Здесь представлены проекты, выполненные для различных клиентов в разных областях деятельности."
                    }
                </p>
            </div>
            <div className="pt-12 flex flex-row lg:gap-10 gap-5 overflow-visible">
                {ImagesModel.map((image, index) => (
                    <ImageItem key={index} image={image} />
                ))}
            </div>
        </section>
    );
};

export default OurWorksSection;
