# Version Management Guide

This document explains how to update versions across the project.

## Quick Version Update

To update the version number across all files:

```bash
npm run version:update <new-version>
```

Example:
```bash
npm run version:update 1.2.0
```

This will automatically update:
- `package.json` - version field
- `src/js/bp-animate.js` - @version comment
- `src/scss/bp-animate.scss` - @version comment
- `README.md` - CDN links (if present)

## Manual Version Update Process

If you prefer to update manually:

1. **Update package.json:**
   ```json
   "version": "1.2.0"
   ```

2. **Update src/js/bp-animate.js:**
   ```javascript
   * @version 1.2.0
   ```

3. **Update src/scss/bp-animate.scss:**
   ```scss
   * @version 1.2.0
   ```

4. **Update README.md CDN links:**
   ```html
   https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@1.2.0/dist/bp-animate.css
   ```

5. **Update CHANGELOG.md:**
   Add a new version entry at the top

6. **Rebuild:**
   ```bash
   npm run build:all
   ```

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backwards compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backwards compatible

## Complete Release Process

1. Update version:
   ```bash
   npm run version:update 1.2.0
   ```

2. Update CHANGELOG.md with new version entry

3. Build the project:
   ```bash
   npm run build:all
   ```

4. Commit changes:
   ```bash
   git add -A
   git commit -m "Release: v1.2.0"
   ```

5. Create git tag:
   ```bash
   git tag -a v1.2.0 -m "Release version 1.2.0"
   git push origin main --tags
   ```

6. (Optional) Create GitHub release with the tag

