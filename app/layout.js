import Google from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Sections/Footer";
import "./globals.css";

export const metadata = {
  title: "BludFest",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Google />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
