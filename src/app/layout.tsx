import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Ajit Rai — Backend Developer | Node.js & Scalable Systems",
  description:
    "1+ year of experience building scalable Node.js APIs, NestJS backends, and high-performance server architecture. Currently at Insueta Tech Pvt. Ltd., New Delhi.",
  keywords: "Ajit Rai, backend developer, Node.js, NestJS, Express, API, PostgreSQL, New Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
