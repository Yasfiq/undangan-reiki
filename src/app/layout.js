import "./globals.css";

export const metadata = {
  title: "Wedding Invitation - Reiki & Irma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
