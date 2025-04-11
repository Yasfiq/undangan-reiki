import './globals.css';

export const metadata = {
  title: 'Wedding Invitation - Muhammad Maulana Firdaus & Suci Maulida',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
