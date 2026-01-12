# Role-Based Chatbot Application

## Objective
A full-stack role-based chatbot application that supports authentication, role separation (Admin & User), and CRUD operations.  
This project is developed as part of a technical assignment to demonstrate clean architecture and real-world full-stack flow.

---

## Features

### Authentication
- User Registration
- User Login
- JWT-based authentication
- Role-based access control (Admin / User)

### User Role
- Chat with the chatbot
- View chatbot responses
- Access user-specific chat page

### Admin Role
- Admin Dashboard
- Role-protected admin routes
- Manage chatbot data (CRUD-ready structure)

---

## Tech Stack

### Frontend
- React.js
- HTML, CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## Project Structure
# Role-Based Chatbot Application

## Objective
A full-stack role-based chatbot application that supports authentication, role separation (Admin & User), and CRUD operations.  
This project is developed as part of a technical assignment to demonstrate clean architecture and real-world full-stack flow.

---

## Features

### Authentication
- User Registration
- User Login
- JWT-based authentication
- Role-based access control (Admin / User)

### User Role
- Chat with the chatbot
- View chatbot responses
- Access user-specific chat page

### Admin Role
- Admin Dashboard
- Role-protected admin routes
- Manage chatbot data (CRUD-ready structure)

---

## Tech Stack

### Frontend
- React.js
- HTML, CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## Project Structure
role-based-chatbot/
│
├── config/
├── middleware/
├── models/
├── routes/
│ ├── auth.js
│ ├── admin.js
│ └── chat.js
├── role-based-chatbot-frontend/
│ ├── src/
│ └── public/
├── server.js
├── package.json
├── .env.example
└── README.md


---
## How to Run the Project

### Backend
```bash
npm install
npm start
```

### Frontend
```bash
cd role-based-chatbot-frontend
npm install
npm start
```

### Notes
- node_modules and .env files are excluded for security.
- .env.example is provided for environment setup.
- Role-based access is enforced using middleware.


