import { Navbar } from "../Sections/Navbar";
import { Main } from "@/Sections/Main";
import { Footer } from "@/Sections/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Main />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
