import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sail Experience Club | Experiencias no mar pelo Brasil",
  description: "Descubra experiencias nauticas premium em destinos incriveis pelo Brasil."
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
