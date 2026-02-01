# Copilot Instructions for Page Portfolio

## Project Overview
This project is a personal portfolio application built with Angular 17. It showcases experiences, skills, and recent projects. The application is hosted on GitHub Pages for easy access.

## Architecture
- **Main Components**: The application is structured around Angular components, with a focus on modular design. Key components include:
  - `header`: Contains navigation and branding.
  - `experiences`: Displays user experiences.
  - `projects`: Showcases various projects.
- **Service Boundaries**: Services are used for data fetching and business logic, ensuring separation of concerns.

## Developer Workflows
- **Building the Project**: Use `ng build` to compile the application for production.
- **Testing**: Run `ng test` to execute unit tests. Ensure tests are written for each component and service.
- **Debugging**: Utilize Angular's built-in debugging tools and browser developer tools for troubleshooting.

## Project Conventions
- **File Naming**: Use kebab-case for file names (e.g., `header.component.ts`).
- **Component Structure**: Each component should have its own directory containing the TypeScript, HTML, and CSS files.

## Integration Points
- **External Dependencies**: The project relies on Angular Material for UI components. Ensure to install it via `npm install @angular/material`.
- **Cross-Component Communication**: Use Angular services for sharing data between components. EventEmitter can be used for child-to-parent communication.

## Key Files/Directories
- **src/app**: Contains the main application logic and components.
- **src/assets**: Static resources like images and fonts.
- **src/scss**: Global styles for the application.

## Conclusion
These instructions should help AI agents understand the structure and workflows of the Page Portfolio project effectively.