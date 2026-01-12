import "./globals.css";
import "../components/Hero/hero.css";

export const metadata = {
  title: "DEPT® Weather Planner",
  description:
    "A smart weather planner that helps you choose the best activities based on current and forecasted weather conditions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

