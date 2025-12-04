# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-01-XX

### Added
- Added `bp-is-visible` class that gets added to all elements with `bp-animate` when they enter the viewport
- `bp-is-visible` works independently of animation classes - useful for visibility detection without animations
- Elements with only `bp-animate` class (no animation class) now get `bp-is-visible` when scrolled into view

### Changed
- `bp-is-visible` is now added to all visible elements, regardless of whether they have animation classes
- Improved separation between visibility detection and animation triggering

## [1.1.1] - 2024-01-XX

### Fixed
- Fixed issue where fixed/absolute positioned elements with `opacity: 0` were incorrectly triggering animations
- Fixed visibility detection to properly handle elements that are intentionally hidden on load

### Added
- Added MutationObserver to automatically detect when elements become visible dynamically (via class or CSS changes)
- Added public API `bpAnimate.trigger(element)` to manually trigger animations on elements
- Added support for `data-bp-allow-hidden-animate` attribute to explicitly allow animations on fixed/absolute hidden elements

### Changed
- Improved visibility check to require explicit permission for fixed/absolute elements with `opacity: 0`
- Elements with inline `opacity: 0` style are now correctly identified as intentionally hidden

## [1.1.0] - 2024-01-XX

### Fixed
- Fixed visibility detection issue where elements with `opacity: 0` (without animation classes) were incorrectly triggering animations
- Improved `isElementVisible()` function to properly check if elements are actually visible before triggering animations
- Elements hidden via `opacity: 0`, `display: none`, `visibility: hidden`, or zero dimensions are now correctly ignored

### Changed
- Visibility check now requires elements with `opacity: 0` to have a valid animation class to be considered visible
- Improved performance of visibility detection logic

## [1.0.0] - 2024-01-XX

### Added
- Initial release of BP Animate library
- Viewport detection using Intersection Observer API
- 25+ built-in animations (fade, slide, scale, rotate, bounce, flip, etc.)
- HTML attribute support for custom duration, delay, easing, and one-time animations
- Animation completion detection with `bp-is-done-animating` class
- Keyframe-based animations for smooth performance
- SCSS source files for easy customization
- Comprehensive documentation and demo page

### Features
- Zero dependencies - pure vanilla JavaScript
- Lightweight and performant
- Full control over animation timing and behavior
- Support for custom animations
- Browser compatibility (Chrome, Firefox, Safari, Edge)

