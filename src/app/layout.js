import { Inter } from "next/font/google";

import localFont from 'next/font/local'

import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const ppneuebit = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueBit-Bold.otf',
      weight: '600'
    },
  ]
})

export const metadata = {
  title: "digmak",
  description: "go beyond the extraordinary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Black+Ops+One&family=Kode+Mono:wght@400..700&family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet" />
      </head>
      <body className={ppneuebit.className}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
