import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "@/components/layout";

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
      <body className={`${caviarDreams.variable} ${poppins.variable} background-texture text-foreground antialiased`}>
        <main className="flex flex-col max-h-screen font-caviar font-extralights mx-auto max-w-[1440px]">
          <Header />
          <div id="webContent-container" className="responsive-margin flex h-full overflow-y-auto">
            <Sidebar />
            <div id="mainContent-container" className="overflow-y-auto flex-1 h-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
