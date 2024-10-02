
# Role-Based Authentication Project

## Description
This project implements a role-based authentication system, allowing users to register and log in based on their assigned roles: **Admin**, **Manager**, and **User**. Each role has distinct access levels and permissions within the application.

## Features
- **User Registration**: Users can register with specific roles.
- **Role-Based Login**: Secure login using user credentials.
- **Access Control**:
  - **Admin**: Manage users and application settings.
  - **Manager**: View and manage resources.
  - **User**: Access personal profile and make limited changes.

## Technologies Used
- **Node.js**: Backend server environment.
- **Express.js**: Web framework for building the API.
- **MongoDB**: Database for storing user information.
- **JSON Web Tokens (JWT)**: For secure authentication.

## Installation

### Prerequisites
- Node.js (vX.X.X)
- MongoDB (local installation)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Amitkr77/AuthShield.git
   cd AuthShield
2. **Install dependencies**:
   ```bash
   npm install

3. **Set up environment variables**:
    Create a .env file in the root directory and add your configurations:

    JWT_SECRET=my_jwt_secret
    MONGODB_URI=mongodb://127.0.0.1:27017/User
4. **Start the application**:
    ```bash
    npm start

## Usage
Use the provided API endpoints to register and log in users. Admin users can manage roles and permissions through specific endpoints.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature

3. Commit your changes:
   ```bash
   git commit -m 'Add new feature'
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
5. Create a pull request.

## Acknowledgments
  - Inspired by various role-based authentication tutorials.
  - Thanks to the contributors of the libraries used.
## Contact

**Author**: Amit Kumar

**Email**: amitroyk99@gmail.com
