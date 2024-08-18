import OurWorksImage1 from "@/public/our-works/our-work-g-1.png";
import OurWorksImage2 from "@/public/our-works/our-work-g-2.png";
import OurWorksImage3 from "@/public/our-works/our-work-g-3.png";
import ImageCarousel from "../carousel/image_carousel";

const ImagesModel = [OurWorksImage1, OurWorksImage2, OurWorksImage3, OurWorksImage1, OurWorksImage2, OurWorksImage3];

const OurWorksSection = () => {
    return (
        <section className="pt-12 container">
            <div className="flex flex-col gap-12">
                <h1 className="text-primary">{"Наши работы"}</h1>
                <p className="text-secondary-700 lg:max-w-[60%] xl:max-w-[50%]">
                    {
                        "В этом разделе вы можете ознакомиться с некоторыми примерами наших работ. Здесь представлены проекты, выполненные для различных клиентов в разных областях деятельности."
                    }
                </p>
            </div>
            <div className="lg:pt-12 pt-8">
                <ImageCarousel images={ImagesModel} />
            </div>
        </section>
    );
};

export default OurWorksSection;
