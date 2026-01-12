import "./globals.css";
import "../components/Hero/hero.css";
import "../components/Weather/weather.css";
import "../components/Things-to-do/things.css"
import "../components/Footer/footer.css"
import Hero from "@/components/Hero/hero";
import Footer from "@/components/Footer/footer";
export const metadata = {
  title: "DEPT® Weather Planner",
  description:
    "A smart weather planner that helps you choose the best activities based on current and forecasted weather conditions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header><Hero /></header>
      <main>{children}</main>
    <Footer />
    </body>
    </html>
  );
}

