const fs = require('fs');
const path = require('path');

const roles = ['startup', 'investor', 'mentor'];
const steps = ['', 'step2', 'step3', 'step4'];

const baseDir = path.join(__dirname, 'src', 'app', '[locale]', 'register');

for (const role of roles) {
  for (const step of steps) {
    const dir = path.join(baseDir, role, step);
    const formPath = path.join(dir, 'ClientForm.js');
    if (!fs.existsSync(formPath)) continue;

    let content = fs.readFileSync(formPath, 'utf-8');

    if (!content.includes('useRouter')) {
      content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport { useRouter } from "next/navigation";');
      
      content = content.replace('export default function ClientForm({ t, currentLocale }) {', 'export default function ClientForm({ t, currentLocale }) {\n  const router = useRouter();');
      
      const linkRegex = /<Link\s+href=\{`\/\$\{currentLocale\}\/register\/[a-z]+\/([^`]+)`\}\s+className="([^"]+)"[^>]*>([\s\S]*?(?:actions\.continue|actions\.submit)[\s\S]*?)<\/Link>/gi;
      
      let nextStep = '';
      
      content = content.replace(linkRegex, (match, stepName, className, inner) => {
         nextStep = stepName;
         return `<button type="submit" className="${className}">${inner}</button>`;
      });
      
      if (nextStep) {
         const onSubmitRegex = /const onSubmit = \(data\) => {([\s\S]*?)};/;
         content = content.replace(onSubmitRegex, `const onSubmit = (data) => {
    console.log("Validated & Sanitized Data:", data);
    router.push(\`/\${currentLocale}/register/${role}/${nextStep}\`);
  };`);
      }
      
      fs.writeFileSync(formPath, content);
      console.log(`Fixed buttons for ${role} ${step}`);
    }
  }
}
