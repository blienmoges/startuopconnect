import "server-only";

const dictionaries = {
    en: () => import("./en.json").then((module) => module.default),
    am: () => import("./am.json").then((module) => module.default)
};

export async function getDictionary(locale) {
    return dictionaries[locale]?.() ?? dictionaries.en();
}