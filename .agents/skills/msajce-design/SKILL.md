---
name: msajce-design
description: Design system rules and guidelines for MSAJCE website, specifying colors and fonts to be used in all edits.
---

# MSAJCE Design System Guidelines

Whenever modifying files on the MSAJCE website, adhere to the following design assets, colors, and typography rules.

## Color Palette

Use ONLY these five colors for the entire site:
*   **Primary Blue**: `#005DA6`
*   **White**: `#FFFFFF`
*   **Dark Gray 1**: `#616161`
*   **Dark Gray 2**: `#595959`
*   **Black**: `#000000`

## Theme Toggle Rule (Light & Dark Theme)

*   **Rule**: Every page, component, or layout added or modified must support both Light and Dark themes.
*   **Default State**: The website defaults to **Dark Mode** (black backgrounds, white headings/content, following the UAL editorial aesthetic).
*   **Implementation**: Use CSS custom variables mapped to the 5 colors. When the `light-theme` class is applied to the `<body>` element, swap the variable values (e.g., set background to `#FFFFFF` and text/borders to `#000000` / `#616161`).

## Typography

*   **Primary Typeface**: `Switzer` (Neo-Grotesque, highly clean and modern, similar to Inter/Helvetica, used for all headings, body, and UI elements)
*   **Alternative Typeface**: `Ubin Sans` (decorative/clean as needed) or standard sans-serif fallback.

## Design Aesthetic (UAL Style + Apple Dropdown)

*   **Style**: Bold, minimalist grid structure, strong margins, and large, editorial type hierarchy. Inspired by UAL (University of the Arts London) with grid cells containing images, text, and clean borders.
*   **Animations & Dropdown**: Apple-like smooth full-width drop-down menus with clean transitions, blur effects (backdrop-filter), and category listings.

## Backdrop-Filter & Sticky Header Checklist (Crucial)

To prevent breaking header blur or sticky layout when styling the page:
1. **Always declare both standard and prefixed backdrop filters**:
   ```css
   -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
   backdrop-filter: blur(24px) saturate(180%) !important;
   ```
   *Warning*: Never write `-webkit-backdrop-filter` alone. Modern Chromium browsers require the standard `backdrop-filter` property to trigger hardware-accelerated blur compositing passes.
2. **Elevate Specificity**:
   Use `#header.main-header` (ID + class combo) for all header custom overrides to ensure rules aren't silently overridden by lower-specificity properties or vendor-prefixed resets.
3. **Turbopack Compiler Loops**:
   If the browser shows an infinite loading spinner or console output displays `TurbopackInternalError` panic trace loops, do not attempt to patch files to fix it. Kill the active Next.js process (`npm run dev`) and start it fresh to clear the compilation cache.
