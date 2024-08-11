import Footer from "../components/footer/footer";
import HeroSection from "../components/hero/hero";
import Navbar from "../components/navbar/navbar";
import DoorsLandingImage from "@/public/doors-landing.png";
import FrontDoorsBenefits from "../components/product_benefits/front_doors_benefits";
import { FrontDoorProfiles, InteriorDoorProfiles, PortalDoorProfiles } from "../components/profiles/group_profiles";
import InteriorDoorsBenefits from "../components/product_benefits/interior_doors_benefits";
import PortalDoorsBenefits from "../components/product_benefits/portal_doors_benefits";
import BuildingWorksSection from "../components/building_works_section/building_works_section";
import OurWorksSection from "../components/our_works_section/our_works_section";
import QuestionSection from "../components/question_section/question_section";

const DoorsPage = () => {
    return (
        <main className="flex flex-col items-center justify-between">
            <Navbar />
            <HeroSection
                header={"Двери и порталы"}
                subheader={
                    "Двери и порталы из ПВХ и алюминия — это современные конструкции, которые сочетают в себе прочность, долговечность и эстетичный внешний вид. Они могут быть использованы как для внутренних, так и для наружных помещений."
                }
                text={"Установка точно в срок и с гарантией 7 лет."}
                chant={"стиль, надёжность и долговечность"}
                image={DoorsLandingImage}
            />
            <section className="bg-primary w-full lg:py-28 py-12 mt-12">
                <div className="container">
                    <FrontDoorsBenefits dark={"true"} />
                </div>
            </section>
            <section className="container lg:py-20 py-12">
                <FrontDoorProfiles />
            </section>
            <section className="bg-secondary w-full lg:py-28 py-12">
                <div className="container">
                    <InteriorDoorsBenefits />
                </div>
            </section>
            <section className="container lg:py-20 py-12">
                <InteriorDoorProfiles />
            </section>
            <section className="bg-secondary w-full lg:py-28 py-12">
                <div className="container">
                    <PortalDoorsBenefits />
                </div>
            </section>
            <section className="container lg:py-20 py-12">
                <PortalDoorProfiles />
            </section>
            <BuildingWorksSection />
            <OurWorksSection />
            <QuestionSection />
            <Footer />
        </main>
    );
};

export default DoorsPage;
