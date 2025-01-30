//core
import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
//styles
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "/fonts/Inter/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    { path: "/fonts/Inter/Inter-Regular.woff", weight: "400", style: "normal" },
    { path: "/fonts/Inter/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "/fonts/Inter/Inter-Medium.woff", weight: "500", style: "normal" },
    {
      path: "/fonts/Inter/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/Inter/Inter-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artworks List Application",
  description: "Create by @Denny_Age",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
};
export default RootLayout;
