const Student = require('../models/student');
const Mentor = require('../models/mentor');

exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.assignMentor = async (req, res) => {
    try {
        const studentId = req.params.studentId;
        const mentorId = req.body.mentorId;
        const student = await Student.findByIdAndUpdate(
            studentId,
            { mentor: mentorId },
            { new: true }
        );
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add other student-related functionalities here
