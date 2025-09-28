import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const caviarDreams = localFont({
  src: [
    {
      path: './fonts/caviar_dreams_bold-webfont.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './fonts/caviardreams-webfont.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ],
  variable: '--font-caviar',
})

const poppins = Poppins({
  weight: ['200', '500'],
  subsets: ['latin'],
  variable: '--font-poppins',
})


export const metadata: Metadata = {
  title: "Avelo Jewelry",
  description: "Avelo Jewelry website porttfolio",
  icons: {
    icon: [
      { url: "/icon0.svg" },
      { url: "/icon1.png" },
    ],
    apple: {
      url: "/apple-icon.png",
    },
    shortcut: { url: "/favicon.ico" },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caviarDreams.variable} ${poppins.variable} font-caviar font-extralight antialiased`}>
        {children}
      </body>
    </html>
  );
}
