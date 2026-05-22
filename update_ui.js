const fs = require('fs');
const path = require('path');

// 1. Update Dictionaries (Change 'Feedback' to 'Rating' in the Sidebar)
const enPath = path.join(__dirname, 'src', 'dictionaries', 'en.json');
let enDict = JSON.parse(fs.readFileSync(enPath, 'utf8'));
if (enDict.startupSidebar && enDict.startupSidebar.system) {
    enDict.startupSidebar.system.feedback = "Rating";
    fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
    console.log("Updated en.json to Rating");
}

const amPath = path.join(__dirname, 'src', 'dictionaries', 'am.json');
let amDict = JSON.parse(fs.readFileSync(amPath, 'utf8'));
if (amDict.startupSidebar && amDict.startupSidebar.system) {
    amDict.startupSidebar.system.feedback = "Rating"; // Using English text as fallback if Amharic translation isn't strict
    fs.writeFileSync(amPath, JSON.stringify(amDict, null, 2));
    console.log("Updated am.json to Rating");
}

// 2. Inject UserDropdown into all startup page.js files
// Use a simple recursive function to find all page.js files in startup folder
function findPageFiles(dir, fileList = []) {
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

const startupDir = path.join(__dirname, 'src', 'app', '[locale]', 'startup');
const pageFiles = findPageFiles(startupDir);

for (const filePath of pageFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the header user profile block
    const userBlockRegex = /<div className="flex items-center gap-3">\s*<div className="hidden sm:flex flex-col items-end">[\s\S]*?<div className="w-full h-full bg-\[#115b4c\] text-white flex items-center justify-center font-bold text-\[10px\]">[^<]+<\/div>\s*<\/div>\s*<\/div>/g;
    
    if (userBlockRegex.test(content)) {
        // Add import
        if (!content.includes('import UserDropdown')) {
            content = content.replace(/(import [^\n]+;\n)(?!import)/, '$1import UserDropdown from "@/components/startup/UserDropdown";\n');
        }
        
        // Ensure currentLocale is available for the component
        // Most files have `const currentLocale = ...`
        
        // Replace the user block with the UserDropdown component
        content = content.replace(userBlockRegex, `<UserDropdown company={t.profile?.company} role={t.profile?.role} currentLocale={currentLocale} />`);
        
        fs.writeFileSync(filePath, content);
        console.log(`Injected UserDropdown into ${filePath.replace(__dirname, '')}`);
    }
}
