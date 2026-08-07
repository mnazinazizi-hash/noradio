import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container pb-24 md:pb-lg pt-lg mt-auto">
      <div className="w-full px-gutter flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="font-headline-md font-extrabold text-primary mb-md md:mb-0">
          NoRadio
        </div>
        <div className="flex flex-wrap justify-center gap-md mb-md md:mb-0">
          <Link
            href="#"
            className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Connect
          </Link>
          <Link
            href="#"
            className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            Archive
          </Link>
        </div>
        <div className="font-body-md text-on-surface-variant text-center md:text-right">
          © 2026 NoRadio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
