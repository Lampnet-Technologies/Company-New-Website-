import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import BootstrapClient from "./component/BootstrapClient";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ReactQueryProvider from "./ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lampnets - Leading IT Solutions & Software Development Company",
  description:
    "LampNet Solutions is a remote-based agile IT Consulting & Mobile Technology Development company in West Africa, providing world-class solutions and mobile technologies for high business growth and digital transformation.",
  keywords:
    "IT Consulting, Mobile Technology Development, Mobile Application Development, Enterprise Solutions, Security, Cloud Technologies, Business Growth, Digital Transformation, Remote IT Services, West Africa IT Services, Software Development, Web Development, API Development, White Label Solutions",
  authors: [{ name: "LampNet Solutions", url: "https://lampnets.com" }],
  creator: "LampNet Solutions",
  metadataBase: new URL("https://lampnets.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lampnets.com",
    title: "Lampnets - Leading IT Solutions & Software Development Company",
    description:
      "Premier IT consulting and software development company offering world-class technology solutions for business growth",
    siteName: "Lampnets Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lampnets Solutions",
    description:
      "Premier IT consulting and software development company offering world-class technology solutions for business growth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    // Next will serve these from /public
    icon: "/favicon/icon.png",               // recommended root path
    shortcut: "/favicon/icon.png",
    apple: "/favicon/icon.png"          // keep your existing png inside public/favicon/
  }
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/Logo.svg" />
          <link rel="apple-touch-icon" href="/favicon/icon.png" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="canonical" href="https://lampnets.com" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          <BootstrapClient />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
