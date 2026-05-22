import { Inter } from "next/font/google";
import "./globals.css";
import ChatbotWrapper from "@/components/startup/ChatbotWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StartupConnect Ethiopia",
  description: "Connecting Ethiopian Startups with Investors and Mentors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatbotWrapper />
      </body>
    </html>
  );
}
