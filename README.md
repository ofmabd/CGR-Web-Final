# CGR Web Final

Frontend website for **Cherrie Give Resultz (CGR)** HR consulting services.

This project was generated from a Figma design and converted into a React application.
The goal is to provide a scalable and maintainable structure for building the CGR website.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

---

## Project Structure

```
src/
 ├── app
 │   ├── components
 │   │   ├── Navigation.tsx
 │   │   └── Footer.tsx
 │   │
 │   ├── pages
 │   │   ├── Home.tsx
 │   │   ├── HRServices.tsx
 │   │   ├── Training.tsx
 │   │   ├── Contact.tsx
 │   │   └── ResourceHub.tsx
 │   │
 │   └── routes.ts
 │
 ├── styles
 │   ├── index.css
 │   ├── theme.css
 │   └── tailwind.css
 │
 └── main.tsx
```

### Key Files

- `Home.tsx` → Homepage layout and hero section
- `Navigation.tsx` → Top navigation bar
- `Footer.tsx` → Website footer
- `routes.ts` → Page routing configuration
- `styles/` → Global styling and Tailwind configuration

---

## Running the Project Locally

Clone the repository:

```
git clone https://github.com/ofmabd/CGR-Web-Final.git
```

Navigate into the project:

```
cd CGR-Web-Final
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

The site will run locally at:

```
http://localhost:5173
```

---

## Development Notes

- The site uses **component-based architecture**.
- UI components are located in `src/app/components`.
- Page-level layouts are in `src/app/pages`.
- Styling is handled primarily through **Tailwind utility classes**.

---

## Contributing

1. Pull the latest changes:

```
git pull origin main
```

2. Create a new branch:

```
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```
git add .
git commit -m "Describe your change"
```

4. Push your branch:

```
git push origin feature/your-feature-name
```

5. Open a Pull Request on GitHub.

---

## Notes

- Do not commit the `node_modules` folder.
- Dependencies are managed through `package.json`.
- Run `npm install` after pulling new changes.

---

## About

This is a code bundle for Website Guidelines Upload. The original project is available at https://www.figma.com/design/iR2sHNtkxHxZfRh2RT3buN/Website-Guidelines-Upload.

## Test commit by Benjamin
