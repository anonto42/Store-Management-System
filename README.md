# Quiet Chat
*live link*: https://quiet-chat.com

## Overview
Quiet Chat is a privacy-focused real-time chat application that ensures complete user privacy by not storing any message data. Instead, messages are hashed every time, making them unreadable and non-retrievable after transmission.

## Features
- 🔒 **Privacy-first approach** – No message data is stored.
- 🔄 **Hashed messaging** – Messages are hashed before transmission.
- ⚡ **Real-time communication** – Seamless chat experience.
- 🛡️ **Secure & lightweight** – Designed for security and efficiency.

## Usage
1. Open the app and create a chat room.
2. Start messaging—your messages will be hashed in real-time.
3. No message data is stored on the server, ensuring complete privacy.

## Security Implementation
- Messages are hashed before transmission using a secure hashing algorithm.
- WebSockets provide real-time encrypted communication.
- No logs or stored chat history to ensure complete anonymity.

## Technologies Used
- **Frontend:** React / Next.js (if applicable)
- **Backend:** Node.js with Express
- **Database:** None (stateless architecture)
- **Security:** Hashing algorithms (e.g., SHA-256, bcrypt, or others)
- **WebSocket:** For real-time chat

## Installation for developers
### Prerequisites
- Node.js & npm installed
- Git installed

### Steps
```bash
# Clone the repository
git clone https://github.com/anonto42/quiet-chat.git

# Navigate to the project folder
cd quiet-chat

# Install dependencies
npm install

# Start the application
npm start
```

## Contributing
Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a pull request.

## License
This project is licensed under the MIT License. See `LICENSE` for details.

## Author
Developed by [Md Sohidul Islam Ananto](https://github.com/anonto42).
