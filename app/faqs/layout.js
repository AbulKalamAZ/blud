import Navbar from "@/components/Navbar";

export const metadata = {
  title: "BludFest",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="relative  max-w-[4000px] m-auto overflow-hidden bg-black text-white">
          <Navbar onShow />
          {children}
        </main>
      </body>
    </html>
  );
}
