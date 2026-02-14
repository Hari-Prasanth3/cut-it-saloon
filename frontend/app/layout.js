import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Cut It Saloon | Premium Hair Salon",
  description: "Experience premium hair styling and grooming services at Cut It Saloon",
  openGraph: {
    title: "Cut It Saloon | Premium Hair Salon",
    description: "Experience premium hair styling and grooming services at Cut It Saloon",
    images: ["/images/cut-it-saloon-logo-removebg-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut It Saloon | Premium Hair Salon",
    description: "Experience premium hair styling and grooming services at Cut It Saloon",
    images: ["/images/cut-it-saloon-logo-removebg-preview.png"]
  },
  icons: {
    icon: ["/images/cut-it-saloon-logo-removebg-preview.png"]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <body className="overflow-x-hidden max-w-full" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>{children}</body>
    </html>
  );
}
