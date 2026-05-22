const fs = require('fs');
const path = require('path');

const roles = ['startup', 'investor', 'mentor'];
const steps = ['', 'step2', 'step3', 'step4'];

const baseDir = path.join(__dirname, 'src', 'app', '[locale]', 'register');

for (const role of roles) {
  for (const step of steps) {
    const dir = path.join(baseDir, role, step);
    const pagePath = path.join(dir, 'page.js');
    if (!fs.existsSync(pagePath)) continue;

    let content = fs.readFileSync(pagePath, 'utf-8');
    
    const formStartIdx = content.indexOf('<form');
    if (formStartIdx === -1) {
      console.log(`No form found in ${role} ${step}`);
      continue;
    }
    const formEndIdx = content.indexOf('</form>') + 7;
    
    const formBlock = content.substring(formStartIdx, formEndIdx);
    
    let fieldCount = 0;
    let schemaFields = [];
    
    let newFormBlock = formBlock.replace(/<(input|select|textarea)([^>]*?)>/g, (match, tag, attrs) => {
        fieldCount++;
        const fieldName = `field_${fieldCount}`;
        
        let schemaType = 'z.string().trim().min(1, "Required")'; // Added sanitization (trim)
        if (attrs.includes('type="email"')) schemaType = 'z.string().trim().email("Invalid email").min(1, "Required")';
        else if (attrs.includes('type="checkbox"')) schemaType = 'z.boolean().optional()';
        else if (attrs.includes('type="radio"')) schemaType = 'z.string().optional()';
        
        schemaFields.push(`${fieldName}: ${schemaType}`);
        
        return `<${tag} {...register("${fieldName}")} ${attrs}>`;
    });
    
    // Remove existing onSubmit and insert new one
    newFormBlock = newFormBlock.replace(/<form[^>]*>/, (match) => {
       let clean = match.replace(/onSubmit={[^}]*}/, '');
       return clean.replace('<form', '<form onSubmit={handleSubmit(onSubmit)}');
    });

    const clientFormContent = `
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

const schema = z.object({
  ${schemaFields.join(',\n  ')}
});

export default function ClientForm({ t, currentLocale }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data) => {
    // Front end validation and sanitization succeeded!
    console.log("Validated & Sanitized Data:", data);
    // You can redirect or save data here.
  };

  const languageHref = (lang) => \`/\${lang}/register/${role}\`;

  return (
    ${newFormBlock}
  );
}
`;

    fs.writeFileSync(path.join(dir, 'ClientForm.js'), clientFormContent.trim());
    
    // Update page.js
    let newPageContent = content.replace(formBlock, `<ClientForm t={t} currentLocale={currentLocale} />`);
    
    // Add import right after the getDictionary import
    newPageContent = newPageContent.replace(/(import \{ getDictionary \} from [^\n]+;\n)/, (match) => {
        return match + `import ClientForm from "./ClientForm";\n`;
    });
    
    fs.writeFileSync(pagePath, newPageContent);
    console.log(`Refactored ${role} ${step}`);
  }
}
