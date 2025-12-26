import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vocabulary Quest",
  description: "A fun daily vocabulary adventure!",
};

import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { AuthGuard } from "@/components/auth/AuthGuard";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          nunito.className,
          "antialiased min-h-screen flex flex-col md:flex-row bg-slate-50"
        )}
      >
        <AuthGuard>
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
              {children}
            </main>
          </div>
        </AuthGuard>
      </body>
    </html>
  );
}
