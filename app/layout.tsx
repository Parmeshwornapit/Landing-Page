import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free AI-Powered Marketing Plan | AI Marketing",
  description: "Book a free consultation and receive a customized AI-powered marketing plan for your business.",
  openGraph: { title: "Get Your Free AI-Powered Marketing Plan", description: "A clear, customized next step for growing your business online.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
