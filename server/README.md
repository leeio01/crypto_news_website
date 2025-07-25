# Crypto News Bot – Backend

Welcome to the backend of the **Crypto News Bot** project. This Node.js/Express.js server provides the RESTful API that powers the frontend application and interacts with the MongoDB database for storing and retrieving crypto-related news and user interactions.

---

## 👨‍💻 Author

**Muhammad Abu Bakar**

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime environment
- **Express.js** – Fast, unopinionated web framework
- **MongoDB** – NoSQL document database
- **Mongoose** – ODM for MongoDB
- **CORS** – Cross-Origin Resource Sharing middleware
- **Dotenv** – Environment variable management
- **Nodemon** – Auto-restarts server during development

---

## 📂 Folder Structure

server/
├── config/ # Database configuration
├── controllers/ # Route controllers for business logic
├── models/ # Mongoose schemas/models
├── routes/ # Express route handlers
├── middleware/ # Custom middleware (e.g., error handling)
├── .env # Environment variables (not committed)
├── server.js # Main entry point
└── README.md # This file

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/crypto_news_bot.git
cd crypto_news_bot/server

2. Install dependencies
npm install

3. Create a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Start the server
# For production
node server.js

# For development
npm run dev

📡 API Endpoints
Method	Route	Description
GET	/api/news	Get all news items
POST	/api/news	Add a new news item
GET	/api/news/:id	Get a specific news item
DELETE	/api/news/:id	Delete a specific news item
PUT	/api/news/:id	Update a specific news item

You can customize these based on your actual route structure.

🌐 Cross-Origin Resource Sharing
This project uses cors to allow connections from the frontend (http://localhost:5173 or production domain).

🔐 Environment Variables
Add your credentials in a .env file (not committed to GitHub):

MONGO_URI=your_mongo_connection_string
PORT=5000


🧪 Testing
You can use Postman or Thunder Client to test the API endpoints manually.

📝 License
This project is open-source under the MIT License.