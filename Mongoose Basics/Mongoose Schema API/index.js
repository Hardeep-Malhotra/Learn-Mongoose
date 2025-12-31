// Import mongoose for MongoDB interaction
import mongoose from "mongoose";

// Import express to create server
import express from 'express';

// Create express app
const app = express();

// Define server port
const port = 3000;

// Middleware to read form data (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Middleware to read JSON data
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/exerciseDB')
    .then(() => {
        // Runs when MongoDB connection is successful
        console.log("MongoDB Connected successfully ");
    })
    .catch(() => {
        // Runs if MongoDB connection fails
        console.log("Something went wrong when DB connected.");
    });

// ---------------- SCHEMA ----------------

// Define structure of Exercise document
const exerciseSchema = new mongoose.Schema({
    // Exercise name (string and required)
    name: {
        type: String,
        required: true
    },

    // Exercise description (string and required)
    description: {
        type: String,
        required: true
    },

    // Exercise duration (number and required)
    duration: {
        type: Number,
        required: true
    }
});

// ---------------- MODEL ----------------

// Create model from schema
// This model is used to perform DB operations
const Exercise = mongoose.model('Exercise', exerciseSchema);

// ---------------- ROUTES ----------------

// Home route
app.get('/', (req, res) => {
    res.send("Mongoose Schema API Example");
});

// POST route to insert exercise data into MongoDB
app.post('/insertExercise', (req, res) => {

    // Create a new document in Exercise collection
    Exercise.create({
        name: "Bench Press",
        description: "This is Flat Bench Exercise , target on middel chest.",
        duration: 20
    });

    // ❗ No response sent (for learning purpose)
});

// GET route to fetch all exercises from database
app.get('/findExercise', (req, res) => {

    // Find all documents from Exercise collection
    Exercise.find()
        .then((data) => {
            // Send fetched data to client
            res.send(data);
        })
        .catch((err) => {
            // Send error if something goes wrong
            res.send(err);
            console.log(err);
        });
});

// ---------------- SERVER ----------------

// Start server on port 3000
app.listen(port, () => {
    console.log("Server listing at port 3000");
});
