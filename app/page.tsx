import { Navbar } from "../Sections/Navbar";
import { Hero } from "../Sections/Hero";
import { Footer } from "../Sections/Footer";
import { ChatWidget } from "../components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Footer />
      <ChatWidget />
    </main>
  );
}
