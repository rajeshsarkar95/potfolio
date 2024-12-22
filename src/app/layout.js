import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nabvar/page";
import { AppProvider} from "./context/Appcontext";
import Footer from "./components/footer/page";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Rajesh Sarkar",
  description: "Rajesh Sarkar",
  icons: {
    icon: "/images/product.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body  className={` ${geistSans.variable} ${geistMono.variable}`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </AppProvider>
  );
}
