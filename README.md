# StudyNotion

## Live Preview: [StudyNotion](https://study-notion-six-sable.vercel.app/)

## Overview

StudyNotion is a full-stack edtech platform built using the MERN stack. It provides an interactive learning experience with secure authentication, role-based access, and seamless payment processing.

## Features

- **Course Management**: Users can create, manage, and enroll in courses.
- **Secure Authentication**: JWT-based authentication for secure user sign-ins and session management.
- **Role-Based Access**: Streamlined user experience with different interfaces for students, instructors, and admins.
- **Payment Integration**: Razorpay payment gateway for secure and seamless transactions.
- **State Management**: Redux Toolkit for efficient state handling and improved performance.

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Redux Toolkit


### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Razorpay Integration

## Installation

### Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Setup

1. Clone the repository:
```bash
git clone https://github.com/aryan-aswal/EdTech-Website
cd StudyNotion
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```
MAIL_HOST = your_mail_host
MAIL_PASS = your_mail_password
MAIL_USER = your_mail_username
PORT = 5000
MONGODB_URL = your_mongodb_url (MongoDB URI)
JWT_SECRET = your_jwt_secret 
FOLDER_NAME = your_folder_name
RAZORPAY_KEY = your_razorpay_key 
RAZORPAY_SECRET = your_razorpay_secret
WEBHOOK_SECRET = your_webhook_secret
CLOUD_NAME = your_cloud_name
API_KEY = your_api_key
API_SECRET = your_api_secret
```

4. Create a `.env` file in the client directory with the following variables:
```
VITE_API_URL = your_server_base_url
VITE_API_RAZORPAY_KEY = your_razorpay_key
```

4. Start the backend server:
```bash
cd server
npm run dev
```

5. Start the frontend client:
```bash
cd client
npm run dev
```

The application should now be running on `http://localhost:5173` with the backend server on `http://localhost:5000`.

## Usage

1. Sign up or log in as a student or instructor.
2. Browse available courses and enroll in them.
3. Instructors can create and manage course content.
4. Payments for premium courses are processed via Razorpay.

## Folder Structure

```
/StudyNotion
├── client/          # Frontend React application
│   ├── public/      # Static files
│   ├── src/         # Source files
│   └── package.json # Frontend dependencies
├── server/          # Backend Node.js application
│   ├── config/      # Configuration files
│   ├── controllers/ # Request handlers
│   ├── models/      # Database models
│   ├── routes/      # API routes
│   └── package.json # Backend dependencies
├── .gitignore       # Git ignore file
└── README.md        # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Submit a Pull Request

## Contact

If you have any questions or suggestions, please feel free to reach out:

- GitHub Issues: [Create an issue](https://github.com/aryan-aswal/EdTech-Website)
- Email: [aryanaswal45@gmail.com](mailto:aryanaswal45@gmail.com)
- LinkedIn: [Aryan Aswal](https://www.linkedin.com/in/aryanaswal/)

