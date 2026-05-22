"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ locale }) {
    const pathname = usePathname();
    const router = useRouter();

    function changeLanguage(event) {
        const newLocale = event.target.value;
        const segments = pathname.split("/");

        if (segments[1] === "en" || segments[1] === "am") {
            segments[1] = newLocale;
            router.push(segments.join("/"));
        } else {
            router.push(`/${newLocale}`);
        }
    }

    return (
        <select
            value={locale}
            onChange={changeLanguage}
            className="text-sm border border-gray-300 rounded-md px-2 py-2 bg-white text-gray-700"
            aria-label="Select language"
        >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
        </select>
    );
}