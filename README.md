# RainFocus Code Assessment

Prepared based on sample designs provided for assessment.

## Getting started

Requires Node.js and npm.

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build in /build
npm run format   # format src with Prettier
```

## Tech stack

- React 19 + TypeScript (Create React App)
- React Router 7 (`HashRouter`)
- Sass

## Project structure

```
src/
  App.tsx              App shell: sidebar, mobile top bar, routes
  App.scss             All styles
  config/navItems.tsx  Nav items and their routes
  components/          Sidebar, Search, EventHeader, StepCard, SidebarContext
  pages/               Attendees, Placeholder
  styles/              Sass variables
  assets/              Icons and images
```

## Approach

- React chosen as frameword due to familiarity
- Navigation/routes placed in config/navItems as a single source of truth for App.tsx and Sidebar.tsx
- HashRouter chosen for routing based on requirement to run in browser without building
- Components used where possible for reusability + readability
- Responsive design centers mostly around the use of flex/grid for dynamic resizing of elements. For mobile/tablet screens, the sidebar is replaced by a top bar with a collapsible side panel that slides in/out as this is common functionality and familiar to most users.

### Accessibility

- Basic accessibility standards are met (alt text for images, screen-reader consideration)
- When run through google lighthouse, recieves an accessibility score of 96. The only error is a lack of significant contrast between background and foreground colors anywhere the $color-medium-grey is used (user icon, mega-nav). These colors were pulled directly from Figma so I have not altered them to pass accessibility for the sake of the assessment.

## Assumptions

- In a real-world scenario I would work with the designers/project lead for clarification in some areas. Some assumptions were made to best fit the designs:
    - Unclear as to whether the RainFocus logo is the product logo with the summit logo being the first "organization" or if both are organizations. I assumed the product is RainFocus branded and treated the summit as the only organization.
    - In the designs, the active page is the mega nav is "Attendees". The content of the main area seems to align closer to the "Guide" screen, kept it accurate to the design for sake of assessment. 
    - For the subnav under Attendees, I assumed the first child should be selected since I'm unaware if the parent navigation has it's own content. 
    - Instead of assuming user stories/functionality for the "edit event" feature, I've left this button without function. 
