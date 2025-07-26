import type { Metadata } from "next";
import "./globals.css";
import styles from "./styles/background.module.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="relative min-h-screen bg-white dark:bg-gray-900">
        <div className={styles.background}></div>
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}
