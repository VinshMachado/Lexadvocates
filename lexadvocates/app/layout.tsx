import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "../Mycomponents/Footer";
import Navbar from "@/Mycomponents/Navbar";
import MainAlert from "@/Mycomponents/MainAlert";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/Mycomponents/Mysidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ronel Lex Advocates",
  description: "Legal services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider open={false}>
          <AppSidebar />
          <main className="w-full">
            <MainAlert />
            <Navbar />

            {children}
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
