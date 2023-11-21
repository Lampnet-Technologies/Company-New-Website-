import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
// import "./globals.css";
import BootstrapClient from "./component/BootstrapClient";
import Navbar from "@/app/component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ReactQueryProvider from "./ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lampnets",
  description:
    "LampNet Solutions is a remote-based agile IT Consulting & Mobile Technology Development company in West Africa, who are service providers of world-class solutions and mobile technologies for high business growth and transformation with vast experience in Mobile Application Development, Enterprise solutions, Security and Cloud based technologies. ",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
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
