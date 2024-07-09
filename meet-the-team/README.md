# U78023684
## Components

### App.js

The root component of the application. It imports and uses the `Header`, `Subtitle`, and `Gallery` components to build the main page.

### components/Header.js

Contains two components: `Header` and `Subtitle`, which render the main title and subtitle of the page.

### components/Gallery.js

The `Gallery` component receives an array of team members as props and maps over them to render a `Profile` component for each member.

### components/Profile.js

The `Profile` component displays the name, role, and photo of a team member.

## Styling

The styling is done using a simple CSS file (`App.css`), which provides basic styles for the layout and components.