// import the MongoDB client
const { MongoClient } = require("mongodb");

// main function
async function main() {
  const uri = "mongodb://127.0.0.1:27017"; // or replace with your Atlas URI if using cloud
  const client = new MongoClient(uri);

  try {
    // connect to MongoDB
    await client.connect();
    console.log("✅ Connected to MongoDB successfully!");

    // select the database and collection
    const db = client.db("plp_bookstore");
    const booksCollection = db.collection("books");

    // insert sample book data
    const result = await booksCollection.insertMany([
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        genre: "Technology",
        published_year: 1999,
        price: 45.99,
        in_stock: true,
        pages: 352,
        publisher: "Addison-Wesley"
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        published_year: 2018,
        price: 20.5,
        in_stock: true,
        pages: 320,
        publisher: "Penguin"
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        genre: "Technology",
        published_year: 2008,
        price: 50.0,
        in_stock: true,
        pages: 464,
        publisher: "Prentice Hall"
      },
      {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Motivational",
        published_year: 1937,
        price: 18.75,
        in_stock: true,
        pages: 238,
        publisher: "The Ralston Society"
      },
      {
        title: "Deep Work",
        author: "Cal Newport",
        genre: "Productivity",
        published_year: 2016,
        price: 25.99,
        in_stock: true,
        pages: 304,
        publisher: "Grand Central Publishing"
      },
      {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        genre: "Finance",
        published_year: 1997,
        price: 15.0,
        in_stock: true,
        pages: 207,
        publisher: "Plata Publishing"
      },
      {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen Covey",
        genre: "Self-help",
        published_year: 1989,
        price: 22.99,
        in_stock: true,
        pages: 381,
        publisher: "Simon & Schuster"
      },
      {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        genre: "Education",
        published_year: 2009,
        price: 80.0,
        in_stock: false,
        pages: 1312,
        publisher: "MIT Press"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        published_year: 1960,
        price: 10.99,
        in_stock: true,
        pages: 281,
        publisher: "J.B. Lippincott & Co."
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        published_year: 1925,
        price: 12.5,
        in_stock: false,
        pages: 180,
        publisher: "Charles Scribner’s Sons"
      }
    ]);

    console.log(`✅ Successfully inserted ${result.insertedCount} books.`);
  } catch (error) {
    console.error("❌ Error inserting books:", error);
  } finally {
    await client.close();
  }
}

// run the function
main();
