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

    const replacement = `<UserDropdown company="Abebe Tekle" role="Angel Investor" initials="AT" />`;

    // Match the specific investor profile block
    const pattern = /<div className="flex items-center gap-3[^>]*?">\s*<div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shrink-0">\s*<img src="[^"]*" alt="[^"]*" className="w-full h-full object-cover" \/>\s*<\/div>\s*<div className="flex flex-col">\s*<span className="text-sm font-bold text-gray-900 leading-tight">[^<]*<\/span>\s*<span className="text-\[9px\] font-bold text-gray-500 uppercase tracking-wider">[^<]*<\/span>\s*<\/div>\s*<\/div>/g;

    // Alternative match if it's slightly different
    const pattern2 = /<div className="flex items-center gap-3">\s*<div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-xs shrink-0">\s*AT\s*<\/div>\s*<div className="flex flex-col">\s*<span className="text-sm font-bold text-gray-900 leading-tight">[^<]*<\/span>\s*<span className="text-\[9px\] text-gray-500 font-medium">[^<]*<\/span>\s*<\/div>\s*<\/div>/g;

    let modified = false;

    if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
    } else if (pattern2.test(content)) {
        content = content.replace(pattern2, replacement);
        modified = true;
    }

    // Try a very broad pattern if others fail, replacing anything inside <div className="flex items-center gap-5"> ... </div>
    // that is after the separator <div className="w-px h-6 bg-gray-200"></div>
    const patternBroad = /(<div className="w-px h-6 bg-gray-200"><\/div>\s*)<div className="flex items-center gap-3[^>]*>[\s\S]*?(?:<\/div>\s*){2}<\/div>/;
    if (!modified && patternBroad.test(content) && content.includes('<div className="w-px h-6 bg-gray-200"></div>')) {
        content = content.replace(patternBroad, `$1${replacement}`);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated profile block in ${filePath.replace(__dirname, '')}`);
    } else {
        console.log(`NO MATCH in ${filePath.replace(__dirname, '')}`);
    }
}
