import Education from '../models/education.model.js';

// Create a new education
const create = async (req, res) => {
  const education = new Education(req.body);
  try {
    await education.save();
    return res.status(200).json({
      message: "Education created successfully!"
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error creating education"
    });
  }
};

// Get all educations
const list = async (req, res) => {
  try {
    let educations = await Education.find();
    res.json(educations);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error retrieving educations"
    });
  }
};

// Get education by ID
const educationByID = async (req, res, next, id) => {
  try {
    let education = await Education.findById(id);
    if (!education)
      return res.status(400).json({
        error: "Education not found"
      });
    req.profile = education;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve education"
    });
  }
};

// Read single education
const read = (req, res) => {
  return res.json(req.profile);
};

// Update education
const update = async (req, res) => {
  try {
    let education = req.profile;
    education = Object.assign(education, req.body);
    await education.save();
    res.json(education);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error updating education"
    });
  }
};

// Delete education
const remove = async (req, res) => {
  try {
    let education = req.profile;
    let deletedEducation = await education.deleteOne();
    res.json(deletedEducation);
  } catch (err) {
    return res.status(400).json({
      error: err.message || "Error deleting education"
    });
  }
};

export default { create, educationByID, read, list, remove, update };
