import type { Metadata } from "next";
import "../app/globals.css";
import styles from "./styles/background.module.css";

export const metadata: Metadata = {
  title: "PromptTANK™",
  description: "AI Clarity for Leaders",
  generator: "PromptTANK™",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen bg-white dark:bg-gray-900">
        <div className={styles.background}></div>
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}
