import Image from "next/image";
import TopRatedSection from "./(home)/TopRatedSection/TopRatedSection";
import TopTending from "./(home)/TopTending/TopTending";
import TopGuiders from "./(home)/TopGuiders/TopGuiders";
import Testimonials from "./(home)/Testimonial/Testimonials";
import ShareHistory from "./(home)/ShareHistory/ShareHistory";
import Services from "./(home)/Services/Services";
import RegisterNow from "./(home)/RegisterNow/RegisterNow";
import HeroSection from "./(home)/HeroSection/HeroSection";
import Events from "./(home)/Events/Events";
import Counter from "./(home)/Counter/Counter";
export default function Home() {
    return (
        <main>
            <HeroSection />
            <Services />
            <TopRatedSection />
            <TopTending />
            <TopGuiders />
            <ShareHistory />
            <Events />
            <Counter />
            <RegisterNow />
            <Testimonials />
        </main>
    );
}
