JobZipa — Frontend

JobZipa is a modern job-search platform designed to connect job seekers with employment opportunities through a simple and user-friendly web application.

This repository contains the frontend application of JobZipa.

🚀 Live Application

"Visit JobZipa" (https://jobzipa-frontend.vercel.app)

📌 Overview

JobZipa provides a platform where users can discover job opportunities, interact with job listings, and manage their job-search experience through a responsive web interface.

The frontend communicates with a separate backend API responsible for authentication, data management, and other server-side operations.

✨ Features

- User registration and authentication
- Browse available job opportunities
- Search and explore job listings
- Bookmark jobs
- Responsive user interface
- User profile functionality
- Job posting interface
- Admin dashboard interface
- Notifications and user feedback
- Interactive charts and data visualization
- Image cropping and profile image management
- Client-side routing
- API integration

🛠️ Tech Stack

Frontend

- React
- JavaScript
- React Router
- Tailwind CSS
- Axios
- Framer Motion
- React Hot Toast
- Recharts
- Quill
- React Helmet Async
- Heroicons

Build & Development

- Vite
- ESLint
- PostCSS

🏗️ Project Architecture

JobZipa is structured as a full-stack application with the frontend and backend maintained in separate repositories.

                    JobZipa
                       │
              ┌────────┴────────┐
              │                 │
           Frontend           Backend
              │                 │
        React + Vite       Django REST API
              │                 │
              └────────┬────────┘
                       │
                   Database
                  PostgreSQL

Related Repository

Backend:
"JobZipa Backend" (https://github.com/jordanyaaron/jobzipa-backend.git)
«The backend repository will be linked here once the final repository URL is added.»

📂 Project Structure

src/
├── assets/
├── components/
├── pages/
├── context/
├── hooks/
├── services/
├── utils/
└── ...

⚙️ Getting Started

Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

Installation

Clone the repository:

git clone https://github.com/jordanyaaron/jobzipa-frontend.git

Navigate into the project:

cd jobzipa-frontend

Install dependencies:

npm install

Environment Variables

Create a ".env" file in the root directory and add the required environment variables.

VITE_API_URL=your_backend_api_url

«Do not commit sensitive credentials or secret keys to GitHub.»

Run the Development Server

npm run dev

The application will be available at the local development URL provided by Vite.

Build for Production

npm run build

Preview Production Build

npm run preview

📸 Screenshots

Screenshots of the application will be added here to demonstrate the main user interface and functionality.

Home Page

Add screenshot here

Job Listings

Add screenshot here

User Dashboard

Add screenshot here

Admin Dashboard

Add screenshot here

🔐 Authentication

The frontend communicates with the JobZipa backend API to handle user authentication and protected application features.

Authentication-related functionality is integrated into the frontend application and connected to the backend API.

🌐 Deployment

The frontend is deployed using Vercel.

Live Application:
https://jobzipa-frontend.vercel.app

🔗 Related Links

- Live Application: https://jobzipa-frontend.vercel.app
- Frontend Repository: https://github.com/jordanyaaron/jobzipa-frontend
- Backend Repository: YOUR_BACKEND_REPOSITORY_LINK

🚧 Future Improvements

Potential improvements include:

- Advanced job filtering
- Improved search functionality
- Additional employer features
- Application tracking
- Enhanced analytics
- Improved accessibility
- Automated testing
- Performance optimization

👨‍💻 Author

Jordan Daniel

Software Developer passionate about building practical digital solutions and solving real-world problems through technology.

GitHub:
https://github.com/jordanyaaron