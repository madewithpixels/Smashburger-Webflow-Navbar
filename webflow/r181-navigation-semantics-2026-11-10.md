# Lite example navigation names and structure

10 November 2026 — Codex (night shift), brief #404. Serves R-181.

## Findings

- The plain and styled review examples each have one named `nav` landmark. Their names now distinguish the examples: “Plain example navigation” and “Styled example navigation”.
- Each trigger is a `summary` inside its own `details`; its accessible name now identifies the matching example menu. The visible word remains “Menu”. The navigation panel is the next sibling of `details`, matching the existing native fallback and runtime structure.
- The workbench’s closed and open references also each have one distinctly named navigation landmark and trigger. Their headings identify which static state each sample shows.
- The review-example backdrops use `aria-hidden="true"` and have no role or label, so they remain decorative. The separate workbench swatch is deliberately exposed as an image with a descriptive label.

## Limits

This is a local markup review. It does not establish what a browser or screen reader announces, or how Webflow Canvas or a published page behaves. No Webflow content was changed.
