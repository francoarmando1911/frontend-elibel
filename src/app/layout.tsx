import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elibel ecommerce",
  description: "Elibel ecommerce",

  icons: {
    icon: '/verde.png',
    apple: '/verde.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className}`}
      >
        {children}
      </body>
    </html>
  );
}
