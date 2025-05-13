import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import Popup from "@/components/PopUp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "suryansh Blog-app",
  description: "Blog App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="container">
            <Navbar />
            <Popup/>
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
