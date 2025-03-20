import type { Metadata } from "next";
import {Tajawal, Barlow_Semi_Condensed} from 'next/font/google';
import "./globals.css";

const tajawal = Tajawal({
  weight:"500",
  subsets: ['latin']
});

const barlow = Barlow_Semi_Condensed({
  weight:"500",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        {children}
      </body>
    </html>
  );
}
