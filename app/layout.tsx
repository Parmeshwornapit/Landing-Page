import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://appointment.parmeshwornapit.com.np"),
  title: "Free AI-Powered Marketing Plan | Parmeshwar Napit",
  description: "Book a free consultation and receive a customized AI-powered marketing plan for your business.",
  alternates: { canonical: "/" },
  openGraph: { title: "Get Your Free AI-Powered Marketing Plan", description: "A clear, customized next step for growing your business online.", type: "website", url: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
