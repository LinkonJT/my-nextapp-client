# WallScape - Wallpaper Selling Website

## Project Description
WallScape is a modern wallpaper-selling platform built using **Next.js**. Users can browse and purchase high-quality wallpapers of athletes, celebrities, and popular figures. Wallpapers are available in **four different sizes** with varied price ranges starting from **$20**. The platform includes a **protected dashboard** for logged-in users, where they can manage purchases and access exclusive features.

Key Features:
- Browse wallpapers by category and sport
- Multiple sizes and print options
- Protected dashboard for registered users
- Login and registration with **NextAuth**
- Responsive design with modern UI

## Tech Stack
- **Frontend & Backend:** Next.js 13 (App Router)
- **Authentication:** NextAuth.js
- **Database:** MongoDB (storing users and wallpapers)
- **UI:** Tailwind CSS & DaisyUI / Flowbite
- **Client-side:** React, React Hooks
- **Notifications:** react-toastify
- **Deployment:** Vercel

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/LinkonJT/my-nextapp-client.git
cd my-nextapp-client


# Install dependencies

npm install

# Set environment variables
# Create a .env file in the root directory and add:
DB_NAME=yourDBName
DB_USER=yourDBUser
DB_PASS=yourDBPassword
NEXTAUTH_URL=https://my-nextapp-client.vercel.app
NEXTAUTH_SECRET=your_random_secure_string


# Run locally
Run locally
Your app will be available at http://localhost:3000

Deployment
Push your repository to GitHub
Connect the repo in Vercel
Add the same environment variables in Vercel project settings
Deploy the project

| Route                     | Method     | Description                                               |
| ------------------------- | ---------- | --------------------------------------------------------- |
| `/`                       | GET        | Home page                                                 |
| `/products`               | GET        | List all wallpapers                                       |
| `/products/[id]`          | GET        | View wallpaper details                                    |
| `/login`                  | GET / POST | Login page using NextAuth credentials                     |
| `/register`               | GET / POST | Register new users                                        |
| `/dashboard`              | GET        | Protected user dashboard (logged-in users only)           |
| `/dashboard/add-products` | GET / POST | Add new wallpaper (admin functionality if implemented)    |
| `/api/auth/[...nextauth]` | GET / POST | NextAuth API routes for authentication                    |
| `/api/wallpapers`         | GET        | Fetch all wallpapers                                      |
| `/api/auth/register`      | POST       | Register new users                                        |
| `/api/auth/login`         | POST       | Custom login endpoint (if used with credentials provider) |


# Notes

Users need to be logged in to access the dashboard.

Wallpapers can have different sizes and print types, each with its own price.

NextAuth is used for authentication without JWT for now, with optional Google login.

Database seeding can be done manually or with a script using the JSON wallpapers data.

Links

GitHub Repository: https://github.com/LinkonJT/my-nextapp-client

Live Site (Vercel): https://my-nextapp-client.vercel.app/