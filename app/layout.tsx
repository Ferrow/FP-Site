import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/google-analytics";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finančná Pevnosť",
  description: "Poskytujeme poradenstvo v oblasti investovania, úverov, poistenia a realít.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="scroll-smooth">
      <head>
      <link
        rel="icon"
        href="/logo_modre.ico"
        sizes="any"
      />

      <meta property="og:image" content="/logo_modre.png" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:image:alt" content="Poskytujeme poradenstvo v oblasti investovania, úverov, poistenia a realít." />

      <meta name="twitter:image" content="/logo_modre.png" />
      <meta name="twitter:image:width" content="256" />
      <meta name="twitter:image:height" content="256" />
      <meta name="twitter:image:alt" content="Poskytujeme poradenstvo v oblasti investovania, úverov, poistenia a realít." />


        <script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/68ef4f2058e127587c541af7/script.js"
          defer
        ></script>
      </head>
      <body className={`${inter.className}`}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
