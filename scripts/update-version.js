#!/usr/bin/env node

/**
 * Version Update Script
 * 
 * Updates version number across all files in the project:
 * - package.json
 * - src/js/bp-animate.js (in @version comment)
 * - README.md (if version references exist)
 * 
 * Usage:
 *   node scripts/update-version.js 1.2.0
 *   npm run version:update 1.2.0
 */

const fs = require('fs');
const path = require('path');

// Get version from command line argument
const newVersion = process.argv[2];

if (!newVersion) {
    console.error('Error: Version number required');
    console.log('Usage: node scripts/update-version.js <version>');
    console.log('Example: node scripts/update-version.js 1.2.0');
    process.exit(1);
}

// Validate version format (semantic versioning)
const versionRegex = /^\d+\.\d+\.\d+$/;
if (!versionRegex.test(newVersion)) {
    console.error('Error: Invalid version format. Use semantic versioning (e.g., 1.2.0)');
    process.exit(1);
}

console.log(`Updating version to ${newVersion}...`);

// Update package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const oldVersion = packageJson.version;
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
console.log(`✓ Updated package.json: ${oldVersion} → ${newVersion}`);

// Update src/js/bp-animate.js
const jsPath = path.join(__dirname, '..', 'src', 'js', 'bp-animate.js');
let jsContent = fs.readFileSync(jsPath, 'utf8');
const jsVersionRegex = /@version\s+[\d.]+/;
if (jsVersionRegex.test(jsContent)) {
    jsContent = jsContent.replace(jsVersionRegex, `@version ${newVersion}`);
    fs.writeFileSync(jsPath, jsContent);
    console.log(`✓ Updated src/js/bp-animate.js: @version ${newVersion}`);
} else {
    console.warn('⚠ Could not find @version in src/js/bp-animate.js');
}

// Update src/scss/bp-animate.scss
const scssPath = path.join(__dirname, '..', 'src', 'scss', 'bp-animate.scss');
if (fs.existsSync(scssPath)) {
    let scssContent = fs.readFileSync(scssPath, 'utf8');
    const scssVersionRegex = /@version\s+[\d.]+/;
    if (scssVersionRegex.test(scssContent)) {
        scssContent = scssContent.replace(scssVersionRegex, `@version ${newVersion}`);
        fs.writeFileSync(scssPath, scssContent);
        console.log(`✓ Updated src/scss/bp-animate.scss: @version ${newVersion}`);
    }
}

// Update README.md if it has version references
const readmePath = path.join(__dirname, '..', 'README.md');
if (fs.existsSync(readmePath)) {
    let readmeContent = fs.readFileSync(readmePath, 'utf8');
    // Update version in CDN examples (jsDelivr links)
    const readmeVersionRegex = /cdn\.jsdelivr\.net\/gh\/braudypedrosa\/bp-animate@[\d.]+/g;
    if (readmeVersionRegex.test(readmeContent)) {
        readmeContent = readmeContent.replace(readmeVersionRegex, (match) => {
            return match.replace(/@[\d.]+/, `@${newVersion}`);
        });
        fs.writeFileSync(readmePath, readmeContent);
        console.log(`✓ Updated README.md CDN links to version ${newVersion}`);
    }
}

console.log(`\n✅ Version updated successfully from ${oldVersion} to ${newVersion}`);
console.log('\nNext steps:');
console.log('  1. Review the changes');
console.log('  2. Update CHANGELOG.md with the new version');
console.log('  3. Run: npm run build:all');
console.log('  4. Commit and push changes');

