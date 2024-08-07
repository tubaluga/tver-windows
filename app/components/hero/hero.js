import HeroDescription from "./description";
import HeroImage from "@/app/components/hero/hero_image";

const HeroSection = ({ header, subheader, chant, image }) => {
    return (
        <section className="flex lg:flex-row flex-col-reverse justify-between">
            <div className="py-12 max-w-[480px]">
                <HeroDescription header={header} subheader={subheader} chant={chant} />
            </div>
            <HeroImage image={image} />
        </section>
    );
};

export default HeroSection;
