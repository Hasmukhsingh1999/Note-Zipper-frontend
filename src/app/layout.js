import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Headers from "@/components/Header/Header";
import Wrapper from "@/containers/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notes-Zipper ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <main>
          <Wrapper>{children}</Wrapper>
        </main>
      </body>
    </html>
  );
}
