import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Peak Life Performance",
  description: "Science-backed hormone replacement therapy for men.",
  icons: {
    icon: "/peak-logo.jpg",
  },
  openGraph: {
    title: "Peak Life Performance",
    description: "Science-backed hormone replacement therapy for men.",
    images: ["/peak-logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peak Life Performance",
    description: "Science-backed hormone replacement therapy for men.",
    images: ["/peak-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}