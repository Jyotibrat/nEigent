# Contact Form API

This project is a simple API for handling contact form submissions. It allows users to send messages through a contact form, which are then processed and sent via email.

## Project Structure

```
contact-form-api
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers
│   │   └── contactController.ts # Handles contact form logic
│   ├── routes
│   │   └── contactRoutes.ts   # Defines routes for the contact form API
│   ├── config
│   │   └── email.ts           # Email service configuration
│   ├── models
│   │   └── Contact.ts         # Defines the structure of a contact message
│   ├── types
│   │   └── index.ts           # Type definitions used throughout the application
│   └── utils
│       └── emailService.ts    # Utility for sending emails
├── .env                       # Environment variables for sensitive information
├── package.json               # npm configuration file
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd contact-form-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration

Create a `.env` file in the root directory and add your email service credentials and other necessary environment variables.

## Usage

To start the server, run:
```
npm start
```

The API will be available at `http://localhost:3000/api/contact`.

## API Endpoints

- **POST /api/contact/send**
  - Sends a contact message.
  - Request body should include:
    - `name`: The name of the sender.
    - `email`: The email address of the sender.
    - `message`: The message content.

## License

This project is licensed under the MIT License.