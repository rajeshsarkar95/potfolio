import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nabvar/page";
import { AppProvider} from "./context/Appcontext";
import Footer from "./components/footer/page";

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
