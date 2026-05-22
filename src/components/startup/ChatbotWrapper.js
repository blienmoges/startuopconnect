"use client";

import { usePathname } from "next/navigation";
import Chatbot from "./Chatbot";

export default function ChatbotWrapper() {
  const pathname = usePathname();

  if (!pathname) return null;

  const isStartup = pathname.includes('/startup');
  const isFeedback = pathname.includes('/feedback');
  const isSettings = pathname.includes('/settings');
  const isRegister = pathname.includes('/register');

  if (isStartup && !isFeedback && !isSettings && !isRegister) {
    return <Chatbot startupId={1} />;
  }

  return null;
}
