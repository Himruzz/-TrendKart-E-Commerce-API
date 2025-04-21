# 🛒 TrendKart E-Commerce API

TrendKart is a backend API built using **Node.js**, **Express.js**, and **MongoDB** for a full-stack e-commerce application. This API manages categories, brands, products, customers, and orders.

## 🚀 Features

* 🗂️ Category Management (CRUD)
* 🏷️ Brand Management (CRUD)
* 📦 Product Management (CRUD with category/brand relation)
* 👤 Customer Management (Register/Login/Update)
* 📑 Order Management (Create/View/Status update)
* 🔐 Authentication & Authorization

## 🧰 Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose)
* **Authentication**: JWT (JSON Web Tokens)
* **Environment**: REST API

## 📁 Folder Structure

```
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── .env
├── server.js
```

## 📦 Installation

```bash
git clone https://github.com/yourusername/trendkart-api.git
cd trendkart-api
npm install
```

## ⚙️ Environment Setup

Create a `.env` file in the root directory and add:

```env
PORT=5009
MONGO_URI=mongodb://localhost:27017/trendkart
JWT_SECRET=your_secret_key
```

## ▶️ Run the Server

```bash
# For development
npm run dev

# For production
npm start
```

## 📬 API Endpoints

### 🔸 Category

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/categories | Get all categories |
| POST | /api/categories | Create a category |
| PUT | /api/categories/:id | Update a category |
| DELETE | /api/categories/:id | Delete a category |

### 🔸 Brand

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/brands | Get all brands |
| POST | /api/brands | Create a brand |
| PUT | /api/brands/:id | Update brand |
| DELETE | /api/brands/:id | Delete brand |

### 🔸 Product

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/products | List products |
| POST | /api/products | Create product |
| GET | /api/products/:id | Get product |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |

### 🔸 Customer

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/customers/register | Register |
| POST | /api/customers/login | Login |
| GET | /api/customers/profile | Get profile |

### 🔸 Order

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/orders | Create order |
| GET | /api/orders | Get user orders |
| PUT | /api/orders/:id/status | Update status |

## 🛡️ Security

* Passwords are hashed using **bcrypt**
* Protected routes using **JWT**
* Input validation using **express-validator**

## 📷 Screenshot

Refer to the image below for a visual preview of the frontend interface powered by this API:

[Screenshot placeholder]

## 📽️ Demo

(Attach the video link here or upload it to YouTube/Drive and share the link)

## 📌 Future Enhancements

* Payment Gateway Integration
* Admin Dashboard
* Product Ratings & Reviews
* Inventory Management
