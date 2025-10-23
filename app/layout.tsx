import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "@/components/layout";
import { Loader } from "@/components/ui/Loader";

const caviarDreams = localFont({
  src: [
    {
      path: "./fonts/caviar_dreams_bold-webfont.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./fonts/caviardreams-webfont.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--font-caviar",
});

const poppins = Poppins({
  weight: ["200", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Avelo Jewelry",
  description: "Avelo Jewelry website portfolio",
  icons: {
    icon: [
      { url: "/icon0.svg" },
      { url: "/icon1.png" },
    ],
    apple: { url: "/apple-icon.png" },
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
      <head>
        {/* ✅ Add this to ensure consistent text scaling on mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>

      <body
        className={`${caviarDreams.variable} ${poppins.variable} background-texture text-foreground antialiased min-h-screen`}
        style={{ WebkitTextSizeAdjust: "100%" }} // ✅ Prevents iOS Safari text zooming
      >
        <Loader />
        <main className="font-caviar flex flex-col h-screen mx-auto min-w-[375px] max-w-[1440px]">
          <Header />
          <div id="webContent-container" className="responsive-margin flex-1 flex overflow-hidden">
            <Sidebar />
            <div id="mainContent-container" className="overflow-y-auto flex-1 lg:pr-5">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
