const fs = require('fs');
const path = require('path');

const files = [
    'src/app/[locale]/startup/recommendations/page.js',
    'src/app/[locale]/startup/project/documents/page.js',
    'src/app/[locale]/startup/project/create/page.js',
    'src/app/[locale]/startup/discover/profile/page.js',
    'src/app/[locale]/startup/discover/page.js',
    'src/app/[locale]/startup/discover/apply/page.js',
    'src/app/[locale]/startup/chat/page.js',
    'src/app/[locale]/startup/feedback/page.js',
    'src/app/[locale]/startup/mentorship/page.js',
    'src/app/[locale]/startup/project/page.js',
    'src/app/[locale]/startup/settings/page.js'
];

for (const file of files) {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf8');

    // Add import if missing
    if (!content.includes('import UserDropdown')) {
        content = content.replace(/(import [^\n]+;\n)(?!import)/, '$1import UserDropdown from "@/components/startup/UserDropdown";\n');
    }

    // Replace various profile block patterns
    // Pattern 1: Abebe Kebede
    const pattern1 = /<div className="flex items-center gap-3[^>]*?">\s*<div className="hidden sm:flex flex-col items-end">\s*<span className="text-xs font-bold text-gray-900">Abebe Kebede<\/span>\s*<span className="[^"]*">{t\.profile\.role}<\/span>\s*<\/div>\s*<div className="[^"]*">\s*AK\s*<\/div>\s*<\/div>/g;
    
    // Pattern 2: any profile with t.profile.company or t.profile.role
    const pattern2 = /<div className="flex items-center gap-3[^>]*?">\s*<div className="hidden sm:flex flex-col items-end">\s*<span className="[^"]*">(?:{t\.profile\.company}|Abebe Kebede|Menber Bareh)[^<]*<\/span>\s*<span className="[^"]*">{t\.profile\.role}<\/span>\s*<\/div>\s*<div className="[^"]*">\s*(?:<div[^>]*>)?(?:GT|AK|MB)(?:<\/div>)?\s*<\/div>\s*<\/div>/g;

    // Pattern 3: Menber Bareh
    const pattern3 = /<div className="flex items-center gap-3[^>]*?">\s*<div className="hidden sm:flex flex-col items-end">\s*<span className="text-xs font-bold text-gray-900">Menber Bareh<\/span>\s*<span className="[^"]*">{t\.profile\.role}<\/span>\s*<\/div>\s*<div className="[^"]*">\s*MB\s*<\/div>\s*<\/div>/g;

    // Pattern 4: any profile block matching standard HTML structure
    const pattern4 = /<div className="flex items-center gap-3(?: border-l border-gray-200 pl-[0-9]+)?(?: ml-auto)?">\s*<div className="hidden sm:flex flex-col items-end">\s*<span className="[^"]*">[^<]+<\/span>\s*<span className="[^"]*">{t\.profile\.role}<\/span>\s*<\/div>\s*<div className="[^"]*">\s*(?:<div[^>]*>)?(?:GT|AK|MB)(?:<\/div>)?\s*<\/div>\s*<\/div>/g;

    let modified = false;

    if (pattern4.test(content)) {
        content = content.replace(pattern4, `<UserDropdown company={t.profile?.company || "Company"} role={t.profile?.role} initials="GT" currentLocale={currentLocale} />`);
        modified = true;
    } else if (pattern2.test(content)) {
        content = content.replace(pattern2, `<UserDropdown company={t.profile?.company || "Company"} role={t.profile?.role} initials="GT" currentLocale={currentLocale} />`);
        modified = true;
    } else {
        // Broad search for anything that looks like a profile block
        const broadPattern = /<div className="flex items-center gap-3[^>]*">\s*<div className="hidden sm:flex flex-col items-end">[\s\S]*?<\/div>\s*<div className="w-[89] h-[89] rounded-full[^>]*>[\s\S]*?<\/div>\s*<\/div>/g;
        if (broadPattern.test(content)) {
            content = content.replace(broadPattern, `<UserDropdown company={t.profile?.company || "Company"} role={t.profile?.role} initials="GT" currentLocale={currentLocale} />`);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated profile block in ${file}`);
    } else {
        console.log(`No profile block found in ${file}`);
    }
}
