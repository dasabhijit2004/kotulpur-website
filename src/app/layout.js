import { Ubuntu } from "next/font/google";
import "./globals.css";

// Load Ubuntu font
const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Kotulpur - The Gem of Bankura",
  description: "Visit Kotulpur, the heart of Bankura, West Bengal. Learn about its culture, festivals, historical sites, and breathtaking natural beauty. Perfect for travelers seeking offbeat Bengal destinations.",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${ubuntu.className}`}>
        {children}
      </body>
    </html>
  );
}
