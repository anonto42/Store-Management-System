import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Quiet chat",
  description: "Quiet-Chat is a secure chat application that never store your messages for your privacy and your all messages was hashed when it was sending to receivers.",
  openGraph:{
    images:{
      url:"/opengraph-image.jpg",
      width:400,
      height:400,
      alt:"Quiet chat app logo"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className} antialiased bg-[#0D1117]`}
      >
        <div className="body_container">
          {children}
        </div>
      </body>
    </html>
  );
}
