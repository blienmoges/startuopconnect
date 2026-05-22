const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  "src/app/mentor/dashboard/page.js",
  "src/app/mentor/messages/page.js",
  "src/app/mentor/requests/page.js",
  "src/app/mentor/requests/profile/page.js",
  "src/app/mentor/requests/proposal/page.js",
  "src/app/mentor/requests/proposal/success/page.js",
  "src/app/mentor/startups/page.js"
];

for (const relPath of filesToUpdate) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath}, does not exist.`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Only process if it has a hardcoded aside
  if (!content.includes('<aside') || !content.includes('</aside>')) {
    console.log(`No aside found in ${relPath}`);
    continue;
  }

  // Find the start and end of the aside
  const startIndex = content.indexOf('<aside');
  const endIndex = content.indexOf('</aside>') + '</aside>'.length;

  if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex);

    content = before + '<Sidebar />' + after;

    // Make sure Sidebar is imported
    if (!content.includes('import Sidebar')) {
      const importStmt = 'import Sidebar from "@/components/mentor/Sidebar";\n';
      // Find the last import
      let lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        let endOfLastImport = content.indexOf('\n', lastImportIndex);
        if (endOfLastImport === -1) endOfLastImport = content.length;
        content = content.substring(0, endOfLastImport + 1) + importStmt + content.substring(endOfLastImport + 1);
      } else {
        // Find the first line after "use client";
        let useClientIndex = content.indexOf('"use client";');
        if (useClientIndex !== -1) {
          let endOfUseClient = content.indexOf('\n', useClientIndex);
          content = content.substring(0, endOfUseClient + 1) + importStmt + content.substring(endOfUseClient + 1);
        } else {
          content = importStmt + content;
        }
      }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${relPath}`);
  }
}
