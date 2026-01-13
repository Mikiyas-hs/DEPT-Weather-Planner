import "./globals.css";
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
      <main>{children}</main>
    <Footer />
    </body>
    </html>
  );
}

