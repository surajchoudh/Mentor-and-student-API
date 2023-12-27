const express = require('express');
const mongoose = require('mongoose');
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/sample_data.json', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
