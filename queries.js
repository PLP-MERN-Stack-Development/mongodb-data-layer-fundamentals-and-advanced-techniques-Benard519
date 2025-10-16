const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; // local MongoDB connection
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB successfully!");

    const db = client.db("plp_bookstore");
    const books = db.collection("books");

    // ===================================================
    // 📘 TASK 2: Basic CRUD Operations
    // ===================================================

    console.log("\n--- All Books ---");
    const allBooks = await books.find().toArray();
    console.log(allBooks);

    console.log("\n--- Books by Author: Robert Kiyosaki ---");
    const authorBooks = await books.find({ author: "Robert Kiyosaki" }).toArray();
    console.log(authorBooks);

    console.log("\n--- Books in the 'Self-help' Genre ---");
    const genreBooks = await books.find({ genre: "Self-help" }).toArray();
    console.log(genreBooks);

    console.log("\n--- Books Published After 2000 ---");
    const recentBooks = await books.find({ published_year: { $gt: 2000 } }).toArray();
    console.log(recentBooks);

    console.log("\n--- Updating Price of 'Clean Code' ---");
    const updateResult = await books.updateOne(
      { title: "Clean Code" },
      { $set: { price: 42.99 } }
    );
    console.log("Matched:", updateResult.matchedCount, "Modified:", updateResult.modifiedCount);

    console.log("\n--- Deleting 'The Great Gatsby' ---");
    const deleteResult = await books.deleteOne({ title: "The Great Gatsby" });
    console.log("Deleted count:", deleteResult.deletedCount);

    // ===================================================
    // ⚙️ TASK 3: Advanced Queries
    // ===================================================

    console.log("\n--- Books In Stock and Published After 2010 ---");
    const availableBooks = await books.find({
      in_stock: true,
      published_year: { $gt: 2010 }
    }).project({ title: 1, author: 1, price: 1, _id: 0 }).toArray();
    console.log(availableBooks);

    console.log("\n--- Books Sorted by Price (Ascending) ---");
    const sortedAsc = await books.find().sort({ price: 1 }).limit(5).toArray();
    console.log(sortedAsc);

    console.log("\n--- Books Sorted by Price (Descending) ---");
    const sortedDesc = await books.find().sort({ price: -1 }).limit(5).toArray();
    console.log(sortedDesc);

    console.log("\n--- Pagination: Page 1 (5 Books) ---");
    const page1 = await books.find().skip(0).limit(5).toArray();
    console.log(page1);

    console.log("\n--- Pagination: Page 2 (Next 5 Books) ---");
    const page2 = await books.find().skip(5).limit(5).toArray();
    console.log(page2);

    // ===================================================
    // 🧮 TASK 4: Aggregation Pipeline
    // ===================================================

    console.log("\n--- Average Price of Books by Genre ---");
    const avgPriceByGenre = await books.aggregate([
      { $group: { _id: "$genre", averagePrice: { $avg: "$price" }, totalBooks: { $sum: 1 } } },
      { $sort: { averagePrice: -1 } }
    ]).toArray();
    console.log(avgPriceByGenre);

    console.log("\n--- Author with the Most Books ---");
    const topAuthor = await books.aggregate([
      { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
      { $sort: { totalBooks: -1 } },
      { $limit: 1 }
    ]).toArray();
    console.log(topAuthor);

    console.log("\n--- Books Grouped by Publication Decade ---");
    const booksByDecade = await books.aggregate([
      {
        $addFields: {
          decade: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] }
        }
      },
      { $group: { _id: "$decade", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]).toArray();
    console.log(booksByDecade);

    // ===================================================
    // ⚡ TASK 5: Indexing & Performance Analysis
    // ===================================================

    console.log("\n--- Creating Indexes ---");
    await books.createIndex({ title: 1 });
    console.log("✅ Index created on 'title' field.");

    await books.createIndex({ author: 1, published_year: -1 });
    console.log("✅ Compound index created on 'author' and 'published_year'.");

    const indexes = await books.indexes();
    console.log("\n--- Current Indexes ---");
    console.log(indexes);

    console.log("\n--- Query Performance Comparison ---");
    const noIndexExplain = await books.find({ title: "Clean Code" }).explain("executionStats");
    console.log("Execution Time (ms):", noIndexExplain.executionStats.executionTimeMillis);

    const withIndexExplain = await books.find({ title: "Clean Code" }).hint({ title: 1 }).explain("executionStats");
    console.log("Execution Time (ms):", withIndexExplain.executionStats.executionTimeMillis);

  } catch (error) {
    console.error("❌ Error during operations:", error);
  } finally {
    await client.close();
    console.log("\n🔒 Connection closed.");
  }
}

main();
