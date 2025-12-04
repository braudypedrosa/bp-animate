# BP Animate

A lightweight, vanilla JavaScript animation library that triggers animations when elements come into view. Perfect for scroll-triggered animations with full control over timing, easing, and behavior.

## Features

- 🎯 **Viewport Detection** - Automatically detects when elements enter the viewport
- 🎨 **25+ Animations** - Fade, slide, scale, rotate, bounce, flip, and more
- ⚙️ **Full Control** - Customize duration, delay, easing, and one-time animations via HTML attributes
- 🚀 **Zero Dependencies** - Pure vanilla JavaScript, no jQuery or frameworks required
- 📦 **Lightweight** - Minimal footprint, maximum performance
- 🎭 **Keyframe-Based** - All animations use CSS keyframes for smooth performance
- ✅ **Animation Completion** - Detects when animations finish with `bp-is-done-animating` class

## Installation

### Option 1: NPM (Recommended)

```bash
npm install bp-animate
```

Then include in your project:

```html
<!-- CSS -->
<link rel="stylesheet" href="node_modules/bp-animate/dist/bp-animate.css">

<!-- JavaScript -->
<script src="node_modules/bp-animate/dist/bp-animate.js"></script>
```

### Option 2: Download Files

Download the following files from the [releases page](https://github.com/braudypedrosa/bp-animate/releases):
- `dist/bp-animate.js` - The JavaScript library
- `dist/bp-animate.css` - The compiled CSS

### Option 3: GitHub Raw Links (Auto-Update)

You can link directly to the raw GitHub files. These will automatically update when you push changes:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://raw.githubusercontent.com/braudypedrosa/bp-animate/main/dist/bp-animate.css">

<!-- JavaScript -->
<script src="https://raw.githubusercontent.com/braudypedrosa/bp-animate/main/dist/bp-animate.js"></script>
```

**Note:** Raw GitHub links work but aren't recommended for production due to:
- No caching headers (slower performance)
- No versioning (breaking changes affect all users)
- GitHub rate limiting

### Option 4: jsDelivr CDN (Recommended for Production)

jsDelivr provides a free CDN that works with GitHub repositories:

```html
<!-- Latest version from main branch -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@main/dist/bp-animate.css">
<script src="https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@main/dist/bp-animate.js"></script>

<!-- Specific version/tag (recommended for production) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@1.1.1/dist/bp-animate.css">
<script src="https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@1.1.1/dist/bp-animate.js"></script>
```

**Benefits of jsDelivr:**
- ✅ Fast CDN with caching
- ✅ Version pinning for stability
- ✅ Auto-updates when using `@main` branch
- ✅ Works with GitHub releases/tags
- ✅ Free and reliable

### Option 5: NPM CDN (After Publishing)

Once published to NPM:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bp-animate@1.1.1/dist/bp-animate.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bp-animate@1.1.1/dist/bp-animate.js"></script>
```

### Option 4: Include in Your Project

```html
<!-- CSS -->
<link rel="stylesheet" href="path/to/bp-animate.css">

<!-- JavaScript -->
<script src="path/to/bp-animate.js"></script>
```

## Quick Start

1. Add the `bp-animate` class and an animation class to your element:

```html
<div class="bp-animate fade-in">
    <p>This will fade in when scrolled into view</p>
</div>
```

2. That's it! The animation will automatically trigger when the element enters the viewport.

## Basic Usage

### Simple Animation

```html
<div class="bp-animate fade-in">
    Content here
</div>
```

### With Custom Attributes

```html
<div class="bp-animate slide-left" 
     bp-duration="1.5s" 
     bp-delay="0.5s" 
     bp-easing="ease-out">
    Content here
</div>
```

### One-Time Animation

```html
<div class="bp-animate bounce-in" bp-animation-once="true">
    This animation only runs once
</div>
```

## HTML Attributes

### `bp-duration`
Controls how long the animation takes to complete.

```html
<div class="bp-animate fade-in" bp-duration="2s">Content</div>
```

**Default:** `0.6s`

### `bp-delay`
Sets a delay before the animation starts.

```html
<div class="bp-animate fade-in" bp-delay="1s">Content</div>
```

**Default:** `0s`

### `bp-easing`
Controls the animation timing function (how the animation accelerates/decelerates).

```html
<div class="bp-animate fade-in" bp-easing="ease-out">Content</div>
```

**Default:** `ease-in-out`

**Common values:**
- `ease-in`, `ease-out`, `ease-in-out`, `linear`
- `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (custom)

### `bp-animation-once`
If set to `"true"`, the animation only runs once. The element is unobserved after the first trigger.

```html
<div class="bp-animate fade-in" bp-animation-once="true">Content</div>
```

**Default:** `false` (animations can re-trigger)

## Available Animations

### Fade Animations
- `fade-in` - Fades in from transparent
- `fade-out` - Fades out to transparent
- `fade-up` - Fades in while moving up
- `fade-down` - Fades in while moving down

### Slide Animations
- `slide-left` - Slides in from the left
- `slide-right` - Slides in from the right
- `slide-up` - Slides in from below
- `slide-down` - Slides in from above

### Scale Animations
- `scale-up` - Scales up from smaller
- `scale-down` - Scales down from larger
- `zoom-in` - Zooms in from very small (0.5x)
- `zoom-out` - Zooms out from very large (1.5x)

### Rotate Animations
- `rotate-in` - Rotates in from -180 degrees
- `rotate-in-left` - Rotates and slides from left
- `rotate-in-right` - Rotates and slides from right

### Bounce Animations
- `bounce` - Simple bounce effect
- `bounce-in` - Bounces in with scale effect
- `bounce-up` - Bounces up from below
- `bounce-down` - Bounces down from above

### Flip Animations
- `flip-x` - Flips on X axis (vertical flip)
- `flip-y` - Flips on Y axis (horizontal flip)

### Special Effects
- `spin` - Spins 360 degrees while scaling
- `elastic` - Elastic bounce effect with scale

### Combined Animations
- `slide-fade-up` - Slide and fade from below
- `slide-fade-down` - Slide and fade from above
- `slide-fade-left` - Slide and fade from left
- `slide-fade-right` - Slide and fade from right

## CSS Classes

### Base Class
- `bp-animate` - Required base class. Doesn't start animation itself, but enables viewport detection.

### State Classes
- `bp-is-animating` - Automatically added when element enters viewport (triggers animation)
- `bp-is-done-animating` - Automatically added when animation completes

### Example: Styling Based on Animation State

```css
.my-element {
    /* Initial state */
    opacity: 0;
}

.my-element.bp-is-animating {
    /* Animation is running */
    /* Styles applied during animation */
}

.my-element.bp-is-done-animating {
    /* Animation is complete */
    border: 2px solid green;
}
```

## Examples

### Basic Fade In

```html
<div class="bp-animate fade-in">
    <h2>Welcome</h2>
    <p>This content fades in when scrolled into view.</p>
</div>
```

### Custom Duration and Delay

```html
<div class="bp-animate slide-left" 
     bp-duration="2s" 
     bp-delay="1s">
    <p>This slides in after 1 second and takes 2 seconds to complete.</p>
</div>
```

### Custom Easing

```html
<div class="bp-animate bounce-in" 
     bp-easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)">
    <p>This uses a custom elastic easing function.</p>
