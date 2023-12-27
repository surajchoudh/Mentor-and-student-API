const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorControllers');

router.post('/', mentorController.createMentor);
router.put('/:mentorId/assign-student', mentorController.assignStudent);

// Add other mentor routes

module.exports = router;
