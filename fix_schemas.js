const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app', '[locale]', 'register');

function updateSchema(role, step, newSchemaStr) {
    const filePath = path.join(baseDir, role, step, 'ClientForm.js');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find the `const schema = z.object({ ... });` block
        const schemaBlockRegex = /const schema = z\.object\(\{[\s\S]*?\}\);/;
        
        content = content.replace(schemaBlockRegex, `const schema = z.object({\n${newSchemaStr}\n});`);
        fs.writeFileSync(filePath, content);
        console.log(`Updated schema for ${role} ${step}`);
    }
}

// Startup Step 1
updateSchema('startup', '', `  field_1: z.string().trim().min(3, "Name must be at least 3 characters"),
  field_2: z.string().trim().regex(/^[0-9]{9}$/, "Phone number must be exactly 9 digits")`);

// Startup Step 2
updateSchema('startup', 'step2', `  field_1: z.string().trim().min(2, "Required"),
  field_2: z.string().trim().min(1, "Required"),
  field_3: z.string().trim().min(5, "Tagline must be at least 5 characters"),
  field_4: z.string().trim().min(1, "Required"),
  field_5: z.string().trim().min(1, "Required"),
  field_6: z.string().trim().regex(/^(19|20)\\d{2}$/, "Must be a valid 4-digit year"),
  field_7: z.string().trim().min(2, "Required"),
  field_8: z.string().trim().min(2, "Required"),
  field_9: z.string().trim().min(1, "Required"),
  field_10: z.string().trim().min(2, "Required")`);

// Investor Step 1
updateSchema('investor', '', `  field_1: z.string().trim().min(3, "Legal name must be at least 3 characters"),
  field_2: z.string().trim().regex(/^[0-9]{9}$/, "Phone number must be exactly 9 digits")`);

// Investor Step 2
updateSchema('investor', 'step2', `  investorType: z.string({ required_error: "Please select an investor type" }),
  sectors: z.array(z.string()).optional(),
  field_7: z.string().trim().min(1, "Required"),
  field_8: z.string().trim().min(1, "Required"),
  field_9: z.string().trim().min(1, "Required"),
  field_10: z.string().trim().url("Must be a valid URL").includes("linkedin.com", { message: "Must be a valid LinkedIn URL" }).or(z.literal("")),
  field_11: z.string().trim().min(10, "Bio must be at least 10 characters")`);

// Investor Step 3
updateSchema('investor', 'step3', `  field_1: z.boolean().refine(val => val === true, "You must confirm financial qualification"),
  field_2: z.boolean().refine(val => val === true, "You must accept the terms"),
  personalDoc: z.any().optional(),
  doc_1: z.any().optional(),
  doc_2: z.any().optional()`);

// Mentor Step 1
updateSchema('mentor', '', `  field_1: z.string().trim().regex(/^[0-9]{9}$/, "Phone number must be exactly 9 digits"),
  field_2: z.string().trim().min(2, "Professional title is required"),
  field_3: z.string().trim().min(1, "Required"),
  field_4: z.string().optional(),
  field_5: z.string().trim().min(10, "Bio must be at least 10 characters"),
  field_6: z.string().trim().url("Must be a valid URL").includes("linkedin.com", { message: "Must be a valid LinkedIn URL" }).or(z.literal("")),
  field_7: z.string().trim().min(1, "Required"),
  field_8: z.string().trim().regex(/^\\d+(\\.\\d{1,2})?$/, "Invalid pricing format"),
  field_9: z.boolean().refine(val => val === true, "You must accept the terms and privacy policy")`);

// Mentor Step 2
updateSchema('mentor', 'step2', `  categories: z.array(z.string()).min(1, "Select at least one category"),
  field_1: z.string().trim().min(2, "Required"),
  field_2: z.string().trim().min(2, "Required"),
  field_3: z.string().trim().min(1, "Required"),
  field_4: z.string().optional(),
  field_5: z.boolean().optional(),
  field_6: z.boolean().optional(),
  field_7: z.boolean().optional(),
  field_8: z.boolean().optional(),
  field_9: z.boolean().optional(),
  field_10: z.string().trim().min(1, "Required"),
  field_11: z.string().optional(),
  field_12: z.string().optional(),
  field_13: z.string().trim().min(1, "Required"),
  field_14: z.string().trim().min(1, "Required"),
  field_15: z.string().trim().min(10, "Required"),
  field_16: z.string().trim().min(2, "Required"),
  field_17: z.string().trim().min(10, "Required"),
  field_18: z.string().optional()`);

