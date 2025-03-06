import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/nav/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sneha's Mini Projects",
  description: "Created by Sneha in SINGLE NIGHT (dunno why I did it)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(
          " bg-[#113946] text-[#EAD7BB] min-h-screen min-w-screen",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
