# Navbar Component

## Requirements

* Fixed at the top
* Provide anchor links to portfolio sections
* Keep navigation content in `src/content/navbar.ts`

## Sections

The current navigation configuration includes `home`, `about`, `experience`, `projects`, `skills`, and `contact` anchors. Ensure every link points to a section that is actually rendered; remove or add links as sections change.

## Behavior

* Clicking a link navigates to its anchor.
* The `Download CV` button is a frontend UI action; do not describe it as dynamic PDF generation.

## Implementation Notes

* Navigation labels and anchor targets are defined in `src/content/navbar.ts`.
* Keep anchor IDs on page sections synchronized with the configured links.
* Add scroll tracking or active-link behavior only when it is implemented and needed.

## Styling

* Dark background with transparency
* Backdrop blur
* Green highlight for active link

## Example Features

* Sticky navigation
* Hover effects
* Download CV button
* Responsive layout when supported by the implementation
