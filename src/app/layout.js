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
  title: "Kotulpur | Discover Culture, Nature & Community",
  description:
    "Explore Kotulpur – a vibrant town rich in culture, history, and natural beauty. Stay updated with local news, events, and community services all in one place.",
  keywords:
    "Kotulpur, Kotulpur Bankura, Kotulpur tourism, Kotulpur culture, local news Kotulpur, Kotulpur community website",
  openGraph: {
    title: "Kotulpur | Discover Culture, Nature & Community",
    description:
      "Your gateway to Kotulpur – find local updates, cultural highlights, and explore the beauty of this historic town in Bankura.",
    url: "https://kotulpur-website.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://kotulpur-website.vercel.app/hero.png",
        width: 1200,
        height: 630,
        alt: "Kotulpur - Culture, Nature & Community",
      },
    ],
  },
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
