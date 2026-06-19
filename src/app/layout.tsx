import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhimavarapu Hruthwik Kharthikeya | Portfolio",
  description: "Portfolio of Bhimavarapu Hruthwik Kharthikeya, an electronics student and IoT developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
