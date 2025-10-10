# HummloveClone.io
Humm Love 
Vegan Leather Boutique 


Technical Documentation: Front-End E-Commerce Platform

1. Project Overview
This document outlines the technical architecture, development setup, and deployment process for the Humm Love E-commerce Platform. This application is a self-contained, front-end only Single-Page Application (SPA) designed to showcase product listings, cart management, and checkout simulation.
Key Characteristics:
	•	Front-End Only: All application logic (state management, cart updates, mock data fetching) is executed client-side. There is no external API or server-side rendering.
	•	Hosting: The application is hosted directly via GitHub Pages, leveraging a static site deployment model.
	•	Purpose: To demonstrate component-based architecture and state management in a realistic e-commerce environment.
2. Technology Stack
Component
Technology
Description
Framework
React (with Hooks)
Used for building a component-based UI and managing application state.
Styling
Tailwind CSS
A utility-first CSS framework for rapid and responsive UI development.
Package Manager
npm / yarn
Used for managing dependencies and running build scripts.
Routing
React Router DOM
Used to simulate multiple pages (e.g., Home, Product Detail, Cart) within the SPA.
3. Architecture and Data Flow
3.1 Component Hierarchy (Single-Page Application)
The application adheres to a clear component hierarchy, managed by the main App component and React Router.
Component
Responsibility
App.jsx
Defines routes and maintains the global state (products, cart).
ProductList
Displays all products, fetching data from the mock dataset.
ProductDetail
Displays detailed information for a single product.
Cart
Displays items currently in the cart. Handles quantity updates and item removal.
Header / Footer
Navigation and consistent layout elements.
CartContext
Centralized store for cart state and related functions (addToCart, removeFromCart, etc.).
3.2 State Management (Using React Context)
Due to the front-end nature, the core application state is managed using the React Context API to avoid prop-drilling.
State Element
Location
Persistence
Description
products
Hardcoded/Mocked JSON file
Static
The complete catalogue of products.
cartItems
CartContext
Browser localStorage
An array of product objects and their quantities. Persisted to maintain cart contents between sessions.
isCartOpen
App or Global Hook
Transient
Toggles the visibility of the mobile/sidebar cart view.
Data Persistence: The cart state (cartItems) uses the browser's localStorage to simulate persistence. On application load, the system checks localStorage for a saved cart state and initializes the cartItems array with that data.
4. Mock Data Structure
Since there is no back-end API, product data is served from a local JSON file (/src/data/products.json). This structure is standardized to ensure component compatibility.
[   {     "id": 101,     "name": "Elegance Watch",     "price": 249.99,     "description": "A minimalist timepiece for the modern professional.",     "category": "Accessories",     "imageUrl": "/assets/watch.jpg"   },   // ... more products ] 
5. Development and Build Process
5.1 Local Setup
	1	Clone Repository: git clone [repository-url] cd [project-folder]  
	2	Install Dependencies: npm install # or yarn install  
	3	Run Development Server: npm start # or yarn start The application will typically be available at http://localhost:3000.
5.2 Building for Production
To create the optimized static assets required for GitHub Pages deployment:
npm run build # or yarn build 
This command generates a build/ (or dist/) directory containing the minified HTML, CSS, and JavaScript files.
6. Deployment to GitHub Pages
The application utilizes a standard deployment pipeline for SPAs on GitHub Pages, which requires handling the routing correctly.
6.1 Configuration
Due to the nature of GitHub Pages hosting SPAs under a subdirectory (https://[username].github.io/[repo-name]/), the following steps are critical:
	1	Package.json homepage: The homepage field in package.json must be set to the GitHub Pages URL: "homepage": "https://[your-username].github.io/[your-repo-name]"  
	2	Router Basename: The basename prop in the BrowserRouter component (from React Router DOM) must be set to the repository name: <BrowserRouter basename="/[your-repo-name]">     <AppRoutes /> </BrowserRouter>  
6.2 Deployment Script (gh-pages package)
The gh-pages NPM package is used to push the contents of the generated build/ folder to the gh-pages branch, which GitHub Pages serves.
A typical deployment script in package.json looks like this:
"scripts": {     "deploy": "npm run build && gh-pages -d build" } 
To deploy:
npm run deploy 
6.3 Handling 404s (SPA Routing Fix)
GitHub Pages handles actual 404 requests by looking for the 404.html file. Since the application is an SPA, direct access to deep links (e.g., .../[repo-name]/products/101) results in a 404 because the GitHub server cannot find a corresponding static file.
Solution: A copy of the application's index.html file is placed at the root of the served directory and renamed to 404.html. This ensures that on a 404, the browser is served the main application file, allowing React Router to take over and handle the correct routing client-side.
