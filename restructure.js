const fs = require('fs');
const path = require('path');

const dirs = [
  'assets/vendor',
  'assets/docs',
  'assets/img/profile',
  'assets/img/edu',
  'assets/img/tech',
  'assets/img/certs',
  'assets/img/projects'
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

const fileMoves = [
  { from: 'assets/js/mixitup.min.js', to: 'assets/vendor/mixitup.min.js' },
  { from: 'assets/pdf/Resume_ME.pdf', to: 'assets/docs/Resume_ME.pdf' },
  { from: 'assets/img/profile.png', to: 'assets/img/profile/profile.png' },
  { from: 'assets/img/parul.jpg', to: 'assets/img/edu/parul.jpg' },
  { from: 'assets/img/BSEB.jpeg', to: 'assets/img/edu/BSEB.jpeg' },
  { from: 'assets/img/cbse.png', to: 'assets/img/edu/cbse.png' },
  { from: 'assets/img/java-logo.svg', to: 'assets/img/tech/java-logo.svg' },
  { from: 'assets/img/python-logo.svg', to: 'assets/img/tech/python-logo.svg' },
  { from: 'assets/img/javascript-logo.svg', to: 'assets/img/tech/javascript-logo.svg' },
  { from: 'assets/img/html-logo.svg', to: 'assets/img/tech/html-logo.svg' },
  { from: 'assets/img/css-logo.svg', to: 'assets/img/tech/css-logo.svg' },
  { from: 'assets/img/SQL-logo.svg', to: 'assets/img/tech/SQL-logo.svg' },
  { from: 'assets/pdf/Certificate/Build-With-India.png', to: 'assets/img/certs/Build-With-India.png' },
  { from: 'assets/img/hackmountains_logo.jpeg', to: 'assets/img/certs/hackmountains_logo.jpeg' },
  { from: 'assets/img/Netflix_icon.svg', to: 'assets/img/projects/Netflix_icon.svg' },
  { from: 'assets/img/FreeCodeCamp.jpg', to: 'assets/img/certs/FreeCodeCamp.jpg' },
  { from: 'assets/img/Cisco_Networking_Academy.jpeg', to: 'assets/img/certs/Cisco_Networking_Academy.jpeg' },
  { from: 'assets/img/SimpliLearn.jpg', to: 'assets/img/certs/SimpliLearn.jpg' },
  { from: 'assets/img/Infosys-SpringBoard.png', to: 'assets/img/certs/Infosys-SpringBoard.png' }
];

// Execute file moves
fileMoves.forEach(move => {
  // SimpliLearn casing might differ
  let fromPath = move.from;
  if (!fs.existsSync(fromPath)) {
    // Attempt lowercase fallback for known tricky files
    if (fromPath.includes('Simplilearn.jpg')) fromPath = fromPath.replace('Simplilearn', 'SimpliLearn');
    else if (fromPath.includes('SimpliLearn.jpg')) fromPath = fromPath.replace('SimpliLearn', 'Simplilearn');
  }

  if (fs.existsSync(fromPath)) {
    fs.renameSync(fromPath, move.to);
    console.log(`Moved ${fromPath} to ${move.to}`);
  } else {
    console.log(`Could not find ${fromPath}`);
  }
});

// Update index.html and main.js contents
function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  fileMoves.forEach(move => {
    // For index.html & main.js, the source code usually links the exact `from` paths. 
    // We can confidently split and join to replace all instances.
    // Account for potential `assets/img/Simplilearn.jpg` vs `assets/img/SimpliLearn.jpg`
    const searchString = move.from;
    content = content.split(searchString).join(move.to);
    
    // Also patch Simplilearn.jpg explicitly in case the source code used lowercase 
    if (move.from === 'assets/img/SimpliLearn.jpg') {
      content = content.split('assets/img/Simplilearn.jpg').join(move.to);
    }
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

replaceInFile('index.html');
replaceInFile('assets/js/main.js');

console.log('Restructuring complete!');
