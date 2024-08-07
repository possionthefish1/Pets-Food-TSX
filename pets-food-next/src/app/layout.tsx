import type { Metadata } from "next";
import { Bree_Serif, Ubuntu_Mono, Lemon } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

// import { SignInModal } from '../SignInModal';
import { Providers } from './providers'

const bree = Bree_Serif({ subsets: ["latin"], weight: '400', display: "swap", variable:'--font-bree-serif'});

const lemon = Lemon({ subsets: ["latin"], weight: '400', display: "swap", variable:'--font-lemon'});

const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: '400', display: "swap", variable:'--font-ubuntu-mono'});

export const metadata: Metadata = {
  title: "Pet's Food",
  description: "Cats and Dogs Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
      <body className={`${ubuntuMono.variable} ${bree.variable} ${lemon.variable}`}> 
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
      </head>
    </html>
  );
}

