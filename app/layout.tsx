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
    <html lang="en">
      <body className="relative">
        <div className={styles.background}></div>
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}
