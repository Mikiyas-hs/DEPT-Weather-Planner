import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Image
        className="footer__logo"
        src="https://dept-frontend-case.deptagency.com/logo/dept.svg"
        alt="Dept logo"
        width={96}
        height={32}
      />
    </footer>
  );
}
