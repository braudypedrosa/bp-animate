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
- 🔄 **Dynamic Elements** - Automatically detects and animates elements added to the page dynamically

## Installation

### Option 1: jsDelivr CDN (Recommended)

```html
<!-- Latest version from main branch -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@main/dist/bp-animate.css">
<script src="https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@main/dist/bp-animate.js"></script>

<!-- Specific version (recommended for production) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@1.2.2/dist/bp-animate.css">
<script src="https://cdn.jsdelivr.net/gh/braudypedrosa/bp-animate@1.2.2/dist/bp-animate.js"></script>
```

### Option 2: NPM

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

### Option 3: Download Files

Download the following files from the [releases page](https://github.com/braudypedrosa/bp-animate/releases):
- `dist/bp-animate.js` - The JavaScript library
- `dist/bp-animate.css` - The compiled CSS

Then include in your HTML:

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

### Visibility Detection Without Animation

You can also use `bp-animate` without an animation class to just detect when elements are visible:

```html
<div class="bp-animate">
    <p>This will get bp-is-visible class when in viewport</p>
</div>
```

The `bp-is-visible` class is added when the element enters the viewport, regardless of whether it has an animation class.

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

### Dynamically Added Elements

Elements added to the page dynamically (via JavaScript) are automatically detected and animated:

```javascript
// Element added dynamically will be automatically observed
const newElement = document.createElement('div');
newElement.className = 'bp-animate fade-in';
document.body.appendChild(newElement);
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

### Custom Animations

You can also use custom animation classes. The library will automatically detect classes that:
- Start with `animation-` (e.g., `animation-growWidth`)
- Contain animation keywords like `animate`, `grow`, `slide`, `fade`, `scale`, `rotate`, `bounce`, or `flip`

```html
<div class="bp-animate animation-growWidth">
    Custom animation
</div>
```

## CSS Classes

### Base Class
- `bp-animate` - Required base class. Doesn't start animation itself, but enables viewport detection.

### State Classes
- `bp-is-visible` - Automatically added when element enters viewport AND is actually visible (works with or without animation classes)
- `bp-is-hidden` - Automatically added when element is in viewport but NOT actually visible (e.g., opacity: 0, display: none, etc.)
- `bp-is-animating` - Automatically added when element enters viewport and has an animation class (triggers animation)
- `bp-is-done-animating` - Automatically added when animation completes

### Example: Styling Based on Animation State

```css
.my-element {
    /* Initial state */
    opacity: 0;
}

.my-element.bp-is-visible {
    /* Element is in viewport (works with or without animation) */
    /* You can style elements that are just visible */
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

### Example: Visibility Detection Without Animation

```html
<p class="bp-animate">This will get bp-is-visible when scrolled into view</p>
```

```css
.bp-animate {
    opacity: 0.5;
}

.bp-animate.bp-is-visible {
    opacity: 1;
    /* Element becomes fully visible when in viewport */
}
```

### Example: Hidden Element Detection

```html
<p class="bp-animate" style="opacity: 0;">This will get bp-is-hidden when in viewport</p>
```

```css
.bp-animate.bp-is-hidden {
    /* Element is in viewport but hidden */
    /* You can style hidden elements differently */
    border: 1px dashed #ccc;
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

### Multiple Elements with Staggered Animation

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

### Manual Trigger (JavaScript API)

You can manually trigger animations using the JavaScript API:

```javascript
// Trigger animation on an element
bpAnimate.trigger('#my-element');

// Or pass the element directly
const element = document.querySelector('#my-element');
bpAnimate.trigger(element);

// Observe a dynamically added element
const newElement = document.createElement('div');
newElement.className = 'bp-animate fade-in';
document.body.appendChild(newElement);
bpAnimate.observe(newElement);
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11+ (with polyfills for Intersection Observer)

## License

MIT License - feel free to use this in your projects!

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes in each version.
