const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');




// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/studyhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check MongoDB Connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB and database created if not exists');
});

// Define Schema and Collection (Analogous to a Table)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  stream: { type: String, required: true },
});

// Create the "users" Collection
const User = mongoose.model('User', userSchema);

// Route to Handle Signup Data
app.post('/signup', async (req, res) => {
  const { name, email, password, age, stream } = req.body;

  try {
    const newUser = new User({ name, email, password, age, stream });

    // Save the data into the "users" collection
    const savedUser = await newUser.save();

    console.log('User saved to database:', savedUser); // Log saved user
    res.status(201).send('User signed up successfully');
  } catch (error) {
    console.error('Error saving user:', error.message);
    res.status(400).send('Error saving user: ' + error.message);
  }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
