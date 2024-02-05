import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "./components/BottomNav";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Link href="/back">go forward</Link>
        <BottomNav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
