## Boilerplate Design System

### Requirements

The design system has a BoilderplateTemplate component that:
- take props that become the following elements
  - a title
  - a description
  - a github link
  - a link to docs to most relevant guide or page
- wraps any children, styling them
- changes the page or root style
  - a nice background

The design system should also provide common UI elements such as:
- dropdown selectors
- wallet/profile display with logout button

The design system should be maintained on npm with semver, via automatic publishing based on version tags


### Open questions

- pure CSS vs library (tailwind)
  - think about the debugging experience for downstream projects

