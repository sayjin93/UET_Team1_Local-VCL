# Real Estate Application - UET Team 1 Local-VCL

Welcome to the official repository for the Real Estate Application developed by UET Team 1 Local-VCL. This project aims to create a comprehensive web and mobile application to streamline real estate transactions and provide a seamless user experience for buyers, sellers, and agents.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Introduction

This project is a part of the UET Team 1 Local-VCL initiative to develop innovative solutions in the real estate sector. Our application aims to simplify property listings, enhance search capabilities, and provide users with the tools they need to make informed decisions.

## Features

- **Property Listings**: Browse and search for properties based on various criteria.
- **Advanced Search**: Filter properties by location, price, size, and more.
- **User Profiles**: Create and manage profiles for buyers, sellers, and agents.
- **Real-Time Chat**: Communicate directly with agents and other users.
- **Notifications**: Receive updates on new listings, price changes, and messages.
- **Maps Integration**: View property locations and nearby amenities on interactive maps.
- **Responsive Design**: Optimized for both web and mobile platforms.

## Technology Stack

- **Client**: React.js
- **API**: Node.js, Express.js
- **Mobile**: Java
- **Database**: Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Real-Time Communication**: Socket.io
- **Maps Integration**: Google Maps API

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)
- npm (v6.x or higher)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sayjin93/UET_Team1_Local-VCL.git
   cd UET_Team1_Local-VCL
   ```

2. **Install dependencies:**

   #### For `api`:

   ```bash
   cd api
   npm install
   ```

   #### For `client`:

   ```bash
   cd client
   npm install
   ```

   #### For `socket`:

   ```bash
   cd client
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in `api`, `client` and `socket` directories and add the following variables:

   ##### For `api`:

   ```env
   PORT=your_api_port
   JWT_SECRET_KEY=your_jwt_secret
   DATABASE_URL=your_mongo_db_connection_string
   CLIENT_URL=your_client_url
   ```

   ##### For `client`:

   ```env
   VITE_SOCKET_URL=your_client_url
   VITE_API_URL=your_api_url
   ```

   ##### For `socket`:

   ```env
   SOCKET_PORT=your_socket_port
   CLIENT_URL=your_api_url
   ```

4. **Run the development server:**

   #### For `api`:

   ```bash
   cd api
   npm run dev
   ```

   #### For `client`:

   ```bash
   cd client
   npm run dev
   ```

   #### For `socket`:

   ```bash
   cd api
   npm run dev
   ```

5. **For mobile application:**

   Open `mobile` directory in Android Studio or any other IDE and sync with gradle.

## Usage

- **Web Application**: Open your browser and navigate to `http://localhost:your_port` (by default: 8802)
- **Mobile Application**: Use an emulator or physical device to run the application using Expo or directly on Android.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for more details.

## Contact

For any inquiries or feedback, please contact at:

- **Email**: jkruja2@uet.edu.al
- **GitHub Issues**: [Create an Issue](https://github.com/sayjin93/UET_Team1_Local-VCL/issues)
