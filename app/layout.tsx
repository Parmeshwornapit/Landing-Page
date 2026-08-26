import type { Metadata } from "next";
import Script from "next/script";
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
  return <html lang="en"><body><Script id="meta-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1785234539297139');
fbq('track', 'PageView');`}</Script><noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1785234539297139&ev=PageView&noscript=1" alt="" /></noscript>{children}</body></html>;
}
