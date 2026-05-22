const fs = require('fs');
const path = require('path');

function fixInvestorStep2() {
    const filePath = path.join(__dirname, 'src', 'app', '[locale]', 'register', 'investor', 'step2', 'ClientForm.js');
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix Investor Type Radio Buttons
    const types = ["individual", "angel", "vc", "investmentCompany", "corporate", "diaspora"];
    let typeIndex = 0;
    content = content.replace(/<input \{\.\.\.register\("field_[1-6]"\)\}\s+type="radio" name="investorType" className="hidden"( defaultChecked)? \/>/g, (match, defaultChecked) => {
        const val = types[typeIndex++];
        return `<input {...register("investorType")} type="radio" value="${val}" className="hidden" ${defaultChecked ? 'defaultChecked ' : ''}/>`;
    });

    // Fix Sector Buttons
    const sectorRegex = /<button type="button" className="[^"]+">(\{t\.sectors\.[^\}]+\})<\/button>/g;
    content = content.replace(sectorRegex, (match, text) => {
        const valMatch = text.match(/t\.sectors\.([^}]+)/);
        const val = valMatch ? valMatch[1] : 'unknown';
        
        return `<label className="cursor-pointer">
                      <input type="checkbox" {...register("sectors")} value="${val}" className="peer hidden" />
                      <div className="peer-checked:bg-[#167b66] peer-checked:text-white bg-[#9dbab0] bg-opacity-70 text-[#1c3a2a] px-4 py-2 rounded-full text-xs font-bold hover:bg-[#167b66] hover:text-white transition">
                        ${text}
                      </div>
                    </label>`;
    });

    // Update Zod schema for the new fields
    content = content.replace('field_1: z.string().optional(),', 'investorType: z.string().optional(),\n  sectors: z.array(z.string()).optional(),');
    
    fs.writeFileSync(filePath, content);
    console.log("Fixed investor step2");
}

function fixMentorStep2() {
    const filePath = path.join(__dirname, 'src', 'app', '[locale]', 'register', 'mentor', 'step2', 'ClientForm.js');
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix Mentorship Categories
    const categoryRegex = /<span className="[^"]+">(\{t\.categories\.[^\}]+\})<\/span>/g;
    content = content.replace(categoryRegex, (match, text) => {
        const valMatch = text.match(/t\.categories\.([^}]+)/);
        const val = valMatch ? valMatch[1] : 'unknown';
        
        return `<label className="cursor-pointer">
                      <input type="checkbox" {...register("categories")} value="${val}" className="peer hidden" />
                      <span className="peer-checked:bg-[#e8f5e9] peer-checked:text-[#136150] peer-checked:border-[#a5d6a7] px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 text-[10px] font-bold hover:border-gray-300 transition block">
                        ${text}
                      </span>
                    </label>`;
    });

    // Add Zod schema
    content = content.replace('field_1: z.string()', 'categories: z.array(z.string()).optional(),\n  field_1: z.string()');

    fs.writeFileSync(filePath, content);
    console.log("Fixed mentor step2");
}

function fixInvestorStep3() {
    const filePath = path.join(__dirname, 'src', 'app', '[locale]', 'register', 'investor', 'step3', 'ClientForm.js');
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Make file uploads functional
    content = content.replace(/<div className="border-2 border-dashed([^>]*)>/, '<label className="border-2 border-dashed$1>\n<input type="file" {...register("personalDoc")} className="hidden" />');
    content = content.replace(/<\/p>\n              <\/div>/, '</p>\n              </label>');

    // Replace empty requirements with label wrapping hidden file inputs
    const emptyReqRegex = /<div className="bg-transparent border border-\[#376b52\] border-opacity-30 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-\[#136150\] transition">([\s\S]*?)<\/div>/g;
    
    let count = 0;
    content = content.replace(emptyReqRegex, (match, inner) => {
        count++;
        return `<label className="bg-transparent border border-[#376b52] border-opacity-30 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:border-[#136150] transition">\n<input type="file" {...register("doc_" + ${count})} className="hidden" />${inner}</label>`;
    });

    fs.writeFileSync(filePath, content);
    console.log("Fixed investor step3");
}

fixInvestorStep2();
fixMentorStep2();
fixInvestorStep3();
