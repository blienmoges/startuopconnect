const fs = require('fs');
const path = require('path');

function findPageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.js') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const investorDir = path.join(__dirname, 'src', 'app', 'investor');
const pageFiles = findPageFiles(investorDir);

for (const filePath of pageFiles) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Add import if missing
    if (!content.includes('import UserDropdown')) {
        content = content.replace(/(import [^\n]+;\n)(?!import)/, '$1import UserDropdown from "@/components/investor/UserDropdown";\n');
    }

    const replacement = `<div className="ml-4"><UserDropdown company="Abebe Tekle" role="Angel Investor" initials="AT" /></div>`;

    let modified = false;

    // Pattern 1: settings/page.js
    const settingsPattern = /<img src="https:\/\/i\.pravatar\.cc\/150\?img=11" alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-gray-200 ml-1 cursor-pointer" \/>/;
    if (settingsPattern.test(content)) {
        content = content.replace(settingsPattern, replacement);
        modified = true;
    }

    // Pattern 2: feedback/page.js
    const feedbackPattern = /<button className="hover:opacity-80 transition ml-2">\s*<div className="w-9 h-9 rounded-full bg-\[#0a3a2e\] flex items-center justify-center text-white border-2 border-transparent">\s*<svg[^>]*>.*?<\/svg>\s*<\/div>\s*<\/button>/s;
    if (feedbackPattern.test(content)) {
        content = content.replace(feedbackPattern, replacement);
        modified = true;
    }

    // Pattern 3: no profile block at all (offers/page.js, messages/page.js, discover/profile/page.js, etc.)
    // Find the end of the header
    if (!content.includes('<UserDropdown') && !modified) {
        // Just look for the help icon button, and insert UserDropdown after it.
        const helpBtnPattern = /(<button className="[^"]*hover:text-gray-800 transition[^"]*">\s*<svg[^>]*><path[^>]*d="M8\.228 9c\.549-1\.165 2\.03-2 3\.772-2 2\.21 0 4 1\.343 4 3 0 1\.4-1\.278 2\.575-3\.006 2\.907-\.542\.104-\.994\.54-\.994 1\.093m0 3h\.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"><\/path><\/svg>\s*<\/button>)/;
        if (helpBtnPattern.test(content)) {
            content = content.replace(helpBtnPattern, `$1\n            ${replacement}`);
            modified = true;
        } else {
            const helpBtnPattern2 = /(<button className="[^"]*text-gray-400 hover:text-gray-600 transition[^"]*">\s*<svg[^>]*><path[^>]*d="M8\.228 9c\.549-1\.165 2\.03-2 3\.772-2 2\.21 0 4 1\.343 4 3 0 1\.4-1\.278 2\.575-3\.006 2\.907-\.542\.104-\.994\.54-\.994 1\.093m0 3h\.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"><\/path><\/svg>\s*<\/button>)/;
            if (helpBtnPattern2.test(content)) {
                content = content.replace(helpBtnPattern2, `$1\n            ${replacement}`);
                modified = true;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated profile block in ${filePath.replace(__dirname, '')}`);
    } else if (!content.includes('<UserDropdown')) {
        console.log(`STILL NO MATCH in ${filePath.replace(__dirname, '')}`);
    }
}
