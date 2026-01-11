import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "UIU HealthCare",
  description: "A web application for United International University (UIU) to provide health services to students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            background-color: white !important;
          }
        `}</style>
      </head>
      <body className="bg-white text-black">
        <Navbar />
        <main className="container mx-auto px-4 py-8 bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
