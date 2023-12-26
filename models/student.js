const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', default: null },
});

module.exports = mongoose.model('Student', studentSchema);
