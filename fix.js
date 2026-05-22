const fs = require('fs');
const path = require('path');

const files = [
    'src/app/investor/discover/page.js',
    'src/app/investor/funding/page.js',
    'src/app/investor/payment/method/page.js',
    'src/app/investor/payment/review/page.js',
    'src/app/investor/recommendations/page.js',
    'src/app/investor/dashboard/page.js'
];

files.forEach(f => {
    try {
        const p = path.join(process.cwd(), f);
        let c = fs.readFileSync(p, 'utf8');
        
        const search = '<UserDropdown company="Abebe Tekle" role="Angel Investor" initials="AT" />\n            </header>';
        const searchR = '<UserDropdown company="Abebe Tekle" role="Angel Investor" initials="AT" />\r\n            </header>';
        
        const replace = '<UserDropdown company="Abebe Tekle" role="Angel Investor" initials="AT" />\n               </div>\n            </header>';
        const replaceR = '<UserDropdown company="Abebe Tekle" role="Angel Investor" initials="AT" />\r\n               </div>\r\n            </header>';

        if (c.includes(search)) {
            c = c.replace(search, replace);
            fs.writeFileSync(p, c);
            console.log('Fixed ' + f);
        } else if (c.includes(searchR)) {
            c = c.replace(searchR, replaceR);
            fs.writeFileSync(p, c);
            console.log('Fixed (CRLF) ' + f);
        } else {
            // Also try matching the spaces loosely
            const pattern = /<UserDropdown company="Abebe Tekle" role="Angel Investor" initials="AT" \/>\s*<\/header>/g;
            if (pattern.test(c)) {
                 c = c.replace(pattern, `<UserDropdown company="Abebe Tekle" role="Angel Investor" initials="AT" />\n               </div>\n            </header>`);
                 fs.writeFileSync(p, c);
                 console.log('Fixed (Regex) ' + f);
            } else {
                 console.log('Not found in ' + f);
            }
        }
    } catch(e) {
        console.log('Error in ' + f + ': ' + e.message);
    }
});
