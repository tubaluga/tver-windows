import Navbar from "./components/navbar/navbar";
import HeroSection from "@/app/components/hero/hero";
import HeroImage from "@/public/landing-hero.png";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between">
            <div className="container">
                <Navbar />
                <HeroSection
                    header="Продажа и установка пластиковых окон в Твери"
                    subheader="Мы предлагаем широкий спектр услуг по производству, монтажу окон, дверей и балконов"
                    chant="Современные решения для вашего дома"
                    image={HeroImage}
                />
            </div>
        </main>
    );
}
