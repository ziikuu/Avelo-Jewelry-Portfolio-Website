import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const CaviarDreams = localFont({
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
      <body
        className={`${CaviarDreams.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
