"use client";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ChatButton from "./components/chatboot";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 2. Pass both your RTL direction and the theme into ConfigProvider */}
        <AntdRegistry>
          <Header />
          {children}
           <Footer />
          <ChatButton />
        </AntdRegistry>
      </body>
    </html>
  );
}
