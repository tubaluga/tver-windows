import Image from "next/image";
import OurWorksImage1 from "@/public/our-works/our-work-g-1.png";
import OurWorksImage2 from "@/public/our-works/our-work-g-2.png";
import OurWorksImage3 from "@/public/our-works/our-work-g-3.png";

const ImagesModel = [OurWorksImage1, OurWorksImage2, OurWorksImage3, OurWorksImage1, OurWorksImage2, OurWorksImage3];

const ImageItem = ({ image }) => {
    return <Image src={image} alt="Our works" width={399} height={399} />;
};

const OurWorksSection = () => {
    return (
        <section className="py-12 container">
            <div className="flex flex-col gap-12">
                <h1 className="text-primary">{"Наши работы"}</h1>
                <p className="text-secondary-700 lg:max-w-[60%] xl:max-w-[50%]">
                    {
                        "В этом разделе вы можете ознакомиться с некоторыми примерами наших работ. Здесь представлены проекты, выполненные для различных клиентов в разных областях деятельности."
                    }
                </p>
            </div>
            {/*<div className="pt-12 flex flex-wrap lg:gap-10 gap-5 justify-between">*/}
            <div className="pt-12 flex flex-row justify-between gap-10 overflow-auto ">
                {ImagesModel.map((image, index) => (
                    <ImageItem key={index} image={image} />
                ))}
            </div>
        </section>
    );
};

export default OurWorksSection;
