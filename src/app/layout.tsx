import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sail Experience Club | Experiências no mar pelo Brasil",
  description: "Descubra experiências náuticas premium em destinos incríveis pelo Brasil."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
