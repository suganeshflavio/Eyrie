import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Team Eyrie — India's Integrated Professional Services Network | Chartered Accountants",
  description:
    "Team Eyrie is a premier multidisciplinary professional services network delivering integrated solutions across taxation, assurance, regulatory compliance, corporate advisory, transaction services, and strategic consulting.",
  keywords: [
    "Chartered Accountants",
    "Team Eyrie",
    "Tax Advisory India",
    "Statutory Audit",
    "NCLT Direct Tax Litigation",
    "GST Advisory",
    "Salem Hub CA",
    "New Delhi CA",
    "Chennai Bank Assurance",
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className="min-h-full flex flex-col antialiased bg-white text-slate-900 dark:bg-[#090D16] dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
