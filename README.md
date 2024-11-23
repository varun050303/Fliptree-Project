# Fliptree assignment

This is a full-stack e-commerce web application where users can browse products, manage their cart. It uses lowDB and perenual free api's for prototype level management of objects its not a production grade project, but still its functional for educational or project level purpose

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

---

## Features

- **Secure authentication** using JWTs stored in HTTP-only cookies.
- **Cart management**: Add, remove, and update product quantities.
- **Private routes** for authenticated users.
- **Responsive design** with TailwindCSS.
- **Error boundaries** to gracefully handle runtime issues.

---

## Tech Stack

### Backend
The backend is built with **Node.js** and the following dependencies:
- **Express.js**: For building RESTful APIs.
- **JWT (jsonwebtoken)**: For authentication.
- **bcrypt**: For hashing passwords.
- **dotenv**: For environment variable management.
- **lowdb**: A lightweight local JSON database (for demo purposes).
- **helmet**: To enhance app security.
- **cors**: For handling cross-origin requests.
- **nodemon**: For live server updates during development.

Backend dependencies:
```json
{
  "axios": "^1.7.7",
  "bcrypt": "^5.1.1",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.21.1",
  "helmet": "^8.0.0",
  "jsonwebtoken": "^9.0.2",
  "lowdb": "^7.0.1",
  "nodemon": "^3.1.7"
}
```

Frontend dependencies:
```json
{
  "@tailwindcss/forms": "^0.5.9",
  "axios": "^1.7.7",
  "js-cookie": "^3.0.5",
  "jwt-decode": "^4.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-error-boundary": "^4.0.13",
  "react-router-dom": "^6.22.3",
  "autoprefixer": "^10.4.18",
  "eslint": "^8.57.0",
  "prettier": "^3.2.5",
  "prettier-plugin-tailwindcss": "^0.5.12",
  "tailwindcss": "^3.4.1",
  "vite": "^5.1.6"
}
```


### Setup Instruction
1. Clone the Repository
git clone https://github.com/your-repo.git
cd your-repo
2.  Install Dependencies - Backend
cd server
npm install
  For Frontend
cd client
npm install

### Run Project
1. Start the Backend
npm run server
2. Start the frontend
npm run dev


### Screenshots
![Screenshot 2024-11-23 at 12 18 53 AM](https://github.com/user-attachments/assets/14bc3c06-1a62-4563-a694-1c6823ec3be0)
![image](https://github.com/user-attachments/assets/1b1d0aca-0de2-4bc8-aeef-2d70be488e9f)
![image](https://github.com/user-attachments/assets/73617d6c-fd63-4498-9aab-3771442a0932)
