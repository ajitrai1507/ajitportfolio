import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajit Rai | Backend Developer Portfolio",
  description: "Portfolio of Ajit Rai, a Backend Developer experienced in Node.js, Express.js, NestJS, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
