# Navbar Component

## Requirements

* Fixed at the top
* Provide anchor links to portfolio sections
* Keep navigation text and labels in `src/content/pt-BR.json` and `src/content/en-US.json`

## Sections

The current navigation configuration includes `home`, `about`, `experience`, `projects`, `skills`, and `contact` anchors. Ensure every link points to a section that is actually rendered; remove or add links as sections change.

## Behavior

* Clicking a link navigates to its anchor.
* The language switch uses the `PT-BR` and `EN` positions to switch all rendered portfolio copy between Brazilian Portuguese and English.
* Expose the switch state with `role="switch"` and `aria-checked`.
* The selected language is saved in local storage and applied to the document's `lang` attribute.
* The `Download CV` button is a frontend UI action; do not describe it as dynamic PDF generation.

## Implementation Notes

* Navigation labels and anchor targets are defined in each locale JSON file under `navbar.links`.
* The supported locale codes are `pt-BR` and `en-US`; keep both JSON files in sync.
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
