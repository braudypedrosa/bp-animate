# Contributing to BP Animate

Thank you for your interest in contributing to BP Animate! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/braudypedrosa/bp-animate.git`
3. Install dependencies: `npm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development

### Project Structure

```
bp-animate/
├── src/
│   ├── js/           # JavaScript source files
│   └── scss/         # SCSS source files
├── dist/             # Built files (generated)
├── docs/             # Documentation and demos
└── ...
```

### Building

- `npm run build` - Build CSS and copy JS to dist
- `npm run build:css` - Build CSS only
- `npm run build:css:min` - Build minified CSS
- `npm run build:js` - Copy JS to dist
- `npm run build:all` - Build everything including minified versions
- `npm run watch` - Watch SCSS files for changes

### Making Changes

1. Make your changes in the `src/` directory
2. Run `npm run build` to build the project
3. Test your changes using the demo page in `docs/demo.html`
4. Update documentation if needed

## Code Style

- Use 4 spaces for indentation
- Follow existing code style
- Add comments for complex logic
- Keep functions focused and small

## Adding New Animations

1. Add keyframes in `src/scss/bp-animate.scss`:

```scss
@keyframes bpMyAnimation {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

2. Add animation class:

```scss
.my-animation {
    opacity: 0;
    transform: translateY(50px);

    &.bp-is-animating {
        animation: bpMyAnimation 0.6s ease-in-out forwards;
    }
}
```

3. Update the animation map in `src/js/bp-animate.js`:

```javascript
const animationMap = {
    // ... existing animations
    'my-animation': 'bpMyAnimation'
};
```

4. Update the README.md with your new animation
5. Add an example to `docs/demo.html`

## Submitting Changes

1. Ensure all tests pass (if applicable)
2. Update CHANGELOG.md with your changes
3. Commit your changes: `git commit -m "Add: description of changes"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Create a Pull Request

## Commit Message Format

- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for updates to existing features
- `Remove:` for removing features
- `Docs:` for documentation changes

## Questions?

Open an issue for any questions or discussions about contributions.

