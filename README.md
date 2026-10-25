# Week 6 Profile — Todo Registration App

A responsive React application built with Vite and Tailwind CSS. This project demonstrates multi-page navigation, dynamic routes, shared state management, form validation, and accessibility best practices.

## Features

- **Multi-page navigation:** Home, Registration, and Thank You pages using React Router's `NavLink`.
- **Dynamic routing:** A task details page using the `/items/:itemId` route and `useParams`.
- **404 handling:** A catch-all route for unknown URLs.
- **Shared state:** Form data is shared between components through a common parent.
- **Form state management:** `useReducer` manages registration form updates through named actions.
- **Form validation:** Validates required fields, email format, password length, password confirmation, account type, and terms acceptance.
- **Keyboard accessibility:** Includes a skip link, visible focus indicators, and keyboard-operable interactive elements.
- **Responsive design:** Tailwind CSS styles adapt the interface to different screen sizes.
- **Performance optimization:** Uses lazy-loaded routes.

## Technologies

- React
- Vite
- React Router
- Tailwind CSS
- JavaScript
- Lighthouse

## Getting Started

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Accessibility and Performance Audit

Lighthouse audits were performed using Chrome DevTools with the Mobile configuration. Scores can vary between runs and environments.

### Lighthouse results

| Page | Audit stage | Performance | Accessibility | Best Practices |
|---|---|---:|---:|---:|
| Home | Before changes — production | 55 | 95 | 100 |
| Home | After changes — production | 100 | 100 | 100 |
| Registration | Before changes — production | 55 | 96 | 100 |
| Registration | After changes — production | 99 | 100 | 100 |


### Verified accessibility finding and fix

| Finding | Standard | Fix applied | Verification |
|---|---|---|---|
| Insufficient foreground/background colour contrast on the Home page | WCAG 2.2 — 1.4.3 Contrast (Minimum) | Darkened the small heading, supporting paragraph, and primary button colours to improve readability | The Lighthouse contrast warning disappeared; Accessibility score increased from 95 to 100 |
| Insufficient foreground/background colour contrast on the Registration page | WCAG 2.2 — 1.4.3 Contrast (Minimum) | Adjusted text and button colours for stronger contrast | Registration Accessibility score reached 100 |

The contrast findings on the two pages are the same category of issue. They are documented separately by page and are not claimed to be two distinct accessibility issue types.

### Manual accessibility checks

The following checks were performed manually:

- Verified the skip link appears first when navigating with the keyboard.
- Verified the skip link moves focus to the main content.
- Checked keyboard navigation through interactive elements.
- Confirmed visible focus indicators on interactive elements.

### Audit screenshots


```text
audit-screenshots/
├── home-before.png
├── home-after.png
├── registration-before.png
└── registration-after.png
```


## Project Learning Outcomes

This project provided practical experience with React routing, dynamic URL parameters, shared state, reducer-based form management, responsive styling, keyboard accessibility, Lighthouse testing, and performance optimization.
