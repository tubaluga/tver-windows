import Footer from "../components/footer/footer";
import HeroSection from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import BalconyImage from "@/public/balcony-header.png";
import BalconyBenefits from "../components/product_benefits/balcony_benefits";
import { ColdGlazing, WarmGlazing } from "./glazyng";
import { BalconyProfiles } from "../components/profiles/group_profiles";
import BuildingWorksSection from "../components/building_works_section/building_works_section";
import OurWorksSection from "../components/our_works_section/our_works_section";
import QuestionSection from "../components/question_section/question_section";

const BalcontyPage = () => {
    return (
        <main className="flex flex-col items-center justify-between">
            <Navbar />
            <HeroSection
                header={"Балконы и лоджии"}
                subheader={
                    "Хотите сделать свой балкон тёплым и уютным местом для отдыха? Мы предлагаем вам качественное остекление балконов по доступным ценам!"
                }
                text={"Установка точно в срок и с гарантией 7 лет."}
                chant={"тепло, уют и защита от непогоды"}
                image={BalconyImage}
            />
            <section className="bg-primary w-full lg:py-28 py-12 mt-12">
                <div className="container">
                    <BalconyBenefits dark={"true"} />
                </div>
            </section>
            <section className="container lg:pt-28 pt-12">
                <WarmGlazing />
            </section>
            <section className="container lg:py-28 py-12">
                <ColdGlazing />
            </section>
            <section className="container lg:pb-20 pb-12">
                <BalconyProfiles />
            </section>
            <BuildingWorksSection />
            <OurWorksSection />
            <QuestionSection />
            <Footer />
        </main>
    );
};

export default BalcontyPage;
