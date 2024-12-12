import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Sections/Footer";

export const metadata = {
  title: "BludFest",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-black text-white h-screen w-screen text-center  py-[20px]">
          <div className="container flex justify-center items-center h-full ">
            <p className="text-[20px] mt-[20px] font-Light uppercase">Soon.</p>
          </div>
        </div>
      </body>
    </html>
  );
}
