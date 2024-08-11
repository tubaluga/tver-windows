import Navbar from "./components/navbar/navbar";
import HeroSection from "@/app/components/hero/hero";
import HeroImage from "@/public/landing-hero.png";
import NumberSection from "./components/numbers_section/numbers_section";
import ProductSection, {
    BalconySection,
    DoorsSection,
    WindowsSection,
} from "./components/landing/product_section/product_section";
import BuildingWorksSection from "./components/building_works_section/building_works_section";
import OurWorksSection from "./components/our_works_section/our_works_section";
import QuestionSection from "./components/question_section/question_section";
import Footer from "./components/footer/footer";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between">
            <Navbar />
            <HeroSection
                header="Продажа пластиковых окон в Твери"
                subheader="Мы предлагаем широкий спектр услуг по производству, монтажу окон, дверей и балконов"
                chant="Современные решения для вашего дома"
                image={HeroImage}
            />
            <div className="w-full mt-12">
                <NumberSection />
            </div>
            <div className="container py-14 flex flex-col gap-24">
                <WindowsSection />
                <DoorsSection />
                <BalconySection />
            </div>
            <BuildingWorksSection />
            <OurWorksSection />
            <QuestionSection />
            <Footer />
        </main>
    );
}
