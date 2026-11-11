const fs = require('fs');
const path = require('path');

const TP_SNIPPET = `  <script nowprocket data-noptimize="1" data-cfasync="false" data-wpfc-render="false" seraph-accel-crit="1" data-no-defer="1" data-cmp-ab="2">
    (function () {
        var script = document.createElement("script");
        script.async = 1;
        script.setAttribute("data-cmp-ab","2");
        script.src = 'https://tp-em.com/NTk5MDQ1.js?t=599045';
        document.head.appendChild(script);
    })();
  </script>`;

function injectIntoFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('tp-em.com/NTk5MDQ1.js')) {
    console.log(`Already injected in ${filePath}`);
    return;
  }
  if (content.includes('</head>')) {
    content = content.replace('</head>', `${TP_SNIPPET}\n</head>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Injected TP script into ${filePath}`);
  }
}

// Inject into legal and root files
const files = [
  'index.html',
  'public/index.html',
  'about.html',
  'public/about.html',
  'privacy.html',
  'public/privacy.html',
  'terms.html',
  'public/terms.html',
  'affiliate-disclosure.html',
  'public/affiliate-disclosure.html',
  'guides/index.html',
  'public/guides/index.html'
];

files.forEach(f => injectIntoFile(path.join(__dirname, '..', f)));

// Inject into all guides
const guidesDir = path.join(__dirname, '../guides');
const publicGuidesDir = path.join(__dirname, '../public/guides');

fs.readdirSync(guidesDir).forEach(file => {
  if (file.endsWith('.html')) {
    injectIntoFile(path.join(guidesDir, file));
  }
});

fs.readdirSync(publicGuidesDir).forEach(file => {
  if (file.endsWith('.html')) {
    injectIntoFile(path.join(publicGuidesDir, file));
  }
});

console.log('All pages injected with Travelpayouts verification script.');
