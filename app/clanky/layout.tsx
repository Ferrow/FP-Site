import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finančná Pevnosť",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <Navigation background="bg-slate-800" />
      {children}
    </div>
  );
}
