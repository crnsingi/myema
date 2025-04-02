import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Powerful Digital Transformation Services | Imenso Software",
  description: "We are a full stack technology consulting agency specializing in web & mobile application development, Data Analytics, Cloud and DevOps and Designing Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${montserrat.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
