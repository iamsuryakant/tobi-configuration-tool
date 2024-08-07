import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
// import Navbar from "@/components/Header/header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Configuration Tool",
  description: "Tobi Configuration Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Header />
        <div className='grid min-h-screen w-full md:grid-cols-[190px_1fr] lg:grid-cols-[250px_1fr]'>
          <Sidebar />
          <main className='flex-1'>{children}</main>
        </div>
      </body>
    </html>
  );
}
