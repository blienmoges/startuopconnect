const fs = require('fs');
const path = require('path');
const roles = ['startup', 'investor', 'mentor'];
const steps = ['', 'step2', 'step3', 'step4'];
const baseDir = path.join(__dirname, 'src', 'app', '[locale]', 'register');

for (const role of roles) {
  for (const step of steps) {
    const pagePath = path.join(baseDir, role, step, 'page.js');
    if (fs.existsSync(pagePath)) {
      let content = fs.readFileSync(pagePath, 'utf8');
      if (content.includes('<ClientForm') && !content.includes('import ClientForm')) {
        content = content.replace(/(import \{ getDictionary \} from [^\n]+;[\r\n]*)/, '$1import ClientForm from "./ClientForm";\n');
        fs.writeFileSync(pagePath, content);
        console.log('Fixed imports in ' + role + ' ' + step);
      }
    }
  }
}
