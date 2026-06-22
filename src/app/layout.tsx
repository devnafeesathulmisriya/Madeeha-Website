import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madeeha Womens Virtual Academy | The Sweetness of Iman – Online Islamic Education for Women",
  description:
    "Join Madeeha Academy for live, interactive online Islamic education. Courses in Madh un Nabi, Madrasa and Islamic Dars designed for women worldwide.",
  keywords:
    "Islamic education women, online Quran classes, virtual madrasa, Islamic studies online, Quran for women, Islamic school , Madeeha Academy",
  openGraph: {
    title: "Madeeha Womens Virtual Academy | The Sweetness of Iman",
    description:
      "Live interactive Islamic education for women  across the globe.",
    type: "website",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
