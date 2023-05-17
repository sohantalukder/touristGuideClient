import Image from "next/image";
import TopRatedSection from "./(home)/TopRatedSection/TopRatedSection";
export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <TopRatedSection />
        </main>
    );
}
