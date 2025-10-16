
---

````markdown
# 📚 PLP MongoDB Assignment – Week 1

## 🗄️ MongoDB – Data Layer Fundamentals and Advanced Techniques

This project demonstrates my understanding of MongoDB fundamentals using Node.js.  
It includes database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing for performance optimization.

---

## 🚀 Objectives

- Create and connect to a MongoDB database  
- Perform CRUD (Create, Read, Update, Delete) operations  
- Run advanced queries with filters, projections, sorting, and pagination  
- Use aggregation pipelines for data analysis  
- Implement indexing and measure query performance  

---

## 🧰 Technologies Used

- **Node.js** (v18 or higher)
- **MongoDB Community Edition** (local setup)
- **MongoDB Shell (mongosh)** or **MongoDB Compass**
- **MongoDB Node.js Driver**

---

## 🛠️ Setup Instructions

### 1️⃣ Install Requirements

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
- MongoDB Shell (`mongosh`) and MongoDB Compass (optional GUI)

---

### 2️⃣ Clone the Repository

```bash
git clone <your-assignment-repo-link>
cd plp_mongodb_assignment
````

---

### 3️⃣ Initialize and Install Dependencies

Run the following commands in your terminal:

```bash
npm init -y
npm install mongodb
```

---

### 4️⃣ Insert Sample Data

Run the provided script to populate your database with 10 sample books:

```bash
node insert_books.js
```

✅ You should see:

```
Connected to MongoDB successfully!
Successfully inserted 10 books.
```

You can confirm the inserted data using MongoDB Compass or the shell:

```bash
mongosh
use plp_bookstore
db.books.find().pretty()
```

---

### 5️⃣ Run Queries and Operations

Execute all CRUD, aggregation, and indexing operations:

```bash
node queries.js
```

This file performs:

* CRUD operations
* Advanced filtering and projection
* Aggregation pipelines
* Index creation and performance analysis

---

## 📊 Database Details

* **Database Name:** `plp_bookstore`
* **Collection Name:** `books`
* **Document Structure:**

  ```json
  {
    "title": "Example Book Title",
    "author": "Author Name",
    "genre": "Genre",
    "published_year": 2020,
    "price": 25.99,
    "in_stock": true,
    "pages": 300,
    "publisher": "Publisher Name"
  }
  ```

---

## 🧮 Aggregation Pipelines Implemented

1. Average price of books by genre
2. Author with the most books
3. Grouping books by publication decade

---

## ⚡ Indexing

Indexes were created to improve performance:

* Single-field index on **title**
* Compound index on **author** and **published_year**

Performance improvement was tested using the `.explain()` method.

---

## 📸 Screenshot

Include a screenshot showing:

* Your `plp_bookstore` database
* The `books` collection
* Sample inserted documents

---

## ✅ Expected Outcome

* Functional MongoDB database with structured data
* Complete set of CRUD and aggregation queries
* Demonstrated use of indexing and query optimization

---

### 👨🏾‍💻 Developed by

**Benard Machuka**

*Bachelor of Science in Computer Science – University of Eldoret*
*Power Learn Project (MERN Stack Development Pathway)*

````

---

### ✅ After adding this file:
You’ll have your **3 required files**:
1. `insert_books.js`  
2. `queries.js`  
3. `README.md`  

Then just commit and push everything:

```bash
git add .
git commit -m "Week 1 MongoDB Assignment completed"
git push origin main
````

---

Would you like me to write a short sample **GitHub commit message and folder structure** (so your repo looks clean and professional when you submit)?
