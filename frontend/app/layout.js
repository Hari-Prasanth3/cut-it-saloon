import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: "Cut It Salon & Spa | Hair Salon in Coimbatore",
  description:
    "Cut It Salon & Spa offers professional hair styling, spa, grooming and beauty services in Coimbatore. Book your appointment today.",


    icons: {
      icon: [
        { url: "/images/favicon.ico", sizes: "32x32", type: "image/png" },
        { url: "/images/favicon.ico", sizes: "16x16", type: "image/png" },
      ],
      apple: [
        { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
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
