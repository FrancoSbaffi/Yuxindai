import localFont from "next/font/local";
import "./globals.css";

import Menu from "./components/Menu/Menu";

export const metadata = {
  title: "Daiyuxin | Business Analyst",
  description: "Bussiness Analyst and Data Analyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
