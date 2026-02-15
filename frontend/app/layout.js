import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: "Cut It Saloon | Premium Hair Salon",
  description:
    "Experience premium hair styling and grooming services at Cut It Saloon",

    icons: {
      icon: [
        { url: "/images/cutit-favicon2.ico" },
        { url: "/images/cutit-favicon2-gold-32.png", sizes: "32x32", type: "image/png" },
        { url: "/images/cutit-favicon2-gold-16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/images/cutit-favicon2-gold-180.png", sizes: "180x180", type: "image/png" },
      ],
    },
    
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <body className="overflow-x-hidden max-w-full" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>{children}</body>
    </html>
  );
}
