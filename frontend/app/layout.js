import "./globals.css";

export const metadata = {
  title: "Cut It Saloon | Premium Hair Salon",
  description: "Experience premium hair styling and grooming services at Cut It Saloon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <body className="overflow-x-hidden max-w-full" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>{children}</body>
    </html>
  );
}
