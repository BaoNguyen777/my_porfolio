// ---------- app/layout.tsx ----------
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Cyber Portfolio",
  description: "Clone UI vonhi.vercel.app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-[#0b1117] text-slate-200 font-mono">{children}</body>
    </html>
  );
}