</div>
```

### One-Time Animation

```html
<div class="bp-animate zoom-in" bp-animation-once="true">
    <p>This animation only runs once, even if you scroll up and down.</p>
</div>
```

### Multiple Elements

```html
<div class="bp-animate fade-in">
    <p>First element</p>
</div>
<div class="bp-animate fade-in" bp-delay="0.2s">
    <p>Second element (staggered)</p>
</div>
<div class="bp-animate fade-in" bp-delay="0.4s">
    <p>Third element (staggered)</p>
</div>
```

### Using Animation Completion State

```html
<div class="bp-animate fade-in" id="my-element">
    <p>Watch me animate!</p>
</div>
```

```css
#my-element.bp-is-done-animating {
    background-color: #d4edda;
    border: 2px solid #28a745;
}
```

## Customization

### Compiling SCSS

If you want to customize the animations, edit `src/scss/bp-animate.scss` and compile it:

```bash
npm run build:css
```

Or manually:

```bash
sass src/scss/bp-animate.scss dist/bp-animate.css
```

### Creating Custom Animations

1. Add your keyframe in `src/scss/bp-animate.scss`:

```scss
@keyframes bpMyCustom {
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

2. Add your animation class:

```scss
.my-custom {
    opacity: 0;
    transform: translateY(50px);

    &.bp-is-animating {
        animation: bpMyCustom 0.6s ease-in-out forwards;
    }
}
```

3. Update the JavaScript mapping in `src/js/bp-animate.js`:

```javascript
const animationMap = {
    // ... existing animations
    'my-custom': 'bpMyCustom'
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (with polyfills for Intersection Observer)

## Project Structure

```
bp-animate/
├── src/
│   ├── js/
│   │   └── bp-animate.js    # JavaScript source
│   └── scss/
│       └── bp-animate.scss  # SCSS source
├── dist/
│   ├── bp-animate.js        # Compiled JavaScript
│   └── bp-animate.css       # Compiled CSS
├── docs/
│   ├── demo.html            # Demo page
│   └── demo.css             # Demo styles
├── package.json             # NPM package configuration
├── CHANGELOG.md             # Version history
├── LICENSE                  # MIT License
├── CONTRIBUTING.md          # Contribution guidelines
└── README.md                # This file
```

## Development

### Building from Source

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Build with minified CSS
npm run build:all

# Watch SCSS files for changes
npm run watch
```

### Available Scripts

- `npm run build` - Build CSS and copy JS to dist
- `npm run build:css` - Build CSS only
- `npm run build:css:min` - Build minified CSS
- `npm run build:js` - Copy JS to dist
- `npm run build:all` - Build everything including minified versions
- `npm run watch` - Watch SCSS files for changes

## License

MIT License - feel free to use this in your projects!

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Versioning

This project follows [Semantic Versioning](https://semver.org/). See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

### Updating Versions

To update the version across all files automatically:

```bash
npm run version:update <new-version>
```

Example:
```bash
npm run version:update 1.2.0
```

This will update:
- `package.json` - version field
- `src/js/bp-animate.js` - @version comment
- `src/scss/bp-animate.scss` - @version comment
- `README.md` - CDN links (if present)

See [VERSIONING.md](VERSIONING.md) for detailed version management guide.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes in each version.

