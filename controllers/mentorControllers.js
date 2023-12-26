const Mentor = require('../models/mentor');

exports.createMentor = async (req, res) => {
    try {
        const mentor = await Mentor.create(req.body);
        res.status(201).json(mentor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.assignStudent = async (req, res) => {
    try {
        const mentorId = req.params.mentorId;
        const studentId = req.body.studentId;
        const mentor = await Mentor.findByIdAndUpdate(
            mentorId,
            { $addToSet: { students: studentId } },
            { new: true }
        );
        res.json(mentor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add other mentor-related functionalities here
