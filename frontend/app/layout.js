import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: "Cut It Salon & Spa | Hair Salon in Coimbatore",
  description:
    "Cut It Salon & Spa offers professional hair styling, spa, grooming and beauty services in Coimbatore. Book your appointment today.",

  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon.png",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <body className="overflow-x-hidden max-w-full" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>{children}</body>
    </html>
  );
}
