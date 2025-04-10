### EmployeeWise – User Management App
EmployeeWise is a React-based web application that integrates with the Reqres API to perform user authentication, listing, editing, and deletion. This application is built in levels to demonstrate frontend skills and API integration capabilities.

### 📚 Table of Contents
Tech Stack

Features

Installation and Setup

Project Structure

App Flow

Styling

Deployment

License

Contributing

Contact

##⚙️ Tech Stack
React.js – Frontend framework

Bootstrap – UI components & responsive layout

Axios – API communication

React Router DOM – Routing management

React Toastify – User-friendly alert notifications

Reqres API – Dummy API for user management

### 🚀 Features
## Level 1: Authentication
Login with valid credentials using POST /api/login

Stores returned token in localStorage

Redirects to All Users page on success

## Level 2: Paginated User List
Fetches users using GET /api/users?page=1

Responsive card layout displaying name, email, and avatar

Pagination implemented with forward/backward navigation

Lazy-loading behavior for smooth transitions

## Level 3: Edit/Delete Users
Edit button opens a pre-filled form to update name/email

Update via PUT /api/users/{id}

Delete any user with DELETE /api/users/{id}

Success/error feedback using toast notifications

Automatically fills deleted slots with next-page users

### 💻 Installation and Setup
bash
Copy
Edit
git clone https://github.com/saikrishna1909/EmployeWise.git
cd EmployeWise
npm install
npm start

### 🗂️ Project Structure
EmployeWise/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── components/
│       ├── Context/
│       │   └── UserContext.js
│       ├── AllUsers/
│       │   └── AllUsers.js
│       ├── UserDetails/
│       │   └── UserDetails.js
│       └── UserLogin/
│           ├── UserLogin.js
│           └── UserLogin.css
├── package.json
└── README.md

### 🔁 App Flow
## Login
User enters email & password → hits API → stores token → redirects to AllUsers.

## User Listing
Displays paginated users with avatars and emails. Supports forward/back navigation.

## Edit/Delete

Edit opens form → pre-fills data → updates user with success toast.

Delete removes user from list and shifts remaining users forward.

## 🎨 Styling
Responsive design using Bootstrap & custom CSS

Toast notifications for all user interactions

Card layout for user display

## 🌐 Deployment
This app can be deployed using:

Netlify

Vercel

GitHub Pages

✅ Netlify Deployment Steps
Push your code to GitHub

Login to Netlify and click "New Site from Git"

Connect your GitHub repo

Set build command: npm run build

Set publish directory: build/

Deploy your site 🎉

## 📜 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute.

## 🤝 Contributing
Contributions are welcome!

Fork the repository

Create a new branch

Make changes and test thoroughly

Submit a pull request

## 📬 Contact
## 📧 Email: kondasaikrishna13@gmail.com

## 💻 GitHub: saikrishna1909

