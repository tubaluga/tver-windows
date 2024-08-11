import Footer from "../components/footer/footer";
import HeroSection from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import WindowsImage from "@/public/windows/hero.png";
import PlasticWindowsBenefits from "../components/product_benefits/plastic_windows_benefits";
import PlasticWindowsProfileList from "../components/profiles/plastic_windows_profile_list";
import AlWindowSection from "./al_window_section";
import AlWindowsBenefits from "../components/product_benefits/al_windows_benefits";
import AlWindowsProfileList from "../components/profiles/al_windows_profile_list";
import BuildingWorksSection from "../components/building_works_section/building_works_section";
import OurWorksSection from "../components/our_works_section/our_works_section";
import QuestionSection from "../components/question_section/question_section";

const WindowsPage = () => {
    return (
        <main className="flex flex-col items-center justify-between">
            <Navbar />
            <HeroSection
                header="Пластиковые окна"
                subheader="Наши пластиковые окна изготовлены из высококачественных материалов и соответствуют всем стандартам качества."
                text={"Установка точно в срок и с гарантией 7 лет."}
                chant="тепло и уют в вашем доме"
                image={WindowsImage}
            />
            <section className="bg-primary w-full lg:py-28 py-12 mt-12">
                <div className="container">
                    <PlasticWindowsBenefits dark={true} />
                </div>
            </section>
            <section className="container py-24">
                <PlasticWindowsProfileList />
            </section>
            <AlWindowSection />
            <section className="bg-secondary w-full lg:py-28 py-12">
                <div className="container">
                    <AlWindowsBenefits />
                </div>
            </section>
            <section className="container py-24">
                <AlWindowsProfileList />
            </section>
            <BuildingWorksSection />
            <OurWorksSection />
            <QuestionSection />

            <Footer />
        </main>
    );
};

export default WindowsPage;
