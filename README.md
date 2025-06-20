Greenforce - E-commerce React Frontend
Greenforce is a modern e-commerce frontend built with React and TypeScript, leveraging Vite for a fast development experience. It integrates with Supabase for backend services and includes a rich set of UI components powered by Radix UI, along with Redux Toolkit for state management and Tailwind CSS for styling.
Table of Contents

Features
Technologies Used
Prerequisites
Installation
Running the Application
Project Structure
Available Scripts
Backend Integration
Contributing
License

Features

Product browsing with search, filter, and sort capabilities
Shopping cart management with add/remove functionality
User authentication using Supabase (login, signup)
Responsive design using Tailwind CSS
Real-time data handling with React Query
State management with Redux Toolkit
Interactive UI components with Radix UI

Technologies Used

React & TypeScript: For building dynamic, type-safe UIs
Vite: Fast build tool and development server
Supabase: Backend-as-a-Service for authentication and database
Redux Toolkit: For state management
React Query: For data fetching and caching
Radix UI: Accessible and customizable UI components
Tailwind CSS: Utility-first CSS framework
React Hook Form & Zod: For form handling and validation
Lucide React: Icon library
Recharts: For data visualization

Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher)
npm (v7 or higher) or Bun
A modern web browser (e.g., Chrome, Firefox)

Installation

Clone the repository:git clone https://github.com/jkadivar/ecommerce-React-Frontend.git


Navigate to the project directory:cd ecommerce-React-Frontend


Install dependencies:npm install

orbun install



Running the Application

Start the development server:npm run dev

orbun run dev


Open your browser and navigate to http://localhost:5173 (default Vite port).
To build for production:npm run build

or for development build:npm run build:dev



Project Structure
Greenforce/
├── node_modules/           # Dependency files
├── public/                 # Static assets
├── scripts/                # Custom scripts
├── src/
│   ├── components/         # Reusable React components
│   ├── context/            # Context API or custom contexts
│   ├── hooks/              # Custom React hooks
│   ├── integrations/       # Integration logic (e.g., Supabase)
│   ├── lib/                # Utility libraries
│   ├── pages/              # Page components
│   ├── store/              # Redux store configuration
│   ├── App.css             # Global styles
│   ├── App.tsx             # Main App component
│   ├── index.css           # Base styles
│   ├── index.html          # Entry HTML file
│   ├── main.tsx            # React entry point
│   ├── vite-env.d.ts       # TypeScript Vite environment types
│   └── supabase/           # Supabase client setup
├── env/                    # Environment variables
├── .gitignore              # Git ignore file
├── bun.lockb               # Bun lock file
├── components.json         # Component metadata (if applicable)
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package-lock.json       # npm lock file
├── package.json            # Project metadata and dependencies
├── postcss.config.js       # PostCSS configuration
├── OUTLINE                 # Outline file (if applicable)
├── TIMELINE                # Timeline file (if applicable)

Available Scripts

npm run dev: Runs the app in development mode
npm run build: Builds the app for production
npm run build:dev: Builds the app in development mode
npm run lint: Runs ESLint to check code quality
npm run preview: Previews the production build

Backend Integration
This project uses Supabase for backend services. To set up:

Create a Supabase project at supabase.com.
Copy your Supabase URL and anon key into a .env file:VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key


Ensure the Supabase client in src/supabase/ is configured to use these environment variables.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (`git push origin feature/your

